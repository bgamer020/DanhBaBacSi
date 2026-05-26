import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Khởi tạo Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    // 1. Gọi lệnh đăng xuất ngầm của Supabase nếu hệ thống có dùng Supabase Auth tích hợp
    // Lệnh này giúp hủy phiên làm việc từ phía Server của Supabase
    await supabase.auth.signOut();

    // 2. Chuẩn bị phản hồi thành công
    const response = NextResponse.json(
      { message: 'Đăng xuất tài khoản thành công! Hẹn gặp lại bạn.' },
      { status: 200 }
    );

    // 3. Xóa bỏ các Cookie định danh (Token) lưu trên trình duyệt của người dùng
    // Bằng cách set thời gian hết hạn (expires) về mốc thời điểm quá khứ (năm 1970)
    response.cookies.set('sb-access-token', '', { expires: new Date(0), path: '/' });
    response.cookies.set('sb-refresh-token', '', { expires: new Date(0), path: '/' });
    response.cookies.set('session_token', '', { expires: new Date(0), path: '/' });

    return response;

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Đã xảy ra sự cố trong quá trình đăng xuất.' },
      { status: 500 }
    );
  }
}