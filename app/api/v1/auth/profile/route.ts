import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function PUT(request: Request) {
  try {
    // 1. Xác thực người dùng thông qua Token
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Không có quyền truy cập.' }, { status: 401 });
    }
    const userId = authHeader.split(' ')[1];

    // 2. Nhận dữ liệu cập nhật
    const body = await request.json();
    const { full_name, phone, gender, avatar_url, city } = body;

    // 3. Cập nhật bảng users (Bảng quản lý tài khoản chung)
    const { data: updatedUser, error: userError } = await supabase
      .from('users')
      .update({
        full_name,
        phone,
        gender,
        avatar_url,
        city,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId)
      .select('id, email, phone, full_name, role, gender, avatar_url, city')
      .single();

    if (userError) throw userError;

    // 4. Đồng bộ dữ liệu sang bảng doctors (Nếu là bác sĩ)
    // Điều này đảm bảo khi bác sĩ đổi avatar, danh bạ bác sĩ cũng đổi theo
    if (updatedUser.role === 'doctor') {
      await supabase
        .from('doctors')
        .update({ 
          full_name: updatedUser.full_name,
          avatar_url: updatedUser.avatar_url,
          city: updatedUser.city
        })
        .eq('user_id', userId);
    }

    return NextResponse.json({
      message: 'Hồ sơ đã được cập nhật thành công!',
      user: updatedUser
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: 'Không thể cập nhật hồ sơ, vui lòng thử lại.' }, { status: 500 });
  }
}