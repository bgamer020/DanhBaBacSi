import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { email, token, new_password } = await request.json();

    if (!email || !token || !new_password) {
      return NextResponse.json({ error: 'Thiếu thông tin khôi phục mật khẩu.' }, { status: 400 });
    }

    // 1. Kiểm tra tính hợp lệ của token 
    // (Giả sử bạn có bảng 'password_resets' để lưu token)
    const { data: resetRecord, error: findError } = await supabase
      .from('password_resets')
      .select('*')
      .eq('email', email)
      .eq('token', token)
      .single();

    if (findError || !resetRecord) {
      return NextResponse.json({ error: 'Mã khôi phục không hợp lệ hoặc đã hết hạn.' }, { status: 403 });
    }

    // 2. Mã hóa mật khẩu mới
    const salt = await bcrypt.genSalt(10);
    const newPasswordHash = await bcrypt.hash(new_password, salt);

    // 3. Cập nhật mật khẩu mới vào bảng users
    const { error: updateError } = await supabase
      .from('users')
      .update({ 
        password_hash: newPasswordHash,
        updated_at: new Date().toISOString()
      })
      .eq('email', email);

    if (updateError) throw updateError;

    // 4. Xóa token đã sử dụng để tránh bị dùng lại (Replay attack)
    await supabase.from('password_resets').delete().eq('token', token);

    return NextResponse.json({ message: 'Mật khẩu đã được thay đổi thành công!' }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: 'Không thể cập nhật mật khẩu, vui lòng thử lại.' }, { status: 500 });
  }
}