// 1. PHẦN KHAI BÁO (Giữ nguyên)
export default function HomePage() {
  return (
    // 2. PHẦN MỞ ĐẦU (Thẻ bao bọc chính)
    <main>
      
<body>

<!-- Emergency bar -->
<div className="emergency-bar">
  🚨 Cấp cứu 24/7 · Gọi ngay: <strong>115</strong> · Hoặc đến cơ sở y tế gần nhất
</div>

<!-- NAV -->
<nav id="nav" style="top:41px">
  <div className="nav-brand">
    <div className="nav-brand-ico">🏥</div>
    <div className="nav-brand-name">DanhBa<em>BacSi</em></div>
  </div>
  <div className="nav-links">
    <button className="nl active" onclick="show('home',this)">Trang chủ</button>
    <button className="nl" onclick="show('doctors',this)">Tìm bác sĩ</button>
    <button className="nl" onclick="show('booking',this)">Đặt lịch khám</button>
    <button className="nl" onclick="show('tele',this)">Tư vấn trực tuyến</button>
    <button className="nl" onclick="show('pharmacy',this)">Nhà thuốc</button>
    <button className="nl" onclick="show('community',this)">Cộng đồng</button>
    <button className="nl" onclick="show('health-records',this)">Hồ sơ sức khoẻ</button>
  </div>
  <div className="nav-actions">
    <div className="nav-search">🔍 Tìm bác sĩ, chuyên khoa...</div>
    <button className="nav-cta" onclick="show('booking',null)">Đặt lịch ngay</button>
  </div>
</nav>

<!-- ══════ TRANG CHỦ ══════ -->
<div className="page active" id="page-home" style="margin-top:41px">
  <div className="hero">
    <div className="hero-blob"></div>
    <div className="hero-cross"></div>
    <div className="hero-left">
      <div className="hero-eyebrow">Nền tảng y tế số hàng đầu Việt Nam</div>
      <h1>Tìm đúng bác sĩ.<br><em>Khám đúng lúc.</em><br>Khoẻ mạnh hơn.</h1>
      <p className="hero-p">45.000+ bác sĩ được xác minh · Đặt lịch trong 30 giây · Tư vấn trực tuyến miễn phí · Toa thuốc điện tử → Giao thuốc trong 2 giờ.</p>
      <div className="hero-actions">
        <button className="btn-primary" onclick="show('doctors',null)">🔍 Tìm bác sĩ ngay</button>
        <button className="btn-green" onclick="show('tele',null)">💬 Hỏi bác sĩ miễn phí</button>
      </div>
      <div className="hero-trust">
        <div className="ht-stat"><div className="ht-n">45K+</div><div className="ht-l">Bác sĩ xác minh</div></div>
        <div className="ht-div"></div>
        <div className="ht-stat"><div className="ht-n">2.8M</div><div className="ht-l">Lượt đặt lịch</div></div>
        <div className="ht-div"></div>
        <div className="ht-stat"><div className="ht-n">98%</div><div className="ht-l">Hài lòng</div></div>
        <div className="ht-div"></div>
        <div className="ht-stat"><div className="ht-n">2h</div><div className="ht-l">Giao thuốc</div></div>
      </div>
    </div>
    <div className="hero-right">
      <div className="search-box">
        <div className="sb-title">Tìm bác sĩ phù hợp</div>
        <div className="sb-fields">
          <div className="sb-field"><label>Chuyên khoa</label>
            <select><option>Tất cả chuyên khoa</option><option>Nội khoa</option><option>Nhi khoa</option><option>Tim mạch</option><option>Da liễu</option><option>Tai mũi họng</option><option>Sản phụ khoa</option><option>Mắt</option><option>Thần kinh</option></select>
          </div>
          <div className="sb-row">
            <div className="sb-field"><label>Thành phố</label>
              <select><option>TP. HCM</option><option>Hà Nội</option><option>Đà Nẵng</option><option>Cần Thơ</option></select>
            </div>
            <div className="sb-field"><label>Hình thức</label>
              <select><option>Tất cả</option><option>Khám trực tiếp</option><option>Trực tuyến</option></select>
            </div>
          </div>
          <div className="sb-field"><label>Tên bác sĩ hoặc bệnh viện</label>
            <input placeholder="VD: BS. Nguyễn Văn A, BV Bạch Mai..."/>
          </div>
        </div>
        <button className="sb-submit" onclick="show('doctors',null)">🔍 Tìm bác sĩ →</button>
      </div>
      <div className="quick-card" onclick="show('tele',null)">
        <div className="qc-ico" style="background:rgba(5,150,105,.2)">💬</div>
        <div><div className="qc-title">Hỏi bác sĩ ngay — Miễn phí</div><div className="qc-sub">Tư vấn online · Phản hồi trong 15 phút</div></div>
        <div className="qc-arrow">→</div>
      </div>
      <div className="quick-card" onclick="show('pharmacy',null)">
        <div className="qc-ico" style="background:rgba(200,84,26,.2)">💊</div>
        <div><div className="qc-title">Đặt thuốc theo toa — Giao 2h</div><div className="qc-sub">Long Châu · An Khang · Pharmacity</div></div>
        <div className="qc-arrow">→</div>
      </div>
      <div className="quick-card" onclick="show('health-records',null)">
        <div className="qc-ico" style="background:rgba(8,145,178,.2)">📋</div>
        <div><div className="qc-title">Hồ sơ sức khoẻ điện tử</div><div className="qc-sub">Lưu kết quả xét nghiệm · Lịch sử khám</div></div>
        <div className="qc-arrow">→</div>
      </div>
    </div>
  </div>

  <!-- Specialties -->
  <div className="section">
    <div className="sec-eyebrow">Chuyên khoa phổ biến</div>
    <h2 className="sec-h">Tìm bác sĩ theo<br><em>chuyên khoa của bạn</em></h2>
    <div className="spec-grid">
      <div className="spec-card" onclick="show('doctors',null)"><div className="spec-ico">🫀</div><div className="spec-name">Tim mạch</div><div className="spec-count">1.240 bác sĩ</div><span className="spec-tag dtag-navy">Phổ biến nhất</span></div>
      <div className="spec-card" onclick="show('doctors',null)"><div className="spec-ico">🧒</div><div className="spec-name">Nhi khoa</div><div className="spec-count">2.180 bác sĩ</div><span className="spec-tag dtag-teal">Đặt nhiều</span></div>
      <div className="spec-card" onclick="show('doctors',null)"><div className="spec-ico">🧠</div><div className="spec-name">Thần kinh</div><div className="spec-count">890 bác sĩ</div><span className="spec-tag dtag-navy">Chuyên sâu</span></div>
      <div className="spec-card" onclick="show('doctors',null)"><div className="spec-ico">🦷</div><div className="spec-name">Răng hàm mặt</div><div className="spec-count">3.420 bác sĩ</div><span className="spec-tag dtag-org">Nhiều nhất</span></div>
      <div className="spec-card" onclick="show('doctors',null)"><div className="spec-ico">👁️</div><div className="spec-name">Nhãn khoa</div><div className="spec-count">680 bác sĩ</div></div>
      <div className="spec-card" onclick="show('doctors',null)"><div className="spec-ico">🫁</div><div className="spec-name">Hô hấp</div><div className="spec-count">740 bác sĩ</div></div>
      <div className="spec-card" onclick="show('doctors',null)"><div className="spec-ico">🤰</div><div className="spec-name">Sản phụ khoa</div><div className="spec-count">1.560 bác sĩ</div></div>
      <div className="spec-card" onclick="show('doctors',null)"><div className="spec-ico">🦴</div><div className="spec-name">Cơ xương khớp</div><div className="spec-count">920 bác sĩ</div></div>
    </div>
  </div>

  <!-- Top doctors preview -->
  <div className="bg-sect">
    <div className="bg-sect-inner">
      <div className="sec-eyebrow">Bác sĩ được đánh giá cao</div>
      <h2 className="sec-h">Gặp các bác sĩ<br><em>hàng đầu hôm nay</em></h2>
      <div className="doc-grid">
        <div className="doc-card">
          <div className="doc-card-top">
            <div className="doc-ava" style="background:linear-gradient(135deg,var(--navy),var(--navy2));width:60px;height:60px;border-radius:14px;position:relative">NT<div className="doc-verified">✓</div></div>
            <div>
              <div className="doc-info-name">GS.TS. Nguyễn Thị Thanh</div>
              <div className="doc-info-spec">Tim mạch · Siêu âm tim</div>
              <div className="doc-info-hospital">BV Chợ Rẫy TP.HCM · 28 năm KN</div>
              <div className="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.9 (1.284 đánh giá)</div>
            </div>
          </div>
          <div className="doc-card-body">
            <div className="doc-tags"><span className="dtag dtag-navy">Tim mạch</span><span className="dtag dtag-teal">Siêu âm tim</span><span className="dtag dtag-green">Xác minh Bộ Y tế</span></div>
            <div className="doc-stats">
              <div className="dstat"><div className="dstat-n">28+</div><div className="dstat-l">Năm KN</div></div>
              <div className="dstat"><div className="dstat-n">4.800+</div><div className="dstat-l">Bệnh nhân</div></div>
              <div className="dstat"><div className="dstat-n">98%</div><div className="dstat-l">Hài lòng</div></div>
            </div>
            <div className="doc-avail">Còn lịch thứ 3 & thứ 5 tuần này</div>
            <button className="doc-book-btn">📅 Đặt lịch khám</button>
            <button className="doc-consult-btn">💬 Tư vấn trực tuyến</button>
          </div>
        </div>
        <div className="doc-card">
          <div className="doc-card-top">
            <div className="doc-ava" style="background:linear-gradient(135deg,var(--teal),#0E7490);width:60px;height:60px;border-radius:14px;position:relative">TH<div className="doc-verified">✓</div></div>
            <div>
              <div className="doc-info-name">PGS. Trần Văn Hùng</div>
              <div className="doc-info-spec">Nhi khoa · Dinh dưỡng trẻ em</div>
              <div className="doc-info-hospital">BV Nhi Đồng 1 TP.HCM · 18 năm KN</div>
              <div className="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.8 (2.140 đánh giá)</div>
            </div>
          </div>
          <div className="doc-card-body">
            <div className="doc-tags"><span className="dtag dtag-teal">Nhi khoa</span><span className="dtag dtag-navy">Dinh dưỡng</span><span className="dtag dtag-green">Xác minh</span></div>
            <div className="doc-stats">
              <div className="dstat"><div className="dstat-n">18+</div><div className="dstat-l">Năm KN</div></div>
              <div className="dstat"><div className="dstat-n">6.200+</div><div className="dstat-l">Bệnh nhân</div></div>
              <div className="dstat"><div className="dstat-n">99%</div><div className="dstat-l">Hài lòng</div></div>
            </div>
            <div className="doc-avail">Còn lịch online ngay hôm nay</div>
            <button className="doc-book-btn">📅 Đặt lịch khám</button>
            <button className="doc-consult-btn">💬 Tư vấn trực tuyến</button>
          </div>
        </div>
        <div className="doc-card">
          <div className="doc-card-top">
            <div className="doc-ava" style="background:linear-gradient(135deg,var(--org),var(--org2));width:60px;height:60px;border-radius:14px;position:relative">LM<div className="doc-verified">✓</div></div>
            <div>
              <div className="doc-info-name">TS.BS. Lê Thị Mai</div>
              <div className="doc-info-spec">Da liễu · Thẩm mỹ da</div>
              <div className="doc-info-hospital">Phòng khám Đa khoa Quốc tế · 15 năm KN</div>
              <div className="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.9 (986 đánh giá)</div>
            </div>
          </div>
          <div className="doc-card-body">
            <div className="doc-tags"><span className="dtag dtag-org">Da liễu</span><span className="dtag dtag-navy">Thẩm mỹ da</span><span className="dtag dtag-green">Xác minh</span></div>
            <div className="doc-stats">
              <div className="dstat"><div className="dstat-n">15+</div><div className="dstat-l">Năm KN</div></div>
              <div className="dstat"><div className="dstat-n">3.800+</div><div className="dstat-l">Bệnh nhân</div></div>
              <div className="dstat"><div className="dstat-n">97%</div><div className="dstat-l">Hài lòng</div></div>
            </div>
            <div className="doc-avail">Còn lịch thứ 2, 4, 6</div>
            <button className="doc-book-btn">📅 Đặt lịch khám</button>
            <button className="doc-consult-btn">💬 Tư vấn trực tuyến</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════ TÌM BÁC SĨ ══════ -->
<div className="page" id="page-doctors" style="margin-top:41px">
  <div className="section" style="padding-top:100px">
    <div className="sec-eyebrow">45.000+ Bác sĩ</div>
    <h2 className="sec-h">Tìm bác sĩ phù hợp<br><em>với bạn</em></h2>
    <!-- Filter row -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin:20px 0;padding:16px;background:#fff;border:1px solid var(--border);border-radius:12px;box-shadow:var(--sh)">
      <select style="padding:8px 13px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);outline:none"><option>Tất cả chuyên khoa</option><option>Nội khoa</option><option>Nhi khoa</option><option>Tim mạch</option><option>Da liễu</option></select>
      <select style="padding:8px 13px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);outline:none"><option>TP. HCM</option><option>Hà Nội</option><option>Đà Nẵng</option></select>
      <select style="padding:8px 13px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);outline:none"><option>Khám trực tiếp + Online</option><option>Khám trực tiếp</option><option>Tư vấn online</option></select>
      <select style="padding:8px 13px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);outline:none"><option>Sắp xếp: Đánh giá cao</option><option>Số bệnh nhân</option><option>Phí tư vấn thấp nhất</option><option>Lịch trống sớm nhất</option></select>
      <button style="padding:8px 18px;border-radius:8px;background:linear-gradient(135deg,var(--navy),var(--navy2));color:#fff;border:none;font-size:13px;font-weight:700;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">Áp dụng bộ lọc</button>
    </div>
    <div className="doc-grid" style="grid-template-columns:repeat(3,1fr)">
      <div className="doc-card"><div className="doc-card-top"><div className="doc-ava" style="background:linear-gradient(135deg,var(--navy),var(--navy2));width:60px;height:60px;border-radius:14px;position:relative">NT<div className="doc-verified">✓</div></div><div><div className="doc-info-name">GS.TS. Nguyễn Thị Thanh</div><div className="doc-info-spec">Tim mạch · Siêu âm tim</div><div className="doc-info-hospital">BV Chợ Rẫy · 28 năm KN</div><div className="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.9 (1.284)</div></div></div><div className="doc-card-body"><div className="doc-tags"><span className="dtag dtag-navy">Tim mạch</span><span className="dtag dtag-green">Xác minh</span></div><div className="doc-stats"><div className="dstat"><div className="dstat-n">28+</div><div className="dstat-l">Năm KN</div></div><div className="dstat"><div className="dstat-n">4.800+</div><div className="dstat-l">BN</div></div><div className="dstat"><div className="dstat-n">98%</div><div className="dstat-l">Hài lòng</div></div></div><div className="doc-avail">Còn lịch thứ 3 & thứ 5</div><button className="doc-book-btn">📅 Đặt lịch khám</button><button className="doc-consult-btn">💬 Tư vấn online</button></div></div>
      <div className="doc-card"><div className="doc-card-top"><div className="doc-ava" style="background:linear-gradient(135deg,var(--teal),#0E7490);width:60px;height:60px;border-radius:14px;position:relative">TH<div className="doc-verified">✓</div></div><div><div className="doc-info-name">PGS. Trần Văn Hùng</div><div className="doc-info-spec">Nhi khoa · Dinh dưỡng</div><div className="doc-info-hospital">BV Nhi Đồng 1 · 18 năm KN</div><div className="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.8 (2.140)</div></div></div><div className="doc-card-body"><div className="doc-tags"><span className="dtag dtag-teal">Nhi khoa</span><span className="dtag dtag-green">Xác minh</span></div><div className="doc-stats"><div className="dstat"><div className="dstat-n">18+</div><div className="dstat-l">Năm KN</div></div><div className="dstat"><div className="dstat-n">6.200+</div><div className="dstat-l">BN</div></div><div className="dstat"><div className="dstat-n">99%</div><div className="dstat-l">Hài lòng</div></div></div><div className="doc-avail">Còn lịch online hôm nay</div><button className="doc-book-btn">📅 Đặt lịch khám</button><button className="doc-consult-btn">💬 Tư vấn online</button></div></div>
      <div className="doc-card"><div className="doc-card-top"><div className="doc-ava" style="background:linear-gradient(135deg,var(--org),var(--org2));width:60px;height:60px;border-radius:14px;position:relative">LM<div className="doc-verified">✓</div></div><div><div className="doc-info-name">TS.BS. Lê Thị Mai</div><div className="doc-info-spec">Da liễu · Thẩm mỹ da</div><div className="doc-info-hospital">PK Đa khoa Quốc tế · 15 năm</div><div className="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.9 (986)</div></div></div><div className="doc-card-body"><div className="doc-tags"><span className="dtag dtag-org">Da liễu</span><span className="dtag dtag-green">Xác minh</span></div><div className="doc-stats"><div className="dstat"><div className="dstat-n">15+</div><div className="dstat-l">Năm KN</div></div><div className="dstat"><div className="dstat-n">3.800+</div><div className="dstat-l">BN</div></div><div className="dstat"><div className="dstat-n">97%</div><div className="dstat-l">Hài lòng</div></div></div><div className="doc-avail">Còn lịch thứ 2, 4, 6</div><button className="doc-book-btn">📅 Đặt lịch khám</button><button className="doc-consult-btn">💬 Tư vấn online</button></div></div>
    </div>
  </div>
</div>

<!-- ══════ ĐẶT LỊCH KHÁM ══════ -->
<div className="page" id="page-booking" style="margin-top:41px">
  <div className="booking-section">
    <div className="booking-inner" style="padding-top:100px">
      <div>
        <div className="sec-eyebrow">Đặt lịch khám</div>
        <h2 className="sec-h">Đặt lịch trong 30 giây<br><em>— xác nhận tức thì</em></h2>
        <p className="sec-p" style="margin-bottom:32px">Không cần gọi điện chờ đợi. Chọn bác sĩ, chọn giờ, điền thông tin — xong. Nhận xác nhận qua email và Zalo ngay lập tức.</p>
        <div className="booking-steps">
          <div className="step"><div className="step-num" style="background:linear-gradient(135deg,var(--navy),var(--navy2));color:#fff">1</div><div><div className="step-title">Chọn chuyên khoa & bác sĩ</div><div className="step-desc">Tìm theo chuyên khoa, bệnh viện, đánh giá hoặc tên bác sĩ. Xem đầy đủ profile, kinh nghiệm và lịch trống.</div></div></div>
          <div className="step"><div className="step-num" style="background:linear-gradient(135deg,var(--teal),#0E7490);color:#fff">2</div><div><div className="step-title">Chọn ngày giờ & hình thức</div><div className="step-desc">Khám trực tiếp tại phòng khám hoặc tư vấn online qua video call. Chọn khung giờ còn trống.</div></div></div>
          <div className="step"><div className="step-num" style="background:linear-gradient(135deg,var(--org),var(--org2));color:#fff">3</div><div><div className="step-title">Điền thông tin & mô tả triệu chứng</div><div className="step-desc">Mô tả ngắn về tình trạng sức khoẻ để bác sĩ chuẩn bị trước. Upload kết quả xét nghiệm nếu có.</div></div></div>
          <div className="step"><div className="step-num" style="background:linear-gradient(135deg,var(--green),#10B981);color:#fff">4</div><div><div className="step-title">Xác nhận & nhận reminder</div><div className="step-desc">Email + Zalo xác nhận ngay. Nhắc lịch trước 1 ngày và 1 giờ. Toa thuốc điện tử sau buổi khám.</div></div></div>
        </div>
      </div>
      <div className="booking-card">
        <div className="bc-title">Đặt lịch khám</div>
        <div className="bc-sub">Điền thông tin · Xác nhận trong 2 phút</div>
        <div className="bc-fields">
          <div className="bcf"><label>Họ và tên bệnh nhân</label><input placeholder="Nguyễn Văn A"/></div>
          <div className="bcf-row">
            <div className="bcf"><label>Số điện thoại</label><input placeholder="090 xxx xxxx"/></div>
            <div className="bcf"><label>Ngày sinh</label><input type="date"/></div>
          </div>
          <div className="bcf"><label>Chuyên khoa cần khám</label>
            <select><option>Chọn chuyên khoa</option><option>Nội khoa</option><option>Nhi khoa</option><option>Tim mạch</option><option>Da liễu</option><option>Tai mũi họng</option><option>Sản phụ khoa</option></select>
          </div>
          <div className="bcf"><label>Bác sĩ (tuỳ chọn)</label><input placeholder="Để trống nếu chưa chọn bác sĩ cụ thể"/></div>
          <div className="bcf-row">
            <div className="bcf"><label>Ngày khám</label><input type="date"/></div>
            <div className="bcf"><label>Hình thức</label><select><option>Khám trực tiếp</option><option>Tư vấn online</option></select></div>
          </div>
          <div className="bcf"><label>Mô tả triệu chứng</label><input placeholder="Mô tả ngắn tình trạng sức khoẻ..."/></div>
        </div>
        <button className="bc-submit">📅 Đặt lịch ngay — Xác nhận trong 2 phút</button>
        <div className="bc-note">🔒 Thông tin bảo mật · 🔔 Nhận reminder tự động · Miễn phí đặt lịch</div>
      </div>
    </div>
  </div>
</div>

<!-- ══════ TƯ VẤN TRỰC TUYẾN ══════ -->
<div className="page" id="page-tele" style="margin-top:41px">
  <div className="navy-sect" style="padding-top:100px">
    <div className="navy-inner">
      <div className="sec-eyebrow white-eye">Tư vấn trực tuyến</div>
      <h2 className="sec-h white">Hỏi bác sĩ ngay<br><em style="-webkit-text-fill-color:var(--org2)">từ nhà của bạn</em></h2>
      <p className="sec-p white" style="margin-bottom:40px">Không cần đi xa · Không cần chờ đợi · Bác sĩ phản hồi trong 15–30 phút · An toàn và bảo mật hoàn toàn.</p>
      <div className="tele-grid">
        <div className="tele-card"><div className="tc-ico">💬</div><div className="tc-title">Chat với bác sĩ</div><div className="tc-desc">Gửi câu hỏi, mô tả triệu chứng và nhận tư vấn qua tin nhắn. Upload ảnh/kết quả xét nghiệm.</div><div className="tc-free">MIỄN PHÍ <span>/ câu hỏi đầu tiên</span></div></div>
        <div className="tele-card"><div className="tc-ico">📞</div><div className="tc-title">Gọi video với bác sĩ</div><div className="tc-desc">Video call 15–20 phút với bác sĩ chuyên khoa. Nhận toa thuốc điện tử sau buổi tư vấn.</div><div className="tc-price">150.000đ <span>/ buổi 15 phút</span></div></div>
        <div className="tele-card"><div className="tc-ico">🏠</div><div className="tc-title">Bác sĩ đến nhà</div><div className="tc-desc">Đặt lịch để bác sĩ đến tận nhà khám. Phù hợp cho người già, trẻ em và trường hợp khó di chuyển.</div><div className="tc-price">500.000đ+ <span>/ lần khám</span></div></div>
        <div className="tele-card"><div className="tc-ico">🧪</div><div className="tc-title">Xét nghiệm tại nhà</div><div className="tc-desc">Nhân viên y tế đến lấy mẫu xét nghiệm tại nhà. Kết quả online trong 4–24 giờ.</div><div className="tc-price">250.000đ+ <span>/ gói xét nghiệm</span></div></div>
      </div>
      <div style="margin-top:28px;text-align:center">
        <button className="btn-green" onclick="show('booking',null)" style="font-size:15px;padding:14px 32px">Đặt tư vấn trực tuyến ngay →</button>
      </div>
    </div>
  </div>
</div>

<!-- ══════ NHÀ THUỐC ══════ -->
<div className="page" id="page-pharmacy" style="margin-top:41px">
  <div className="pharma-section">
    <div className="pharma-inner" style="padding-top:100px">
      <div>
        <div className="sec-eyebrow">Toa thuốc điện tử & Giao thuốc</div>
        <h2 className="sec-h">Toa thuốc xong —<br><em>giao trong 2 giờ</em></h2>
        <p className="sec-p" style="margin-bottom:28px">Sau buổi khám, bác sĩ xuất toa điện tử ngay trên hệ thống. Bạn xác nhận và thuốc được giao từ nhà thuốc đối tác gần nhất.</p>
        <div className="pharma-flow">
          <div className="pf-step"><div className="pfs-num">1</div><div><div className="pfs-title">Bác sĩ xuất toa điện tử</div><div className="pfs-desc">Toa thuốc được gửi thẳng vào app của bạn sau buổi khám</div></div></div>
          <div className="pf-step"><div className="pfs-num">2</div><div><div className="pfs-title">Chọn nhà thuốc & xác nhận</div><div className="pfs-desc">Hệ thống tự tìm nhà thuốc gần nhất còn đủ thuốc theo toa</div></div></div>
          <div className="pf-step"><div className="pfs-num">3</div><div><div className="pfs-title">Thanh toán online hoặc COD</div><div className="pfs-desc">VNPay, MoMo, chuyển khoản, hoặc thanh toán khi nhận hàng</div></div></div>
          <div className="pf-step"><div className="pfs-num">4</div><div><div className="pfs-title">Giao thuốc trong 2 giờ</div><div className="pfs-desc">Shipper từ nhà thuốc đối tác giao đến tận nhà bạn</div></div></div>
        </div>
        <div style="margin-top:20px"><button className="btn-primary" onclick="show('booking',null)">Khám và nhận toa thuốc ngay →</button></div>
      </div>
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--muted);margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px">Nhà thuốc đối tác</div>
        <div className="pharma-partners">
          <div className="pp"><div className="pp-ico">💊</div><div><div className="pp-name">Long Châu</div><div className="pp-desc">1.400+ cửa hàng toàn quốc</div></div></div>
          <div className="pp"><div className="pp-ico">🏥</div><div><div className="pp-name">An Khang</div><div className="pp-desc">600+ cửa hàng · Giá tốt</div></div></div>
          <div className="pp"><div className="pp-ico">💉</div><div><div className="pp-name">Pharmacity</div><div className="pp-desc">500+ cửa hàng · 24/7</div></div></div>
          <div className="pp"><div className="pp-ico">🏪</div><div><div className="pp-name">Medicare</div><div className="pp-desc">300+ cửa hàng</div></div></div>
        </div>
        <div style="margin-top:18px;background:var(--lgreen);border:1px solid rgba(5,150,105,.2);border-radius:12px;padding:16px;font-size:13px;color:var(--green)">
          <strong>✅ Đảm bảo thuốc chính hãng</strong> — Tất cả nhà thuốc đối tác được cấp phép Bộ Y tế và cam kết thuốc có nguồn gốc xuất xứ rõ ràng.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════ HỒ SƠ SỨC KHOẺ ══════ -->
<div className="page" id="page-health-records" style="margin-top:41px">
  <div className="section" style="padding-top:100px">
    <div className="sec-eyebrow">Hồ sơ sức khoẻ điện tử</div>
    <h2 className="sec-h">Toàn bộ lịch sử sức khoẻ<br><em>trong tầm tay</em></h2>
    <p className="sec-p">Lưu trữ và quản lý hồ sơ sức khoẻ cá nhân — từ lịch sử khám, kết quả xét nghiệm đến toa thuốc và lịch tái khám. Chia sẻ an toàn với bác sĩ khi cần.</p>
    <div className="record-cards">
      <div className="rc"><div className="rc-ico">📋</div><div className="rc-title">Lịch sử khám bệnh</div><div className="rc-desc">Toàn bộ lần khám, chẩn đoán và ghi chú của bác sĩ được lưu lại theo thứ tự thời gian</div></div>
      <div className="rc"><div className="rc-ico">🧪</div><div className="rc-title">Kết quả xét nghiệm</div><div className="rc-desc">Upload và lưu trữ kết quả máu, nước tiểu, siêu âm, X-quang. Chia sẻ với bác sĩ bằng 1 click</div></div>
      <div className="rc"><div className="rc-ico">💊</div><div className="rc-title">Lịch sử toa thuốc</div><div className="rc-desc">Toa thuốc điện tử từ các bác sĩ DanhBaBacSi. Đặt lại thuốc dễ dàng khi hết</div></div>
      <div className="rc"><div className="rc-ico">🔔</div><div className="rc-title">Nhắc uống thuốc & tái khám</div><div className="rc-desc">Đặt lịch nhắc uống thuốc đúng giờ và nhắc ngày tái khám định kỳ qua Zalo/SMS</div></div>
    </div>
    <div style="text-align:center;margin-top:28px"><button className="btn-primary" onclick="show('contact',null)">Tạo hồ sơ sức khoẻ miễn phí →</button></div>
  </div>
</div>

<!-- ══════ CỘNG ĐỒNG ══════ -->
<div className="page" id="page-community" style="margin-top:41px">
  <div className="section" style="padding-top:100px">
    <div className="sec-eyebrow">Cộng đồng sức khoẻ</div>
    <h2 className="sec-h">Hỏi bác sĩ · Chia sẻ<br><em>kinh nghiệm thật</em></h2>
    <p className="sec-p">Diễn đàn sức khoẻ với sự tham gia của bác sĩ xác minh — câu hỏi của bạn được trả lời bởi chuyên gia thật, không phải AI.</p>
    <div className="comm-grid">
      <div className="comm-card">
        <div className="cc-top"><div className="cc-ava" style="background:linear-gradient(135deg,var(--teal),#0E7490)">BS</div><div><div className="cc-user">BS. Trần Văn Hùng</div><div className="cc-role">Nhi khoa · BV Nhi Đồng 1</div></div><span className="cc-verified-badge">✓ Bác sĩ</span></div>
        <div className="cc-q">Bé 8 tháng sốt 38.5°C — khi nào cần đưa đến bệnh viện?</div>
        <div className="cc-preview">Sốt là phản ứng tự nhiên của cơ thể. Với bé 8 tháng, sốt dưới 38.5°C chưa cần lo ngại quá. Tuy nhiên bạn cần theo dõi các dấu hiệu nguy hiểm như...</div>
        <div className="cc-meta"><span className="cc-answers">48 trả lời</span><span>3.2K lượt xem</span><span>Nhi khoa</span></div>
      </div>
      <div className="comm-card">
        <div className="cc-top"><div className="cc-ava" style="background:linear-gradient(135deg,var(--navy),var(--navy2))">NT</div><div><div className="cc-user">Nguyễn Thị Thu</div><div className="cc-role">Người dùng · HCM</div></div></div>
        <div className="cc-q">Xét nghiệm cholesterol cao 6.2 — cần làm gì ngay?</div>
        <div className="cc-preview">Vừa nhận kết quả xét nghiệm, cholesterol toàn phần 6.2 mmol/L, LDL 4.1. Bác sĩ cho mình hỏi mức này có nguy hiểm không và cần thay đổi...</div>
        <div className="cc-meta"><span className="cc-answers">24 trả lời</span><span>1.8K lượt xem</span><span>Tim mạch</span></div>
      </div>
      <div className="comm-card">
        <div className="cc-top"><div className="cc-ava" style="background:linear-gradient(135deg,var(--org),var(--org2))">LH</div><div><div className="cc-user">Lê Thị Hương</div><div className="cc-role">Người dùng · Hà Nội</div></div></div>
        <div className="cc-q">Mang thai tuần 28, đau lưng nhiều có đáng lo không?</div>
        <div className="cc-preview">Thai 28 tuần và đau lưng ngày càng tăng, đặc biệt vào buổi chiều tối. Mình đã dùng gối đặc biệt cho bà bầu nhưng vẫn không đỡ. Các mẹ đã...</div>
        <div className="cc-meta"><span className="cc-answers">31 trả lời</span><span>2.1K lượt xem</span><span>Sản phụ khoa</span></div>
      </div>
    </div>
  </div>
</div>

<!-- ══════ LIÊN HỆ / ĐĂNG KÝ ══════ -->
<div className="page" id="page-contact" style="margin-top:41px">
  <div className="contact-sect">
    <div className="contact-inner" style="padding-top:100px">
      <div>
        <div className="sec-eyebrow">Đăng ký tài khoản</div>
        <h2 className="sec-h">Chăm sóc sức khoẻ<br><em>thông minh hơn</em></h2>
        <p className="sec-p" style="margin-bottom:28px">Tạo tài khoản miễn phí để đặt lịch, lưu hồ sơ sức khoẻ, tư vấn bác sĩ và nhận thông báo kết quả xét nghiệm.</p>
        <div className="contact-info">
          <div className="ci-card"><div className="ci-ico">📅</div><div className="ci-title">Đặt lịch không giới hạn</div><div className="ci-desc">Đặt lịch khám trực tiếp và tư vấn online với 45.000+ bác sĩ. Nhận xác nhận tức thì.</div></div>
          <div className="ci-card"><div className="ci-ico">📋</div><div className="ci-title">Hồ sơ sức khoẻ điện tử</div><div className="ci-desc">Lưu trữ toàn bộ lịch sử khám, xét nghiệm, toa thuốc. Chia sẻ với bác sĩ mới dễ dàng.</div></div>
          <div className="ci-card"><div className="ci-ico">💬</div><div className="ci-title">Hỏi bác sĩ miễn phí</div><div className="ci-desc">Câu hỏi đầu tiên hoàn toàn miễn phí. Bác sĩ trả lời trong vòng 15–30 phút.</div><div className="ci-hl">Câu 1: MIỄN PHÍ</div></div>
        </div>
      </div>
      <div className="cf-wrap">
        <div className="cf-title">Tạo tài khoản miễn phí</div>
        <div className="cf-sub">Đăng ký trong 30 giây · Không cần thẻ tín dụng</div>
        <div className="cf-r">
          <div className="cf-f"><label>Họ và tên</label><input placeholder="Nguyễn Văn A"/></div>
          <div className="cf-f"><label>Ngày sinh</label><input type="date"/></div>
          <div className="cf-f cf-full"><label>Email</label><input type="email" placeholder="health@email.vn"/></div>
          <div className="cf-f cf-full"><label>Số điện thoại</label><input placeholder="090 xxx xxxx (nhận thông báo qua Zalo)"/></div>
          <div className="cf-f"><label>Giới tính</label><select><option>Nam</option><option>Nữ</option><option>Khác</option></select></div>
          <div className="cf-f"><label>Thành phố</label><select><option>TP. Hồ Chí Minh</option><option>Hà Nội</option><option>Đà Nẵng</option><option>Khác</option></select></div>
          <div className="cf-f cf-full"><label>Mật khẩu</label><input type="password" placeholder="Ít nhất 8 ký tự"/></div>
        </div>
        <button className="cf-submit">Tạo tài khoản miễn phí →</button>
        <div style="text-align:center;font-size:12px;color:var(--muted);margin-top:12px">Đã có tài khoản? <span style="color:var(--navy);cursor:pointer;font-weight:700">Đăng nhập</span></div>
      </div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div className="ft-inner">
    <div className="ft-top">
      <div>
        <div className="ft-logo">DanhBa<em>BacSi</em></div>
        <div className="ft-about">Nền tảng y tế số hàng đầu Việt Nam — kết nối 45.000+ bác sĩ xác minh với hàng triệu bệnh nhân. Thành viên VEA Group · Vietnam Era Group.</div>
        <div className="ft-soc"><div className="fsoc">f</div><div className="fsoc">📷</div><div className="fsoc">▶</div><div className="fsoc">💬</div></div>
      </div>
      <div className="ft-links">
        <div className="ft-col"><h4>Tìm bác sĩ</h4><ul><li><a href="#">Theo chuyên khoa</a></li><li><a href="#">Theo bệnh viện</a></li><li><a href="#">Theo thành phố</a></li><li><a href="#">Tư vấn online</a></li></ul></div>
        <div className="ft-col"><h4>Dịch vụ</h4><ul><li><a href="#">Đặt lịch khám</a></li><li><a href="#">Tư vấn trực tuyến</a></li><li><a href="#">Bác sĩ đến nhà</a></li><li><a href="#">Xét nghiệm tại nhà</a></li><li><a href="#">Giao thuốc 2h</a></li></ul></div>
        <div className="ft-col"><h4>Chuyên khoa</h4><ul><li><a href="#">Tim mạch</a></li><li><a href="#">Nhi khoa</a></li><li><a href="#">Da liễu</a></li><li><a href="#">Sản phụ khoa</a></li><li><a href="#">Tai mũi họng</a></li></ul></div>
        <div className="ft-col"><h4>Hỗ trợ</h4><ul><li><a href="#">Câu hỏi thường gặp</a></li><li><a href="#">Hướng dẫn đặt lịch</a></li><li><a href="#">Liên hệ hỗ trợ</a></li><li><a href="#">Báo cáo bác sĩ</a></li></ul></div>
        <div className="ft-col"><h4>VEA Group</h4><ul><li><a href="#">VEA Group</a></li><li><a href="#">SuaEmbe.com</a></li><li><a href="#">DanhBaLuatSu.asia</a></li><li><a href="#">Về chúng tôi</a></li></ul></div>
      </div>
    </div>
    <div className="ft-div"></div>
    <div className="ft-bot">
      <div>© 2026 DanhBaBacSi.com.vn · Thành viên <span style="color:rgba(255,165,100,.7)">VEA Group</span> · Giấy phép hoạt động: Bộ Y tế Việt Nam 🇻🇳</div>
      <div className="ft-bot-l"><a href="#">Bảo mật</a><a href="#">Điều khoản</a><a href="#">Sitemap</a></div>
    </div>
  </div>
</footer>

<script>
window.addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40)});
function show(id,el){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.nl').forEach(l=>l.classList.remove('active'));document.getElementById('page-'+id).classList.add('active');if(el)el.classList.add('active');window.scrollTo(0,0)}
</script>
</body>
    </main>
  );
}
