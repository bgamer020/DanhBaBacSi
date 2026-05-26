import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    // 1. Nhận Refresh Token từ Client gửi lên (thường nằm trong Body hoặc Cookie)
    const { refresh_token } = await request.json();

    if (!refresh_token) {
      return NextResponse.json({ error: 'Thiếu mã làm mới phiên (Refresh Token)' }, { status: 400 });
    }

    // 2. Sử dụng Supabase Auth để xác thực và cấp token mới
    // Nếu bạn dùng Supabase Auth tích hợp, hàm này sẽ xử lý tự động
    const { data, error } = await supabase.auth.refreshSession({
      refresh_token: refresh_token,
    });

    if (error) {
      return NextResponse.json({ error: 'Phiên làm mới không hợp lệ hoặc đã hết hạn' }, { status: 401 });
    }

    // 3. Trả về các Token mới cho Frontend
    return NextResponse.json({
      access_token: data.session?.access_token,
      refresh_token: data.session?.refresh_token,
      user: data.user
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}