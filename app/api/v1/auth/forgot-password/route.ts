import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Vui lòng nhập địa chỉ email của bạn.' }, { status: 400 });
    }

    // 1. Kiểm tra email có tồn tại không
    const { data: user, error } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    // CHIẾN THUẬT BẢO MẬT: 
    // Dù tìm thấy hay không, ta luôn trả về 200 OK với thông điệp chung chung.
    // Điều này ngăn chặn hacker dò tìm xem email nào đã đăng ký trong hệ thống của bạn.
    if (error || !user) {
      return NextResponse.json({ 
        message: 'Nếu email này đã đăng ký, chúng tôi đã gửi hướng dẫn khôi phục mật khẩu vào hòm thư của bạn.' 
      }, { status: 200 });
    }

    // 2. Tạo mã token bảo mật ngẫu nhiên (dùng crypto của Node.js)
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    // Ở bước này thực tế bạn cần lưu resetToken vào DB (ví dụ bảng reset_tokens)
    // để sau đó dùng đối chiếu ở API /reset-password.
    // Dưới đây là giả lập log gửi email:
    console.log(`[EMAIL] Gửi link tới ${email}: http://localhost:3000/reset-password?token=${resetToken}`);

    return NextResponse.json({ 
      message: 'Hướng dẫn khôi phục mật khẩu đã được gửi qua email của bạn.' 
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: 'Đã có lỗi xảy ra, vui lòng thử lại sau.' }, { status: 500 });
  }
}