import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  try {
    // 1. Lấy Token từ Header (đây là cách bảo mật tiêu chuẩn)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Chưa đăng nhập hoặc thiếu token' }, { status: 401 });
    }

    const userId = authHeader.split(' ')[1];

    // 2. Lấy thông tin user từ bảng users
    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, phone, full_name, role, gender, avatar_url, city, is_verified')
      .eq('id', userId)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: 'Không tìm thấy người dùng.' }, { status: 404 });
    }

    // 3. Trả về thông tin user sạch (không chứa password_hash)
    return NextResponse.json({ user }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: 'Lỗi máy chủ nội bộ.' }, { status: 500 });
  }
}