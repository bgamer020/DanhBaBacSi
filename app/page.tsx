// app/page.tsx
export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Emergency bar */}
      <div style={{ background: '#fef3c7', padding: '10px', textAlign: 'center', fontSize: '14px' }}>
        🚨 Cấp cứu 24/7 · Gọi ngay: <strong>115</strong>
      </div>

      {/* Hero Section */}
      <div style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', color: '#0B2545' }}>Danh bạ Bác sĩ</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>Nền tảng y tế số hàng đầu Việt Nam</p>
        <div style={{ marginTop: '30px' }}>
          <button style={{ padding: '15px 30px', background: '#0B2545', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Tìm bác sĩ ngay
          </button>
        </div>
      </div>
    </main>
  );
}
