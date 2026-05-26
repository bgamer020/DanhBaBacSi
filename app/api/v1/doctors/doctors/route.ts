import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // 1. Khởi tạo truy vấn cơ bản (Join với bảng users)
    let query = supabase.from('doctors').select(`
      id, full_name, slug, specialty, city, avatar_url, rating, fee, type,
      users (email, phone)
    `);

    // 2. Dynamic Filters (Bộ lọc động)
    if (searchParams.get('specialty')) query = query.eq('specialty', searchParams.get('specialty'));
    if (searchParams.get('city')) query = query.eq('city', searchParams.get('city'));
    if (searchParams.get('type')) query = query.eq('type', searchParams.get('type'));
    if (searchParams.get('fee_max')) query = query.lte('fee', parseInt(searchParams.get('fee_max')!));
    if (searchParams.get('rating_min')) query = query.gte('rating', parseFloat(searchParams.get('rating_min')!));
    
    // Tìm kiếm theo tên (ilike là tìm kiếm không phân biệt chữ hoa thường)
    if (searchParams.get('q')) query = query.ilike('full_name', `%${searchParams.get('q')}%`);

    // 3. Sorting (Sắp xếp)
    const sort = searchParams.get('sort');
    if (sort) {
      const [column, order] = sort.split(':');
      query = query.order(column || 'rating', { ascending: order === 'asc' });
    }

    // 4. Phân trang (Pagination)
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query.returns();

    if (error) throw error;

    return NextResponse.json({ 
      data, 
      pagination: { page, limit, total: count } 
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}