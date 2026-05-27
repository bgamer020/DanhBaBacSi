<body>

<!-- Emergency bar -->
<div class="emergency-bar">
  🚨 Cấp cứu 24/7 · Gọi ngay: <strong>115</strong> · Hoặc đến cơ sở y tế gần nhất
</div>

<!-- NAV -->
<nav id="nav" style="top:41px">
  <div class="nav-brand">
    <div class="nav-brand-ico">🏥</div>
    <div class="nav-brand-name">DanhBa<em>BacSi</em></div>
  </div>
  <div class="nav-links">
    <button class="nl active" onclick="show('home',this)">Trang chủ</button>
    <button class="nl" onclick="show('doctors',this)">Tìm bác sĩ</button>
    <button class="nl" onclick="show('booking',this)">Đặt lịch khám</button>
    <button class="nl" onclick="show('tele',this)">Tư vấn trực tuyến</button>
    <button class="nl" onclick="show('pharmacy',this)">Nhà thuốc</button>
    <button class="nl" onclick="show('community',this)">Cộng đồng</button>
    <button class="nl" onclick="show('health-records',this)">Hồ sơ sức khoẻ</button>
  </div>
  <div class="nav-actions">
    <div class="nav-search">🔍 Tìm bác sĩ, chuyên khoa...</div>
    <button class="nav-cta" onclick="show('booking',null)">Đặt lịch ngay</button>
  </div>
</nav>

<!-- ══════ TRANG CHỦ ══════ -->
<div class="page active" id="page-home" style="margin-top:41px">
  <div class="hero">
    <div class="hero-blob"></div>
    <div class="hero-cross"></div>
    <div class="hero-left">
      <div class="hero-eyebrow">Nền tảng y tế số hàng đầu Việt Nam</div>
      <h1>Tìm đúng bác sĩ.<br><em>Khám đúng lúc.</em><br>Khoẻ mạnh hơn.</h1>
      <p class="hero-p">45.000+ bác sĩ được xác minh · Đặt lịch trong 30 giây · Tư vấn trực tuyến miễn phí · Toa thuốc điện tử → Giao thuốc trong 2 giờ.</p>
      <div class="hero-actions">
        <button class="btn-primary" onclick="show('doctors',null)">🔍 Tìm bác sĩ ngay</button>
        <button class="btn-green" onclick="show('tele',null)">💬 Hỏi bác sĩ miễn phí</button>
      </div>
      <div class="hero-trust">
        <div class="ht-stat"><div class="ht-n">45K+</div><div class="ht-l">Bác sĩ xác minh</div></div>
        <div class="ht-div"></div>
        <div class="ht-stat"><div class="ht-n">2.8M</div><div class="ht-l">Lượt đặt lịch</div></div>
        <div class="ht-div"></div>
        <div class="ht-stat"><div class="ht-n">98%</div><div class="ht-l">Hài lòng</div></div>
        <div class="ht-div"></div>
        <div class="ht-stat"><div class="ht-n">2h</div><div class="ht-l">Giao thuốc</div></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="search-box">
        <div class="sb-title">Tìm bác sĩ phù hợp</div>
        <div class="sb-fields">
          <div class="sb-field"><label>Chuyên khoa</label>
            <select><option>Tất cả chuyên khoa</option><option>Nội khoa</option><option>Nhi khoa</option><option>Tim mạch</option><option>Da liễu</option><option>Tai mũi họng</option><option>Sản phụ khoa</option><option>Mắt</option><option>Thần kinh</option></select>
          </div>
          <div class="sb-row">
            <div class="sb-field"><label>Thành phố</label>
              <select><option>TP. HCM</option><option>Hà Nội</option><option>Đà Nẵng</option><option>Cần Thơ</option></select>
            </div>
            <div class="sb-field"><label>Hình thức</label>
              <select><option>Tất cả</option><option>Khám trực tiếp</option><option>Trực tuyến</option></select>
            </div>
          </div>
          <div class="sb-field"><label>Tên bác sĩ hoặc bệnh viện</label>
            <input placeholder="VD: BS. Nguyễn Văn A, BV Bạch Mai..."/>
          </div>
        </div>
        <button class="sb-submit" onclick="show('doctors',null)">🔍 Tìm bác sĩ →</button>
      </div>
      <div class="quick-card" onclick="show('tele',null)">
        <div class="qc-ico" style="background:rgba(5,150,105,.2)">💬</div>
        <div><div class="qc-title">Hỏi bác sĩ ngay — Miễn phí</div><div class="qc-sub">Tư vấn online · Phản hồi trong 15 phút</div></div>
        <div class="qc-arrow">→</div>
      </div>
      <div class="quick-card" onclick="show('pharmacy',null)">
        <div class="qc-ico" style="background:rgba(200,84,26,.2)">💊</div>
        <div><div class="qc-title">Đặt thuốc theo toa — Giao 2h</div><div class="qc-sub">Long Châu · An Khang · Pharmacity</div></div>
        <div class="qc-arrow">→</div>
      </div>
      <div class="quick-card" onclick="show('health-records',null)">
        <div class="qc-ico" style="background:rgba(8,145,178,.2)">📋</div>
        <div><div class="qc-title">Hồ sơ sức khoẻ điện tử</div><div class="qc-sub">Lưu kết quả xét nghiệm · Lịch sử khám</div></div>
        <div class="qc-arrow">→</div>
      </div>
    </div>
  </div>

  <!-- Specialties -->
  <div class="section">
    <div class="sec-eyebrow">Chuyên khoa phổ biến</div>
    <h2 class="sec-h">Tìm bác sĩ theo<br><em>chuyên khoa của bạn</em></h2>
    <div class="spec-grid">
      <div class="spec-card" onclick="show('doctors',null)"><div class="spec-ico">🫀</div><div class="spec-name">Tim mạch</div><div class="spec-count">1.240 bác sĩ</div><span class="spec-tag dtag-navy">Phổ biến nhất</span></div>
      <div class="spec-card" onclick="show('doctors',null)"><div class="spec-ico">🧒</div><div class="spec-name">Nhi khoa</div><div class="spec-count">2.180 bác sĩ</div><span class="spec-tag dtag-teal">Đặt nhiều</span></div>
      <div class="spec-card" onclick="show('doctors',null)"><div class="spec-ico">🧠</div><div class="spec-name">Thần kinh</div><div class="spec-count">890 bác sĩ</div><span class="spec-tag dtag-navy">Chuyên sâu</span></div>
      <div class="spec-card" onclick="show('doctors',null)"><div class="spec-ico">🦷</div><div class="spec-name">Răng hàm mặt</div><div class="spec-count">3.420 bác sĩ</div><span class="spec-tag dtag-org">Nhiều nhất</span></div>
      <div class="spec-card" onclick="show('doctors',null)"><div class="spec-ico">👁️</div><div class="spec-name">Nhãn khoa</div><div class="spec-count">680 bác sĩ</div></div>
      <div class="spec-card" onclick="show('doctors',null)"><div class="spec-ico">🫁</div><div class="spec-name">Hô hấp</div><div class="spec-count">740 bác sĩ</div></div>
      <div class="spec-card" onclick="show('doctors',null)"><div class="spec-ico">🤰</div><div class="spec-name">Sản phụ khoa</div><div class="spec-count">1.560 bác sĩ</div></div>
      <div class="spec-card" onclick="show('doctors',null)"><div class="spec-ico">🦴</div><div class="spec-name">Cơ xương khớp</div><div class="spec-count">920 bác sĩ</div></div>
    </div>
  </div>

  <!-- Top doctors preview -->
  <div class="bg-sect">
    <div class="bg-sect-inner">
      <div class="sec-eyebrow">Bác sĩ được đánh giá cao</div>
      <h2 class="sec-h">Gặp các bác sĩ<br><em>hàng đầu hôm nay</em></h2>
      <div class="doc-grid">
        <div class="doc-card">
          <div class="doc-card-top">
            <div class="doc-ava" style="background:linear-gradient(135deg,var(--navy),var(--navy2));width:60px;height:60px;border-radius:14px;position:relative">NT<div class="doc-verified">✓</div></div>
            <div>
              <div class="doc-info-name">GS.TS. Nguyễn Thị Thanh</div>
              <div class="doc-info-spec">Tim mạch · Siêu âm tim</div>
              <div class="doc-info-hospital">BV Chợ Rẫy TP.HCM · 28 năm KN</div>
              <div class="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.9 (1.284 đánh giá)</div>
            </div>
          </div>
          <div class="doc-card-body">
            <div class="doc-tags"><span class="dtag dtag-navy">Tim mạch</span><span class="dtag dtag-teal">Siêu âm tim</span><span class="dtag dtag-green">Xác minh Bộ Y tế</span></div>
            <div class="doc-stats">
              <div class="dstat"><div class="dstat-n">28+</div><div class="dstat-l">Năm KN</div></div>
              <div class="dstat"><div class="dstat-n">4.800+</div><div class="dstat-l">Bệnh nhân</div></div>
              <div class="dstat"><div class="dstat-n">98%</div><div class="dstat-l">Hài lòng</div></div>
            </div>
            <div class="doc-avail">Còn lịch thứ 3 & thứ 5 tuần này</div>
            <button class="doc-book-btn">📅 Đặt lịch khám</button>
            <button class="doc-consult-btn">💬 Tư vấn trực tuyến</button>
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-top">
            <div class="doc-ava" style="background:linear-gradient(135deg,var(--teal),#0E7490);width:60px;height:60px;border-radius:14px;position:relative">TH<div class="doc-verified">✓</div></div>
            <div>
              <div class="doc-info-name">PGS. Trần Văn Hùng</div>
              <div class="doc-info-spec">Nhi khoa · Dinh dưỡng trẻ em</div>
              <div class="doc-info-hospital">BV Nhi Đồng 1 TP.HCM · 18 năm KN</div>
              <div class="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.8 (2.140 đánh giá)</div>
            </div>
          </div>
          <div class="doc-card-body">
            <div class="doc-tags"><span class="dtag dtag-teal">Nhi khoa</span><span class="dtag dtag-navy">Dinh dưỡng</span><span class="dtag dtag-green">Xác minh</span></div>
            <div class="doc-stats">
              <div class="dstat"><div class="dstat-n">18+</div><div class="dstat-l">Năm KN</div></div>
              <div class="dstat"><div class="dstat-n">6.200+</div><div class="dstat-l">Bệnh nhân</div></div>
              <div class="dstat"><div class="dstat-n">99%</div><div class="dstat-l">Hài lòng</div></div>
            </div>
            <div class="doc-avail">Còn lịch online ngay hôm nay</div>
            <button class="doc-book-btn">📅 Đặt lịch khám</button>
            <button class="doc-consult-btn">💬 Tư vấn trực tuyến</button>
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-top">
            <div class="doc-ava" style="background:linear-gradient(135deg,var(--org),var(--org2));width:60px;height:60px;border-radius:14px;position:relative">LM<div class="doc-verified">✓</div></div>
            <div>
              <div class="doc-info-name">TS.BS. Lê Thị Mai</div>
              <div class="doc-info-spec">Da liễu · Thẩm mỹ da</div>
              <div class="doc-info-hospital">Phòng khám Đa khoa Quốc tế · 15 năm KN</div>
              <div class="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.9 (986 đánh giá)</div>
            </div>
          </div>
          <div class="doc-card-body">
            <div class="doc-tags"><span class="dtag dtag-org">Da liễu</span><span class="dtag dtag-navy">Thẩm mỹ da</span><span class="dtag dtag-green">Xác minh</span></div>
            <div class="doc-stats">
              <div class="dstat"><div class="dstat-n">15+</div><div class="dstat-l">Năm KN</div></div>
              <div class="dstat"><div class="dstat-n">3.800+</div><div class="dstat-l">Bệnh nhân</div></div>
              <div class="dstat"><div class="dstat-n">97%</div><div class="dstat-l">Hài lòng</div></div>
            </div>
            <div class="doc-avail">Còn lịch thứ 2, 4, 6</div>
            <button class="doc-book-btn">📅 Đặt lịch khám</button>
            <button class="doc-consult-btn">💬 Tư vấn trực tuyến</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════ TÌM BÁC SĨ ══════ -->
<div class="page" id="page-doctors" style="margin-top:41px">
  <div class="section" style="padding-top:100px">
    <div class="sec-eyebrow">45.000+ Bác sĩ</div>
    <h2 class="sec-h">Tìm bác sĩ phù hợp<br><em>với bạn</em></h2>
    <!-- Filter row -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin:20px 0;padding:16px;background:#fff;border:1px solid var(--border);border-radius:12px;box-shadow:var(--sh)">
      <select style="padding:8px 13px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);outline:none"><option>Tất cả chuyên khoa</option><option>Nội khoa</option><option>Nhi khoa</option><option>Tim mạch</option><option>Da liễu</option></select>
      <select style="padding:8px 13px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);outline:none"><option>TP. HCM</option><option>Hà Nội</option><option>Đà Nẵng</option></select>
      <select style="padding:8px 13px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);outline:none"><option>Khám trực tiếp + Online</option><option>Khám trực tiếp</option><option>Tư vấn online</option></select>
      <select style="padding:8px 13px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);outline:none"><option>Sắp xếp: Đánh giá cao</option><option>Số bệnh nhân</option><option>Phí tư vấn thấp nhất</option><option>Lịch trống sớm nhất</option></select>
      <button style="padding:8px 18px;border-radius:8px;background:linear-gradient(135deg,var(--navy),var(--navy2));color:#fff;border:none;font-size:13px;font-weight:700;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">Áp dụng bộ lọc</button>
    </div>
    <div class="doc-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="doc-card"><div class="doc-card-top"><div class="doc-ava" style="background:linear-gradient(135deg,var(--navy),var(--navy2));width:60px;height:60px;border-radius:14px;position:relative">NT<div class="doc-verified">✓</div></div><div><div class="doc-info-name">GS.TS. Nguyễn Thị Thanh</div><div class="doc-info-spec">Tim mạch · Siêu âm tim</div><div class="doc-info-hospital">BV Chợ Rẫy · 28 năm KN</div><div class="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.9 (1.284)</div></div></div><div class="doc-card-body"><div class="doc-tags"><span class="dtag dtag-navy">Tim mạch</span><span class="dtag dtag-green">Xác minh</span></div><div class="doc-stats"><div class="dstat"><div class="dstat-n">28+</div><div class="dstat-l">Năm KN</div></div><div class="dstat"><div class="dstat-n">4.800+</div><div class="dstat-l">BN</div></div><div class="dstat"><div class="dstat-n">98%</div><div class="dstat-l">Hài lòng</div></div></div><div class="doc-avail">Còn lịch thứ 3 & thứ 5</div><button class="doc-book-btn">📅 Đặt lịch khám</button><button class="doc-consult-btn">💬 Tư vấn online</button></div></div>
      <div class="doc-card"><div class="doc-card-top"><div class="doc-ava" style="background:linear-gradient(135deg,var(--teal),#0E7490);width:60px;height:60px;border-radius:14px;position:relative">TH<div class="doc-verified">✓</div></div><div><div class="doc-info-name">PGS. Trần Văn Hùng</div><div class="doc-info-spec">Nhi khoa · Dinh dưỡng</div><div class="doc-info-hospital">BV Nhi Đồng 1 · 18 năm KN</div><div class="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.8 (2.140)</div></div></div><div class="doc-card-body"><div class="doc-tags"><span class="dtag dtag-teal">Nhi khoa</span><span class="dtag dtag-green">Xác minh</span></div><div class="doc-stats"><div class="dstat"><div class="dstat-n">18+</div><div class="dstat-l">Năm KN</div></div><div class="dstat"><div class="dstat-n">6.200+</div><div class="dstat-l">BN</div></div><div class="dstat"><div class="dstat-n">99%</div><div class="dstat-l">Hài lòng</div></div></div><div class="doc-avail">Còn lịch online hôm nay</div><button class="doc-book-btn">📅 Đặt lịch khám</button><button class="doc-consult-btn">💬 Tư vấn online</button></div></div>
      <div class="doc-card"><div class="doc-card-top"><div class="doc-ava" style="background:linear-gradient(135deg,var(--org),var(--org2));width:60px;height:60px;border-radius:14px;position:relative">LM<div class="doc-verified">✓</div></div><div><div class="doc-info-name">TS.BS. Lê Thị Mai</div><div class="doc-info-spec">Da liễu · Thẩm mỹ da</div><div class="doc-info-hospital">PK Đa khoa Quốc tế · 15 năm</div><div class="doc-rating"><span>⭐⭐⭐⭐⭐</span> 4.9 (986)</div></div></div><div class="doc-card-body"><div class="doc-tags"><span class="dtag dtag-org">Da liễu</span><span class="dtag dtag-green">Xác minh</span></div><div class="doc-stats"><div class="dstat"><div class="dstat-n">15+</div><div class="dstat-l">Năm KN</div></div><div class="dstat"><div class="dstat-n">3.800+</div><div class="dstat-l">BN</div></div><div class="dstat"><div class="dstat-n">97%</div><div class="dstat-l">Hài lòng</div></div></div><div class="doc-avail">Còn lịch thứ 2, 4, 6</div><button class="doc-book-btn">📅 Đặt lịch khám</button><button class="doc-consult-btn">💬 Tư vấn online</button></div></div>
    </div>
  </div>
</div>

<!-- ══════ ĐẶT LỊCH KHÁM ══════ -->
<div class="page" id="page-booking" style="margin-top:41px">
  <div class="booking-section">
    <div class="booking-inner" style="padding-top:100px">
      <div>
        <div class="sec-eyebrow">Đặt lịch khám</div>
        <h2 class="sec-h">Đặt lịch trong 30 giây<br><em>— xác nhận tức thì</em></h2>
        <p class="sec-p" style="margin-bottom:32px">Không cần gọi điện chờ đợi. Chọn bác sĩ, chọn giờ, điền thông tin — xong. Nhận xác nhận qua email và Zalo ngay lập tức.</p>
        <div class="booking-steps">
          <div class="step"><div class="step-num" style="background:linear-gradient(135deg,var(--navy),var(--navy2));color:#fff">1</div><div><div class="step-title">Chọn chuyên khoa & bác sĩ</div><div class="step-desc">Tìm theo chuyên khoa, bệnh viện, đánh giá hoặc tên bác sĩ. Xem đầy đủ profile, kinh nghiệm và lịch trống.</div></div></div>
          <div class="step"><div class="step-num" style="background:linear-gradient(135deg,var(--teal),#0E7490);color:#fff">2</div><div><div class="step-title">Chọn ngày giờ & hình thức</div><div class="step-desc">Khám trực tiếp tại phòng khám hoặc tư vấn online qua video call. Chọn khung giờ còn trống.</div></div></div>
          <div class="step"><div class="step-num" style="background:linear-gradient(135deg,var(--org),var(--org2));color:#fff">3</div><div><div class="step-title">Điền thông tin & mô tả triệu chứng</div><div class="step-desc">Mô tả ngắn về tình trạng sức khoẻ để bác sĩ chuẩn bị trước. Upload kết quả xét nghiệm nếu có.</div></div></div>
          <div class="step"><div class="step-num" style="background:linear-gradient(135deg,var(--green),#10B981);color:#fff">4</div><div><div class="step-title">Xác nhận & nhận reminder</div><div class="step-desc">Email + Zalo xác nhận ngay. Nhắc lịch trước 1 ngày và 1 giờ. Toa thuốc điện tử sau buổi khám.</div></div></div>
        </div>
      </div>
      <div class="booking-card">
        <div class="bc-title">Đặt lịch khám</div>
        <div class="bc-sub">Điền thông tin · Xác nhận trong 2 phút</div>
        <div class="bc-fields">
          <div class="bcf"><label>Họ và tên bệnh nhân</label><input placeholder="Nguyễn Văn A"/></div>
          <div class="bcf-row">
            <div class="bcf"><label>Số điện thoại</label><input placeholder="090 xxx xxxx"/></div>
            <div class="bcf"><label>Ngày sinh</label><input type="date"/></div>
          </div>
          <div class="bcf"><label>Chuyên khoa cần khám</label>
            <select><option>Chọn chuyên khoa</option><option>Nội khoa</option><option>Nhi khoa</option><option>Tim mạch</option><option>Da liễu</option><option>Tai mũi họng</option><option>Sản phụ khoa</option></select>
          </div>
          <div class="bcf"><label>Bác sĩ (tuỳ chọn)</label><input placeholder="Để trống nếu chưa chọn bác sĩ cụ thể"/></div>
          <div class="bcf-row">
            <div class="bcf"><label>Ngày khám</label><input type="date"/></div>
            <div class="bcf"><label>Hình thức</label><select><option>Khám trực tiếp</option><option>Tư vấn online</option></select></div>
          </div>
          <div class="bcf"><label>Mô tả triệu chứng</label><input placeholder="Mô tả ngắn tình trạng sức khoẻ..."/></div>
        </div>
        <button class="bc-submit">📅 Đặt lịch ngay — Xác nhận trong 2 phút</button>
        <div class="bc-note">🔒 Thông tin bảo mật · 🔔 Nhận reminder tự động · Miễn phí đặt lịch</div>
      </div>
    </div>
  </div>
</div>

<!-- ══════ TƯ VẤN TRỰC TUYẾN ══════ -->
<div class="page" id="page-tele" style="margin-top:41px">
  <div class="navy-sect" style="padding-top:100px">
    <div class="navy-inner">
      <div class="sec-eyebrow white-eye">Tư vấn trực tuyến</div>
      <h2 class="sec-h white">Hỏi bác sĩ ngay<br><em style="-webkit-text-fill-color:var(--org2)">từ nhà của bạn</em></h2>
      <p class="sec-p white" style="margin-bottom:40px">Không cần đi xa · Không cần chờ đợi · Bác sĩ phản hồi trong 15–30 phút · An toàn và bảo mật hoàn toàn.</p>
      <div class="tele-grid">
        <div class="tele-card"><div class="tc-ico">💬</div><div class="tc-title">Chat với bác sĩ</div><div class="tc-desc">Gửi câu hỏi, mô tả triệu chứng và nhận tư vấn qua tin nhắn. Upload ảnh/kết quả xét nghiệm.</div><div class="tc-free">MIỄN PHÍ <span>/ câu hỏi đầu tiên</span></div></div>
        <div class="tele-card"><div class="tc-ico">📞</div><div class="tc-title">Gọi video với bác sĩ</div><div class="tc-desc">Video call 15–20 phút với bác sĩ chuyên khoa. Nhận toa thuốc điện tử sau buổi tư vấn.</div><div class="tc-price">150.000đ <span>/ buổi 15 phút</span></div></div>
        <div class="tele-card"><div class="tc-ico">🏠</div><div class="tc-title">Bác sĩ đến nhà</div><div class="tc-desc">Đặt lịch để bác sĩ đến tận nhà khám. Phù hợp cho người già, trẻ em và trường hợp khó di chuyển.</div><div class="tc-price">500.000đ+ <span>/ lần khám</span></div></div>
        <div class="tele-card"><div class="tc-ico">🧪</div><div class="tc-title">Xét nghiệm tại nhà</div><div class="tc-desc">Nhân viên y tế đến lấy mẫu xét nghiệm tại nhà. Kết quả online trong 4–24 giờ.</div><div class="tc-price">250.000đ+ <span>/ gói xét nghiệm</span></div></div>
      </div>
      <div style="margin-top:28px;text-align:center">
        <button class="btn-green" onclick="show('booking',null)" style="font-size:15px;padding:14px 32px">Đặt tư vấn trực tuyến ngay →</button>
      </div>
    </div>
  </div>
</div>

<!-- ══════ NHÀ THUỐC ══════ -->
<div class="page" id="page-pharmacy" style="margin-top:41px">
  <div class="pharma-section">
    <div class="pharma-inner" style="padding-top:100px">
      <div>
        <div class="sec-eyebrow">Toa thuốc điện tử & Giao thuốc</div>
        <h2 class="sec-h">Toa thuốc xong —<br><em>giao trong 2 giờ</em></h2>
        <p class="sec-p" style="margin-bottom:28px">Sau buổi khám, bác sĩ xuất toa điện tử ngay trên hệ thống. Bạn xác nhận và thuốc được giao từ nhà thuốc đối tác gần nhất.</p>
        <div class="pharma-flow">
          <div class="pf-step"><div class="pfs-num">1</div><div><div class="pfs-title">Bác sĩ xuất toa điện tử</div><div class="pfs-desc">Toa thuốc được gửi thẳng vào app của bạn sau buổi khám</div></div></div>
          <div class="pf-step"><div class="pfs-num">2</div><div><div class="pfs-title">Chọn nhà thuốc & xác nhận</div><div class="pfs-desc">Hệ thống tự tìm nhà thuốc gần nhất còn đủ thuốc theo toa</div></div></div>
          <div class="pf-step"><div class="pfs-num">3</div><div><div class="pfs-title">Thanh toán online hoặc COD</div><div class="pfs-desc">VNPay, MoMo, chuyển khoản, hoặc thanh toán khi nhận hàng</div></div></div>
          <div class="pf-step"><div class="pfs-num">4</div><div><div class="pfs-title">Giao thuốc trong 2 giờ</div><div class="pfs-desc">Shipper từ nhà thuốc đối tác giao đến tận nhà bạn</div></div></div>
        </div>
        <div style="margin-top:20px"><button class="btn-primary" onclick="show('booking',null)">Khám và nhận toa thuốc ngay →</button></div>
      </div>
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--muted);margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px">Nhà thuốc đối tác</div>
        <div class="pharma-partners">
          <div class="pp"><div class="pp-ico">💊</div><div><div class="pp-name">Long Châu</div><div class="pp-desc">1.400+ cửa hàng toàn quốc</div></div></div>
          <div class="pp"><div class="pp-ico">🏥</div><div><div class="pp-name">An Khang</div><div class="pp-desc">600+ cửa hàng · Giá tốt</div></div></div>
          <div class="pp"><div class="pp-ico">💉</div><div><div class="pp-name">Pharmacity</div><div class="pp-desc">500+ cửa hàng · 24/7</div></div></div>
          <div class="pp"><div class="pp-ico">🏪</div><div><div class="pp-name">Medicare</div><div class="pp-desc">300+ cửa hàng</div></div></div>
        </div>
        <div style="margin-top:18px;background:var(--lgreen);border:1px solid rgba(5,150,105,.2);border-radius:12px;padding:16px;font-size:13px;color:var(--green)">
          <strong>✅ Đảm bảo thuốc chính hãng</strong> — Tất cả nhà thuốc đối tác được cấp phép Bộ Y tế và cam kết thuốc có nguồn gốc xuất xứ rõ ràng.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════ HỒ SƠ SỨC KHOẺ ══════ -->
<div class="page" id="page-health-records" style="margin-top:41px">
  <div class="section" style="padding-top:100px">
    <div class="sec-eyebrow">Hồ sơ sức khoẻ điện tử</div>
    <h2 class="sec-h">Toàn bộ lịch sử sức khoẻ<br><em>trong tầm tay</em></h2>
    <p class="sec-p">Lưu trữ và quản lý hồ sơ sức khoẻ cá nhân — từ lịch sử khám, kết quả xét nghiệm đến toa thuốc và lịch tái khám. Chia sẻ an toàn với bác sĩ khi cần.</p>
    <div class="record-cards">
      <div class="rc"><div class="rc-ico">📋</div><div class="rc-title">Lịch sử khám bệnh</div><div class="rc-desc">Toàn bộ lần khám, chẩn đoán và ghi chú của bác sĩ được lưu lại theo thứ tự thời gian</div></div>
      <div class="rc"><div class="rc-ico">🧪</div><div class="rc-title">Kết quả xét nghiệm</div><div class="rc-desc">Upload và lưu trữ kết quả máu, nước tiểu, siêu âm, X-quang. Chia sẻ với bác sĩ bằng 1 click</div></div>
      <div class="rc"><div class="rc-ico">💊</div><div class="rc-title">Lịch sử toa thuốc</div><div class="rc-desc">Toa thuốc điện tử từ các bác sĩ DanhBaBacSi. Đặt lại thuốc dễ dàng khi hết</div></div>
      <div class="rc"><div class="rc-ico">🔔</div><div class="rc-title">Nhắc uống thuốc & tái khám</div><div class="rc-desc">Đặt lịch nhắc uống thuốc đúng giờ và nhắc ngày tái khám định kỳ qua Zalo/SMS</div></div>
    </div>
    <div style="text-align:center;margin-top:28px"><button class="btn-primary" onclick="show('contact',null)">Tạo hồ sơ sức khoẻ miễn phí →</button></div>
  </div>
</div>

<!-- ══════ CỘNG ĐỒNG ══════ -->
<div class="page" id="page-community" style="margin-top:41px">
  <div class="section" style="padding-top:100px">
    <div class="sec-eyebrow">Cộng đồng sức khoẻ</div>
    <h2 class="sec-h">Hỏi bác sĩ · Chia sẻ<br><em>kinh nghiệm thật</em></h2>
    <p class="sec-p">Diễn đàn sức khoẻ với sự tham gia của bác sĩ xác minh — câu hỏi của bạn được trả lời bởi chuyên gia thật, không phải AI.</p>
    <div class="comm-grid">
      <div class="comm-card">
        <div class="cc-top"><div class="cc-ava" style="background:linear-gradient(135deg,var(--teal),#0E7490)">BS</div><div><div class="cc-user">BS. Trần Văn Hùng</div><div class="cc-role">Nhi khoa · BV Nhi Đồng 1</div></div><span class="cc-verified-badge">✓ Bác sĩ</span></div>
        <div class="cc-q">Bé 8 tháng sốt 38.5°C — khi nào cần đưa đến bệnh viện?</div>
        <div class="cc-preview">Sốt là phản ứng tự nhiên của cơ thể. Với bé 8 tháng, sốt dưới 38.5°C chưa cần lo ngại quá. Tuy nhiên bạn cần theo dõi các dấu hiệu nguy hiểm như...</div>
        <div class="cc-meta"><span class="cc-answers">48 trả lời</span><span>3.2K lượt xem</span><span>Nhi khoa</span></div>
      </div>
      <div class="comm-card">
        <div class="cc-top"><div class="cc-ava" style="background:linear-gradient(135deg,var(--navy),var(--navy2))">NT</div><div><div class="cc-user">Nguyễn Thị Thu</div><div class="cc-role">Người dùng · HCM</div></div></div>
        <div class="cc-q">Xét nghiệm cholesterol cao 6.2 — cần làm gì ngay?</div>
        <div class="cc-preview">Vừa nhận kết quả xét nghiệm, cholesterol toàn phần 6.2 mmol/L, LDL 4.1. Bác sĩ cho mình hỏi mức này có nguy hiểm không và cần thay đổi...</div>
        <div class="cc-meta"><span class="cc-answers">24 trả lời</span><span>1.8K lượt xem</span><span>Tim mạch</span></div>
      </div>
      <div class="comm-card">
        <div class="cc-top"><div class="cc-ava" style="background:linear-gradient(135deg,var(--org),var(--org2))">LH</div><div><div class="cc-user">Lê Thị Hương</div><div class="cc-role">Người dùng · Hà Nội</div></div></div>
        <div class="cc-q">Mang thai tuần 28, đau lưng nhiều có đáng lo không?</div>
        <div class="cc-preview">Thai 28 tuần và đau lưng ngày càng tăng, đặc biệt vào buổi chiều tối. Mình đã dùng gối đặc biệt cho bà bầu nhưng vẫn không đỡ. Các mẹ đã...</div>
        <div class="cc-meta"><span class="cc-answers">31 trả lời</span><span>2.1K lượt xem</span><span>Sản phụ khoa</span></div>
      </div>
    </div>
  </div>
</div>

<!-- ══════ LIÊN HỆ / ĐĂNG KÝ ══════ -->
<div class="page" id="page-contact" style="margin-top:41px">
  <div class="contact-sect">
    <div class="contact-inner" style="padding-top:100px">
      <div>
        <div class="sec-eyebrow">Đăng ký tài khoản</div>
        <h2 class="sec-h">Chăm sóc sức khoẻ<br><em>thông minh hơn</em></h2>
        <p class="sec-p" style="margin-bottom:28px">Tạo tài khoản miễn phí để đặt lịch, lưu hồ sơ sức khoẻ, tư vấn bác sĩ và nhận thông báo kết quả xét nghiệm.</p>
        <div class="contact-info">
          <div class="ci-card"><div class="ci-ico">📅</div><div class="ci-title">Đặt lịch không giới hạn</div><div class="ci-desc">Đặt lịch khám trực tiếp và tư vấn online với 45.000+ bác sĩ. Nhận xác nhận tức thì.</div></div>
          <div class="ci-card"><div class="ci-ico">📋</div><div class="ci-title">Hồ sơ sức khoẻ điện tử</div><div class="ci-desc">Lưu trữ toàn bộ lịch sử khám, xét nghiệm, toa thuốc. Chia sẻ với bác sĩ mới dễ dàng.</div></div>
          <div class="ci-card"><div class="ci-ico">💬</div><div class="ci-title">Hỏi bác sĩ miễn phí</div><div class="ci-desc">Câu hỏi đầu tiên hoàn toàn miễn phí. Bác sĩ trả lời trong vòng 15–30 phút.</div><div class="ci-hl">Câu 1: MIỄN PHÍ</div></div>
        </div>
      </div>
      <div class="cf-wrap">
        <div class="cf-title">Tạo tài khoản miễn phí</div>
        <div class="cf-sub">Đăng ký trong 30 giây · Không cần thẻ tín dụng</div>
        <div class="cf-r">
          <div class="cf-f"><label>Họ và tên</label><input placeholder="Nguyễn Văn A"/></div>
          <div class="cf-f"><label>Ngày sinh</label><input type="date"/></div>
          <div class="cf-f cf-full"><label>Email</label><input type="email" placeholder="health@email.vn"/></div>
          <div class="cf-f cf-full"><label>Số điện thoại</label><input placeholder="090 xxx xxxx (nhận thông báo qua Zalo)"/></div>
          <div class="cf-f"><label>Giới tính</label><select><option>Nam</option><option>Nữ</option><option>Khác</option></select></div>
          <div class="cf-f"><label>Thành phố</label><select><option>TP. Hồ Chí Minh</option><option>Hà Nội</option><option>Đà Nẵng</option><option>Khác</option></select></div>
          <div class="cf-f cf-full"><label>Mật khẩu</label><input type="password" placeholder="Ít nhất 8 ký tự"/></div>
        </div>
        <button class="cf-submit">Tạo tài khoản miễn phí →</button>
        <div style="text-align:center;font-size:12px;color:var(--muted);margin-top:12px">Đã có tài khoản? <span style="color:var(--navy);cursor:pointer;font-weight:700">Đăng nhập</span></div>
      </div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="ft-inner">
    <div class="ft-top">
      <div>
        <div class="ft-logo">DanhBa<em>BacSi</em></div>
        <div class="ft-about">Nền tảng y tế số hàng đầu Việt Nam — kết nối 45.000+ bác sĩ xác minh với hàng triệu bệnh nhân. Thành viên VEA Group · Vietnam Era Group.</div>
        <div class="ft-soc"><div class="fsoc">f</div><div class="fsoc">📷</div><div class="fsoc">▶</div><div class="fsoc">💬</div></div>
      </div>
      <div class="ft-links">
        <div class="ft-col"><h4>Tìm bác sĩ</h4><ul><li><a href="#">Theo chuyên khoa</a></li><li><a href="#">Theo bệnh viện</a></li><li><a href="#">Theo thành phố</a></li><li><a href="#">Tư vấn online</a></li></ul></div>
        <div class="ft-col"><h4>Dịch vụ</h4><ul><li><a href="#">Đặt lịch khám</a></li><li><a href="#">Tư vấn trực tuyến</a></li><li><a href="#">Bác sĩ đến nhà</a></li><li><a href="#">Xét nghiệm tại nhà</a></li><li><a href="#">Giao thuốc 2h</a></li></ul></div>
        <div class="ft-col"><h4>Chuyên khoa</h4><ul><li><a href="#">Tim mạch</a></li><li><a href="#">Nhi khoa</a></li><li><a href="#">Da liễu</a></li><li><a href="#">Sản phụ khoa</a></li><li><a href="#">Tai mũi họng</a></li></ul></div>
        <div class="ft-col"><h4>Hỗ trợ</h4><ul><li><a href="#">Câu hỏi thường gặp</a></li><li><a href="#">Hướng dẫn đặt lịch</a></li><li><a href="#">Liên hệ hỗ trợ</a></li><li><a href="#">Báo cáo bác sĩ</a></li></ul></div>
        <div class="ft-col"><h4>VEA Group</h4><ul><li><a href="#">VEA Group</a></li><li><a href="#">SuaEmbe.com</a></li><li><a href="#">DanhBaLuatSu.asia</a></li><li><a href="#">Về chúng tôi</a></li></ul></div>
      </div>
    </div>
    <div class="ft-div"></div>
    <div class="ft-bot">
      <div>© 2026 DanhBaBacSi.com.vn · Thành viên <span style="color:rgba(255,165,100,.7)">VEA Group</span> · Giấy phép hoạt động: Bộ Y tế Việt Nam 🇻🇳</div>
      <div class="ft-bot-l"><a href="#">Bảo mật</a><a href="#">Điều khoản</a><a href="#">Sitemap</a></div>
    </div>
  </div>
</footer>

<script>
window.addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40)});
function show(id,el){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.nl').forEach(l=>l.classList.remove('active'));document.getElementById('page-'+id).classList.add('active');if(el)el.classList.add('active');window.scrollTo(0,0)}
</script>
</body>
