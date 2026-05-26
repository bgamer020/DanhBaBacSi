import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

// Khởi tạo Supabase Client với Service Role Key để truy vấn bảng users công bằng
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    // Bước 1: Tiếp nhận dữ liệu Email và Mật khẩu thô từ Frontend
    const body = await request.json();
    const { email, password } = body;

    // Xác thực dữ liệu đầu vào cơ bản
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Vui lòng nhập đầy đủ cả Email và Mật khẩu.' },
        { status: 400 }
      );
    }

    // Bước 2: Tìm kiếm người dùng trong bảng "users" theo Email
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single(); // Chỉ lấy duy nhất 1 bản ghi

    // Mẹo bảo mật: Nếu không tìm thấy user, trả về thông báo chung chung 
    // để tránh hacker dò tìm danh sách email tồn tại trong hệ thống.
    if (error || !user) {
      return NextResponse.json(
        { error: 'Email hoặc Mật khẩu không chính xác.' },
        { status: 401 }
      );
    }

    // Bước 3: Kiểm tra xem tài khoản có đang bị khóa (is_active = false) hay không
    if (!user.is_active) {
      return NextResponse.json(
        { error: 'Tài khoản của bạn đã bị tạm khóa bởi ban quản trị.' },
        { status: 403 }
      );
    }

    // Bước 4: So sánh mật khẩu thô với mật khẩu đã mã hóa (password_hash) trong DB
    // bcrypt.compare() sẽ tự giải mã chuỗi hash để đối chiếu ngầm
    const isPasswordMatch = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordMatch) {
      return NextResponse.json(
        { error: 'Email hoặc Mật khẩu không chính xác.' },
        { status: 401 }
      );
    }

    // Bước 5: Đăng nhập thành công! 
    // Bóc tách loại bỏ trường password_hash để tránh rò rỉ dữ liệu nhạy cảm về phía trình duyệt
    const { password_hash, ...userResponse } = user;

    // Phản hồi về Frontend kèm mã 200 OK
    return NextResponse.json(
      {
        message: 'Đăng nhập thành công!',
        user: userResponse
      },
      { status: 200 }
    );

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Đã xảy ra sự cố hệ thống tại máy chủ.' },
      { status: 500 }
    );
  }
}