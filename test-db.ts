import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load biến môi trường từ .env.local
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function testConnection() {
  console.log("--- Đang kết nối tới Supabase... ---");
  
  try {
    // Thử truy vấn bảng 'users' (nếu bạn đã tạo bảng này)
    // Nếu bảng tên khác, hãy đổi lại tên bảng nhé
    const { data, error } = await supabase
      .from('users')
      .select('count', { count: 'exact', head: true });

    if (error) {
      console.error("❌ Lỗi kết nối:", error.message);
    } else {
      console.log("✅ Kết nối thành công!");
      console.log("📊 Số lượng user hiện có trong bảng:", data);
    }
  } catch (err) {
    console.error("❌ Không thể kết nối tới Supabase:", err);
  }
}

testConnection();