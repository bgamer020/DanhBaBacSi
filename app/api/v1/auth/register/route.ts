import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

// Khai báo cấu hình Supabase Client sử dụng Service Role Key để có quyền ghi dữ liệu
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    // Bước 1: Tiếp nhận dữ liệu từ Frontend gửi lên
    const body = await request.json();
    const { email, phone, password, full_name, role, gender } = body;

    // Bước 2: Kiểm tra dữ liệu đầu vào (Validation)
    if (!email || !password || !full_name) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ các thông tin bắt buộc: Email, Mật khẩu và Họ tên.' },
        { status: 400 }
      );
    }

    // Bước 3: Kiểm tra trùng lặp tài khoản (Email đã tồn tại chưa)
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email này đã được đăng ký trên hệ thống. Vui lòng sử dụng email khác.' },
        { status: 400 }
      );
    }

    // Bước 4: Mã hóa (Băm) mật khẩu để bảo mật tuyệt đối
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Bước 5: Chèn dữ liệu vào bảng gốc "users"
    const { data: newUser, error: userError } = await supabase
      .from('users')
      .insert([
        {
          email,
          phone,
          password_hash: passwordHash,
          full_name,
          role: role || 'patient', // Nếu không truyền role, mặc định hệ thống coi là bệnh nhân
          gender
        }
      ])
      .select()
      .single();

    if (userError) {
      throw new Error(`Lỗi khi tạo tài khoản: ${userError.message}`);
    }

    // Bước 6: Rẽ nhánh tạo Hồ sơ đi kèm dựa vào vai trò (Role)
    if (newUser.role === 'doctor') {
      // Thuật toán tự động chuyển đổi Họ tên tiếng Việt thành mã đường dẫn đẹp (Slug)
      const basicSlug = full_name
        .toLowerCase()
        .normalize('NFD')                     // Tách các dấu tiếng Việt ra khỏi chữ cái gốc
        .replace(/[\u0300-\u036f]/g, '')     // Xóa bỏ hoàn toàn các ký tự dấu vừa tách
        .replace(/[^\w\s-]/g, '')            // Xóa các ký tự đặc biệt như . , @ #...
        .replace(/[\s_]+/g, '-')             // Thay thế khoảng trắng thành dấu gạch ngang
        .replace(/^-+|-+$/g, '');            // Cắt bỏ các dấu gạch ngang thừa ở đầu/cuối chuỗi
      
      // Cộng thêm 5 ký tự đầu của ID tài khoản để đảm bảo đường dẫn luôn là duy nhất, không lo trùng tên
      const uniqueSlug = `${basicSlug}-${newUser.id.substring(0, 5)}`;

      // Tiến hành chèn dữ liệu vào bảng danh bạ bác sĩ
      const { error: doctorError } = await supabase
        .from('doctors')
        .insert([
          {
            user_id: newUser.id,
            full_name: newUser.full_name,
            slug: uniqueSlug,
            specialty: 'Chưa cập nhật' // Sẽ được cập nhật sau ở trang quản lý của bác sĩ
          }
        ]);

      if (doctorError) {
        throw new Error(`Lỗi khi tạo hồ sơ bác sĩ: ${doctorError.message}`);
      }
    } 
    else if (newUser.role === 'patient') {
      // Nếu là bệnh nhân, tự động kích hoạt tạo 1 hồ sơ y tế trống
      const { error: patientError } = await supabase
        .from('patient_profiles')
        .insert([
          { 
            user_id: newUser.id 
          }
        ]);

      if (patientError) {
        throw new Error(`Lỗi khi tạo hồ sơ bệnh nhân: ${patientError.message}`);
      }
    }

    // Bóc tách loại bỏ trường mật khẩu băm trước khi gửi trả dữ liệu về cho Frontend
    const { password_hash, ...userResponse } = newUser;

    // Trả về kết quả thành công rực rỡ
    return NextResponse.json(
      { 
        message: 'Đăng ký tài khoản thành công!', 
        user: userResponse 
      }, 
      { status: 201 }
    );

  } catch (error: any) {
    // Đón các lỗi phát sinh trong quá trình chạy và phản hồi về client
    return NextResponse.json(
      { error: error.message || 'Đã xảy ra sự cố không mong muốn tại máy chủ.' },
      { status: 500 }
    );
  }
}