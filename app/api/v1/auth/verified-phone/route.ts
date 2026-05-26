import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { phone, otp_code } = await request.json();

    if (!phone || !otp_code) {
      return NextResponse.json({ error: 'Vui lòng cung cấp SĐT và mã OTP.' }, { status: 400 });
    }

    // 1. Kiểm tra mã OTP trong cơ sở dữ liệu (Giả định bạn có bảng 'otp_verifications')
    const { data: otpRecord, error: otpError } = await supabase
      .from('otp_verifications')
      .select('*')
      .eq('phone', phone)
      .eq('otp_code', otp_code)
      .single();

    // 2. Xác thực OTP
    // Kiểm tra xem mã có tồn tại và còn trong thời hạn hiệu lực không (thường là 5 phút)
    if (otpError || !otpRecord || new Date() > new Date(otpRecord.expires_at)) {
      return NextResponse.json({ error: 'Mã OTP không đúng hoặc đã hết hạn.' }, { status: 400 });
    }

    // 3. Nếu đúng, cập nhật trạng thái đã xác minh cho user
    const { error: updateError } = await supabase
      .from('users')
      .update({ is_verified: true })
      .eq('phone', phone);

    if (updateError) throw updateError;

    // 4. Xóa mã OTP sau khi sử dụng thành công để bảo mật
    await supabase.from('otp_verifications').delete().eq('phone', phone);

    return NextResponse.json({ message: 'Xác minh số điện thoại thành công!' }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: 'Lỗi xác thực, vui lòng thử lại.' }, { status: 500 });
  }
}