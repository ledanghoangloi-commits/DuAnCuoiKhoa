const categoriesData = [
    { id: "thoi-su", title: "Thời sự" }, { id: "the-gioi", title: "Thế giới" }, { id: "kinh-doanh", title: "Kinh doanh" },
    { id: "bat-dong-san", title: "Bất động sản" }, { id: "the-thao", title: "Thể thao" }, { id: "giai-tri", title: "Giải trí" },
    { id: "phap-luat", title: "Pháp luật" }, { id: "giao-duc", title: "Giáo dục" }, { id: "suc-khoe", title: "Sức khỏe" },
    { id: "doi-song", title: "Đời sống" }, { id: "du-lich", title: "Du lịch" }, { id: "khoa-hoc", title: "Khoa học" },
    { id: "so-hoa", title: "Số hóa" }, { id: "xe", title: "Xe" }, { id: "y-kien", title: "Ý kiến" },
    { id: "tam-su", title: "Tâm sự" }, { id: "thu-gian", title: "Thư giãn" }, { id: "van-hoa", title: "Văn hóa" },
    { id: "nhan-ai", title: "Nhân ái" }, { id: "tuyen-dung", title: "Tuyển dụng" }
];

const initialArticles = [
    {
        "id": "art-1",
        "title": "Bão số 3 đổ bộ miền Trung gây thiệt hại nặng nề",
        "slug": "bai-viet-1",
        "image": "./img/anh1.jpg",
        "excerpt": "Bão số 3 đổ bộ miền Trung gây thiệt hại nặng nề. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Bão số 3 đổ bộ miền Trung gây thiệt hại nặng nề</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Các cơ quan ban ngành đang khẩn trương đánh giá tình hình để đưa ra các phương án chỉ đạo kịp thời, đảm bảo an sinh xã hội.</p>
        <img src="./img/anh2.jpg" alt="Bão số 3 đổ bộ miền Trung gây thiệt hại nặng nề" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Sự đoàn kết và đồng lòng của toàn dân là yếu tố then chốt giúp chúng ta vượt qua mọi thử thách."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Ghi nhận thực tế cho thấy sự tham gia tích cực của người dân cùng với chính quyền địa phương trong việc giải quyết các vấn đề cấp bách.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["thoi-su"],
        "publishedAt": "2026-10-01 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-2",
        "title": "Khai mạc kỳ họp thứ 10 Quốc hội khóa XV",
        "slug": "bai-viet-2",
        "image": "./img/anh3.jpg",
        "excerpt": "Khai mạc kỳ họp thứ 10 Quốc hội khóa XV. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh4.jpg" alt="Khai mạc kỳ họp thứ 10 Quốc hội khóa XV" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Khai mạc kỳ họp thứ 10 Quốc hội khóa XV</h2>
        <p>Vấn đề <strong>Khai mạc kỳ họp thứ 10 Quốc hội khóa XV</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Các cơ quan ban ngành đang khẩn trương đánh giá tình hình để đưa ra các phương án chỉ đạo kịp thời, đảm bảo an sinh xã hội.</li>
            <li><strong>Khía cạnh xã hội:</strong> Ghi nhận thực tế cho thấy sự tham gia tích cực của người dân cùng với chính quyền địa phương trong việc giải quyết các vấn đề cấp bách.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Sự đoàn kết và đồng lòng của toàn dân là yếu tố then chốt giúp chúng ta vượt qua mọi thử thách."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["thoi-su"],
        "publishedAt": "2026-10-02 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-3",
        "title": "Hà Nội triển khai tuyến đường sắt đô thị mới",
        "slug": "bai-viet-3",
        "image": "./img/anh5.jpg",
        "excerpt": "Hà Nội triển khai tuyến đường sắt đô thị mới. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Hà Nội triển khai tuyến đường sắt đô thị mới</p>
        <p>Các cơ quan ban ngành đang khẩn trương đánh giá tình hình để đưa ra các phương án chỉ đạo kịp thời, đảm bảo an sinh xã hội.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh6.jpg" alt="Hà Nội triển khai tuyến đường sắt đô thị mới" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Ghi nhận thực tế cho thấy sự tham gia tích cực của người dân cùng với chính quyền địa phương trong việc giải quyết các vấn đề cấp bách.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Sự đoàn kết và đồng lòng của toàn dân là yếu tố then chốt giúp chúng ta vượt qua mọi thử thách."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["thoi-su"],
        "publishedAt": "2026-10-03 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-4",
        "title": "Bầu cử Mỹ 2026 bước vào giai đoạn nước rút",
        "slug": "bai-viet-4",
        "image": "./img/anh7.jpg",
        "excerpt": "Bầu cử Mỹ 2026 bước vào giai đoạn nước rút. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Bầu cử Mỹ 2026 bước vào giai đoạn nước rút</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh8.jpg" alt="Bầu cử Mỹ 2026 bước vào giai đoạn nước rút" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Cục diện toàn cầu đang có những sự phân cực rõ rệt, ảnh hưởng trực tiếp đến các hiệp định và quan hệ ngoại giao song phương.</p>
        <blockquote>"Trong một thế giới đa cực, các quốc gia cần linh hoạt điều chỉnh chiến lược để bảo vệ lợi ích quốc gia."</blockquote>
        <h2>Kết luận</h2>
        <p>Giới quan sát quốc tế cho rằng, những động thái này sẽ còn tiếp diễn và định hình lại trật tự thế giới mới trong thời gian tới.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["the-gioi"],
        "publishedAt": "2026-10-04 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-5",
        "title": "Hội nghị thượng đỉnh G20 đạt được thỏa thuận lịch sử",
        "slug": "bai-viet-5",
        "image": "./img/anh9.jpg",
        "excerpt": "Hội nghị thượng đỉnh G20 đạt được thỏa thuận lịch sử. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Hội nghị thượng đỉnh G20 đạt được thỏa thuận lịch sử</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Cục diện toàn cầu đang có những sự phân cực rõ rệt, ảnh hưởng trực tiếp đến các hiệp định và quan hệ ngoại giao song phương.</p>
        <img src="./img/anh10.jpg" alt="Hội nghị thượng đỉnh G20 đạt được thỏa thuận lịch sử" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Trong một thế giới đa cực, các quốc gia cần linh hoạt điều chỉnh chiến lược để bảo vệ lợi ích quốc gia."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Giới quan sát quốc tế cho rằng, những động thái này sẽ còn tiếp diễn và định hình lại trật tự thế giới mới trong thời gian tới.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["the-gioi"],
        "publishedAt": "2026-10-05 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-6",
        "title": "Căng thẳng thương mại toàn cầu có dấu hiệu hạ nhiệt",
        "slug": "bai-viet-6",
        "image": "./img/anh11.jpg",
        "excerpt": "Căng thẳng thương mại toàn cầu có dấu hiệu hạ nhiệt. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh12.jpg" alt="Căng thẳng thương mại toàn cầu có dấu hiệu hạ nhiệt" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Căng thẳng thương mại toàn cầu có dấu hiệu hạ nhiệt</h2>
        <p>Vấn đề <strong>Căng thẳng thương mại toàn cầu có dấu hiệu hạ nhiệt</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Cục diện toàn cầu đang có những sự phân cực rõ rệt, ảnh hưởng trực tiếp đến các hiệp định và quan hệ ngoại giao song phương.</li>
            <li><strong>Khía cạnh xã hội:</strong> Giới quan sát quốc tế cho rằng, những động thái này sẽ còn tiếp diễn và định hình lại trật tự thế giới mới trong thời gian tới.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Trong một thế giới đa cực, các quốc gia cần linh hoạt điều chỉnh chiến lược để bảo vệ lợi ích quốc gia."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["the-gioi"],
        "publishedAt": "2026-10-06 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-7",
        "title": "Thị trường chứng khoán trong nước bứt phá kỷ lục",
        "slug": "bai-viet-7",
        "image": "./img/anh13.jpg",
        "excerpt": "Thị trường chứng khoán trong nước bứt phá kỷ lục. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Thị trường chứng khoán trong nước bứt phá kỷ lục</p>
        <p>Dòng vốn đầu tư đang có sự dịch chuyển mạnh mẽ vào các lĩnh vực cốt lõi, tạo đà phục hồi cho toàn bộ nền kinh tế vĩ mô.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh14.jpg" alt="Thị trường chứng khoán trong nước bứt phá kỷ lục" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Nhiều doanh nghiệp đã chủ động tái cơ cấu, cắt giảm chi phí không cần thiết để tối ưu hóa biên lợi nhuận trong bối cảnh lạm phát.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Cơ hội luôn xuất hiện trong khủng hoảng, người chiến thắng là người nắm bắt được xu hướng tiêu dùng mới."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["kinh-doanh"],
        "publishedAt": "2026-10-07 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-8",
        "title": "Các startup công nghệ Việt thu hút dòng vốn tỷ đô",
        "slug": "bai-viet-8",
        "image": "./img/anh15.jpg",
        "excerpt": "Các startup công nghệ Việt thu hút dòng vốn tỷ đô. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Các startup công nghệ Việt thu hút dòng vốn tỷ đô</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh16.jpg" alt="Các startup công nghệ Việt thu hút dòng vốn tỷ đô" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Dòng vốn đầu tư đang có sự dịch chuyển mạnh mẽ vào các lĩnh vực cốt lõi, tạo đà phục hồi cho toàn bộ nền kinh tế vĩ mô.</p>
        <blockquote>"Cơ hội luôn xuất hiện trong khủng hoảng, người chiến thắng là người nắm bắt được xu hướng tiêu dùng mới."</blockquote>
        <h2>Kết luận</h2>
        <p>Nhiều doanh nghiệp đã chủ động tái cơ cấu, cắt giảm chi phí không cần thiết để tối ưu hóa biên lợi nhuận trong bối cảnh lạm phát.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["kinh-doanh"],
        "publishedAt": "2026-10-08 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-9",
        "title": "Giá vàng thế giới biến động mạnh trước quyết định của FED",
        "slug": "bai-viet-9",
        "image": "./img/anh17.jpg",
        "excerpt": "Giá vàng thế giới biến động mạnh trước quyết định của FED. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Giá vàng thế giới biến động mạnh trước quyết định của FED</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Dòng vốn đầu tư đang có sự dịch chuyển mạnh mẽ vào các lĩnh vực cốt lõi, tạo đà phục hồi cho toàn bộ nền kinh tế vĩ mô.</p>
        <img src="./img/anh18.jpg" alt="Giá vàng thế giới biến động mạnh trước quyết định của FED" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Cơ hội luôn xuất hiện trong khủng hoảng, người chiến thắng là người nắm bắt được xu hướng tiêu dùng mới."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Nhiều doanh nghiệp đã chủ động tái cơ cấu, cắt giảm chi phí không cần thiết để tối ưu hóa biên lợi nhuận trong bối cảnh lạm phát.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["kinh-doanh"],
        "publishedAt": "2026-10-09 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-10",
        "title": "Thị trường bất động sản vùng ven TP.HCM ấm dần lên",
        "slug": "bai-viet-10",
        "image": "./img/anh19.jpg",
        "excerpt": "Thị trường bất động sản vùng ven TP.HCM ấm dần lên. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh20.jpg" alt="Thị trường bất động sản vùng ven TP.HCM ấm dần lên" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Thị trường bất động sản vùng ven TP.HCM ấm dần lên</h2>
        <p>Vấn đề <strong>Thị trường bất động sản vùng ven TP.HCM ấm dần lên</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Thị trường địa ốc đang trải qua chu kỳ thanh lọc mạnh mẽ, những dự án có pháp lý minh bạch tiếp tục thu hút dòng tiền thực.</li>
            <li><strong>Khía cạnh xã hội:</strong> Chính sách tín dụng mới đã mở ra cơ hội cho người mua nhà ở thực, đồng thời hạn chế tình trạng đầu cơ lướt sóng gây sốt ảo.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Tính bền vững của thị trường bất động sản phụ thuộc vào sự điều tiết cung cầu hợp lý từ cơ quan quản lý."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["bat-dong-san"],
        "publishedAt": "2026-10-10 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-11",
        "title": "Hàng loạt dự án nhà ở xã hội chuẩn bị khởi công",
        "slug": "bai-viet-11",
        "image": "./img/anh21.jpg",
        "excerpt": "Hàng loạt dự án nhà ở xã hội chuẩn bị khởi công. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Hàng loạt dự án nhà ở xã hội chuẩn bị khởi công</p>
        <p>Thị trường địa ốc đang trải qua chu kỳ thanh lọc mạnh mẽ, những dự án có pháp lý minh bạch tiếp tục thu hút dòng tiền thực.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh22.jpg" alt="Hàng loạt dự án nhà ở xã hội chuẩn bị khởi công" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Chính sách tín dụng mới đã mở ra cơ hội cho người mua nhà ở thực, đồng thời hạn chế tình trạng đầu cơ lướt sóng gây sốt ảo.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Tính bền vững của thị trường bất động sản phụ thuộc vào sự điều tiết cung cầu hợp lý từ cơ quan quản lý."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["bat-dong-san"],
        "publishedAt": "2026-10-11 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-12",
        "title": "Giải mã cơn sốt đất nền tại các tỉnh miền Trung",
        "slug": "bai-viet-12",
        "image": "./img/anh23.jpg",
        "excerpt": "Giải mã cơn sốt đất nền tại các tỉnh miền Trung. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Giải mã cơn sốt đất nền tại các tỉnh miền Trung</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh24.jpg" alt="Giải mã cơn sốt đất nền tại các tỉnh miền Trung" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Thị trường địa ốc đang trải qua chu kỳ thanh lọc mạnh mẽ, những dự án có pháp lý minh bạch tiếp tục thu hút dòng tiền thực.</p>
        <blockquote>"Tính bền vững của thị trường bất động sản phụ thuộc vào sự điều tiết cung cầu hợp lý từ cơ quan quản lý."</blockquote>
        <h2>Kết luận</h2>
        <p>Chính sách tín dụng mới đã mở ra cơ hội cho người mua nhà ở thực, đồng thời hạn chế tình trạng đầu cơ lướt sóng gây sốt ảo.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["bat-dong-san"],
        "publishedAt": "2026-10-12 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-13",
        "title": "Đội tuyển bóng đá nữ Việt Nam giành vé dự World Cup",
        "slug": "bai-viet-13",
        "image": "./img/anh25.jpg",
        "excerpt": "Đội tuyển bóng đá nữ Việt Nam giành vé dự World Cup. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Đội tuyển bóng đá nữ Việt Nam giành vé dự World Cup</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Các vận động viên đang bước vào giai đoạn tập huấn căng thẳng nhất nhằm chuẩn bị cho những giải đấu mang tầm cỡ châu lục.</p>
        <img src="./img/anh26.jpg" alt="Đội tuyển bóng đá nữ Việt Nam giành vé dự World Cup" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Thể thao không chỉ là chiến thắng trên sân cỏ, mà còn là ý chí vượt qua giới hạn của bản thân."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Sự đầu tư bài bản từ các liên đoàn đã bắt đầu đơm hoa kết trái, mang về những tấm huy chương quý giá cho thể thao nước nhà.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["the-thao"],
        "publishedAt": "2026-10-13 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-14",
        "title": "Cơn địa chấn tại giải Ngoại hạng Anh vòng 15",
        "slug": "bai-viet-14",
        "image": "./img/anh27.jpg",
        "excerpt": "Cơn địa chấn tại giải Ngoại hạng Anh vòng 15. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh28.jpg" alt="Cơn địa chấn tại giải Ngoại hạng Anh vòng 15" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Cơn địa chấn tại giải Ngoại hạng Anh vòng 15</h2>
        <p>Vấn đề <strong>Cơn địa chấn tại giải Ngoại hạng Anh vòng 15</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Các vận động viên đang bước vào giai đoạn tập huấn căng thẳng nhất nhằm chuẩn bị cho những giải đấu mang tầm cỡ châu lục.</li>
            <li><strong>Khía cạnh xã hội:</strong> Sự đầu tư bài bản từ các liên đoàn đã bắt đầu đơm hoa kết trái, mang về những tấm huy chương quý giá cho thể thao nước nhà.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Thể thao không chỉ là chiến thắng trên sân cỏ, mà còn là ý chí vượt qua giới hạn của bản thân."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["the-thao"],
        "publishedAt": "2026-10-14 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-15",
        "title": "Kỷ lục gia điền kinh phá vỡ thành tích tồn tại 20 năm",
        "slug": "bai-viet-15",
        "image": "./img/anh29.jpg",
        "excerpt": "Kỷ lục gia điền kinh phá vỡ thành tích tồn tại 20 năm. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Kỷ lục gia điền kinh phá vỡ thành tích tồn tại 20 năm</p>
        <p>Các vận động viên đang bước vào giai đoạn tập huấn căng thẳng nhất nhằm chuẩn bị cho những giải đấu mang tầm cỡ châu lục.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh30.jpg" alt="Kỷ lục gia điền kinh phá vỡ thành tích tồn tại 20 năm" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Sự đầu tư bài bản từ các liên đoàn đã bắt đầu đơm hoa kết trái, mang về những tấm huy chương quý giá cho thể thao nước nhà.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Thể thao không chỉ là chiến thắng trên sân cỏ, mà còn là ý chí vượt qua giới hạn của bản thân."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["the-thao"],
        "publishedAt": "2026-10-15 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-16",
        "title": "Bộ phim bom tấn Việt xô đổ mọi kỷ lục phòng vé",
        "slug": "bai-viet-16",
        "image": "./img/anh31.jpg",
        "excerpt": "Bộ phim bom tấn Việt xô đổ mọi kỷ lục phòng vé. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Bộ phim bom tấn Việt xô đổ mọi kỷ lục phòng vé</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh32.jpg" alt="Bộ phim bom tấn Việt xô đổ mọi kỷ lục phòng vé" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Thị trường giải trí chứng kiến sự lên ngôi của các nội dung số và các nền tảng phát trực tuyến, thay đổi hoàn toàn thói quen khán giả.</p>
        <blockquote>"Nghệ thuật đích thực phải chạm đến cảm xúc sâu thẳm nhất của công chúng."</blockquote>
        <h2>Kết luận</h2>
        <p>Các nhà sản xuất đang đầu tư mạnh tay vào chất lượng kịch bản và kỹ xảo để mang đến những sản phẩm nghệ thuật mang tầm quốc tế.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["giai-tri"],
        "publishedAt": "2026-10-16 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-17",
        "title": "Dàn sao hạng A hội tụ tại sự kiện thảm đỏ lớn nhất năm",
        "slug": "bai-viet-17",
        "image": "./img/anh33.jpg",
        "excerpt": "Dàn sao hạng A hội tụ tại sự kiện thảm đỏ lớn nhất năm. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Dàn sao hạng A hội tụ tại sự kiện thảm đỏ lớn nhất năm</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Thị trường giải trí chứng kiến sự lên ngôi của các nội dung số và các nền tảng phát trực tuyến, thay đổi hoàn toàn thói quen khán giả.</p>
        <img src="./img/anh34.jpg" alt="Dàn sao hạng A hội tụ tại sự kiện thảm đỏ lớn nhất năm" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Nghệ thuật đích thực phải chạm đến cảm xúc sâu thẳm nhất của công chúng."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Các nhà sản xuất đang đầu tư mạnh tay vào chất lượng kịch bản và kỹ xảo để mang đến những sản phẩm nghệ thuật mang tầm quốc tế.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["giai-tri"],
        "publishedAt": "2026-10-17 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-18",
        "title": "Nghệ sĩ trẻ giành giải thưởng âm nhạc quốc tế danh giá",
        "slug": "bai-viet-18",
        "image": "./img/anh35.jpg",
        "excerpt": "Nghệ sĩ trẻ giành giải thưởng âm nhạc quốc tế danh giá. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh36.jpg" alt="Nghệ sĩ trẻ giành giải thưởng âm nhạc quốc tế danh giá" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Nghệ sĩ trẻ giành giải thưởng âm nhạc quốc tế danh giá</h2>
        <p>Vấn đề <strong>Nghệ sĩ trẻ giành giải thưởng âm nhạc quốc tế danh giá</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Thị trường giải trí chứng kiến sự lên ngôi của các nội dung số và các nền tảng phát trực tuyến, thay đổi hoàn toàn thói quen khán giả.</li>
            <li><strong>Khía cạnh xã hội:</strong> Các nhà sản xuất đang đầu tư mạnh tay vào chất lượng kịch bản và kỹ xảo để mang đến những sản phẩm nghệ thuật mang tầm quốc tế.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Nghệ thuật đích thực phải chạm đến cảm xúc sâu thẳm nhất của công chúng."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["giai-tri"],
        "publishedAt": "2026-10-18 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-19",
        "title": "Triệt phá đường dây lừa đảo qua mạng quy mô lớn",
        "slug": "bai-viet-19",
        "image": "./img/anh37.jpg",
        "excerpt": "Triệt phá đường dây lừa đảo qua mạng quy mô lớn. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Triệt phá đường dây lừa đảo qua mạng quy mô lớn</p>
        <p>Hành lang pháp lý đang được hoàn thiện nhằm siết chặt quản lý, đảm bảo môi trường kinh doanh minh bạch và công bằng cho mọi đối tượng.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh38.jpg" alt="Triệt phá đường dây lừa đảo qua mạng quy mô lớn" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Lực lượng chức năng liên tục triệt phá các đường dây tội phạm có tổ chức, góp phần giữ vững an ninh trật tự xã hội.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Thượng tôn pháp luật là kim chỉ nam để duy trì sự ổn định và phát triển của một quốc gia."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["phap-luat"],
        "publishedAt": "2026-10-19 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-20",
        "title": "Đề xuất tăng nặng hình phạt đối với tội phạm công nghệ cao",
        "slug": "bai-viet-20",
        "image": "./img/anh39.jpg",
        "excerpt": "Đề xuất tăng nặng hình phạt đối với tội phạm công nghệ cao. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Đề xuất tăng nặng hình phạt đối với tội phạm công nghệ cao</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh40.jpg" alt="Đề xuất tăng nặng hình phạt đối với tội phạm công nghệ cao" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Hành lang pháp lý đang được hoàn thiện nhằm siết chặt quản lý, đảm bảo môi trường kinh doanh minh bạch và công bằng cho mọi đối tượng.</p>
        <blockquote>"Thượng tôn pháp luật là kim chỉ nam để duy trì sự ổn định và phát triển của một quốc gia."</blockquote>
        <h2>Kết luận</h2>
        <p>Lực lượng chức năng liên tục triệt phá các đường dây tội phạm có tổ chức, góp phần giữ vững an ninh trật tự xã hội.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["phap-luat"],
        "publishedAt": "2026-10-20 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-21",
        "title": "Khai đình xét xử vụ án tham nhũng gây rúng động dư luận",
        "slug": "bai-viet-21",
        "image": "./img/anh41.jpg",
        "excerpt": "Khai đình xét xử vụ án tham nhũng gây rúng động dư luận. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Khai đình xét xử vụ án tham nhũng gây rúng động dư luận</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Hành lang pháp lý đang được hoàn thiện nhằm siết chặt quản lý, đảm bảo môi trường kinh doanh minh bạch và công bằng cho mọi đối tượng.</p>
        <img src="./img/anh42.jpg" alt="Khai đình xét xử vụ án tham nhũng gây rúng động dư luận" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Thượng tôn pháp luật là kim chỉ nam để duy trì sự ổn định và phát triển của một quốc gia."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Lực lượng chức năng liên tục triệt phá các đường dây tội phạm có tổ chức, góp phần giữ vững an ninh trật tự xã hội.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["phap-luat"],
        "publishedAt": "2026-10-21 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-22",
        "title": "Hàng loạt trường đại học công bố phương án tuyển sinh 2027",
        "slug": "bai-viet-22",
        "image": "./img/anh43.jpg",
        "excerpt": "Hàng loạt trường đại học công bố phương án tuyển sinh 2027. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh44.jpg" alt="Hàng loạt trường đại học công bố phương án tuyển sinh 2027" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Hàng loạt trường đại học công bố phương án tuyển sinh 2027</h2>
        <p>Vấn đề <strong>Hàng loạt trường đại học công bố phương án tuyển sinh 2027</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Ngành giáo dục đang đẩy mạnh công tác chuyển đổi số, áp dụng các mô hình học tập kết hợp (blended learning) nhằm nâng cao chất lượng đào tạo.</li>
            <li><strong>Khía cạnh xã hội:</strong> Nhiều trường đại học đã tự chủ chương trình giảng dạy, bám sát nhu cầu thực tế của thị trường lao động trong nước và quốc tế.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Giáo dục không phải là đổ đầy một cái xô, mà là thắp lên một ngọn lửa đam mê học hỏi."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["giao-duc"],
        "publishedAt": "2026-10-22 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-23",
        "title": "Đổi mới chương trình giáo dục phổ thông: Những thành tựu bước đầu",
        "slug": "bai-viet-23",
        "image": "./img/anh45.jpg",
        "excerpt": "Đổi mới chương trình giáo dục phổ thông: Những thành tựu bước đầu. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Đổi mới chương trình giáo dục phổ thông: Những thành tựu bước đầu</p>
        <p>Ngành giáo dục đang đẩy mạnh công tác chuyển đổi số, áp dụng các mô hình học tập kết hợp (blended learning) nhằm nâng cao chất lượng đào tạo.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh46.jpg" alt="Đổi mới chương trình giáo dục phổ thông: Những thành tựu bước đầu" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Nhiều trường đại học đã tự chủ chương trình giảng dạy, bám sát nhu cầu thực tế của thị trường lao động trong nước và quốc tế.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Giáo dục không phải là đổ đầy một cái xô, mà là thắp lên một ngọn lửa đam mê học hỏi."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["giao-duc"],
        "publishedAt": "2026-10-23 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-24",
        "title": "Câu chuyện nghị lực của thủ khoa nghèo vượt khó",
        "slug": "bai-viet-24",
        "image": "./img/anh47.jpg",
        "excerpt": "Câu chuyện nghị lực của thủ khoa nghèo vượt khó. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Câu chuyện nghị lực của thủ khoa nghèo vượt khó</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh48.jpg" alt="Câu chuyện nghị lực của thủ khoa nghèo vượt khó" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Ngành giáo dục đang đẩy mạnh công tác chuyển đổi số, áp dụng các mô hình học tập kết hợp (blended learning) nhằm nâng cao chất lượng đào tạo.</p>
        <blockquote>"Giáo dục không phải là đổ đầy một cái xô, mà là thắp lên một ngọn lửa đam mê học hỏi."</blockquote>
        <h2>Kết luận</h2>
        <p>Nhiều trường đại học đã tự chủ chương trình giảng dạy, bám sát nhu cầu thực tế của thị trường lao động trong nước và quốc tế.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["giao-duc"],
        "publishedAt": "2026-10-24 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-25",
        "title": "Phát hiện mới trong điều trị căn bệnh ung thư hiểm nghèo",
        "slug": "bai-viet-25",
        "image": "./img/anh49.jpg",
        "excerpt": "Phát hiện mới trong điều trị căn bệnh ung thư hiểm nghèo. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Phát hiện mới trong điều trị căn bệnh ung thư hiểm nghèo</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Các chuyên gia y tế khuyến cáo người dân cần chủ động thực hiện các biện pháp phòng ngừa dịch bệnh, đặc biệt trong giai đoạn chuyển mùa.</p>
        <img src="./img/anh50.jpg" alt="Phát hiện mới trong điều trị căn bệnh ung thư hiểm nghèo" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Sức khỏe là tài sản vô giá nhất, phòng bệnh hơn chữa bệnh luôn là ưu tiên hàng đầu."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Hệ thống y tế cơ sở đang được nâng cấp toàn diện, đảm bảo khả năng tiếp cận dịch vụ khám chữa bệnh cho người dân vùng sâu vùng xa.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["suc-khoe"],
        "publishedAt": "2026-10-25 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-26",
        "title": "Cảnh báo dịch bệnh mùa mưa: Các biện pháp phòng tránh",
        "slug": "bai-viet-26",
        "image": "./img/anh51.jpg",
        "excerpt": "Cảnh báo dịch bệnh mùa mưa: Các biện pháp phòng tránh. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh52.jpg" alt="Cảnh báo dịch bệnh mùa mưa: Các biện pháp phòng tránh" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Cảnh báo dịch bệnh mùa mưa: Các biện pháp phòng tránh</h2>
        <p>Vấn đề <strong>Cảnh báo dịch bệnh mùa mưa: Các biện pháp phòng tránh</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Các chuyên gia y tế khuyến cáo người dân cần chủ động thực hiện các biện pháp phòng ngừa dịch bệnh, đặc biệt trong giai đoạn chuyển mùa.</li>
            <li><strong>Khía cạnh xã hội:</strong> Hệ thống y tế cơ sở đang được nâng cấp toàn diện, đảm bảo khả năng tiếp cận dịch vụ khám chữa bệnh cho người dân vùng sâu vùng xa.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Sức khỏe là tài sản vô giá nhất, phòng bệnh hơn chữa bệnh luôn là ưu tiên hàng đầu."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["suc-khoe"],
        "publishedAt": "2026-10-26 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-27",
        "title": "Bí quyết giữ gìn sức khỏe tâm thần trong thời đại số",
        "slug": "bai-viet-27",
        "image": "./img/anh53.jpg",
        "excerpt": "Bí quyết giữ gìn sức khỏe tâm thần trong thời đại số. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Bí quyết giữ gìn sức khỏe tâm thần trong thời đại số</p>
        <p>Các chuyên gia y tế khuyến cáo người dân cần chủ động thực hiện các biện pháp phòng ngừa dịch bệnh, đặc biệt trong giai đoạn chuyển mùa.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh54.jpg" alt="Bí quyết giữ gìn sức khỏe tâm thần trong thời đại số" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Hệ thống y tế cơ sở đang được nâng cấp toàn diện, đảm bảo khả năng tiếp cận dịch vụ khám chữa bệnh cho người dân vùng sâu vùng xa.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Sức khỏe là tài sản vô giá nhất, phòng bệnh hơn chữa bệnh luôn là ưu tiên hàng đầu."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["suc-khoe"],
        "publishedAt": "2026-10-27 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-28",
        "title": "Trào lưu sống xanh đang dần thay đổi thói quen giới trẻ",
        "slug": "bai-viet-28",
        "image": "./img/anh55.jpg",
        "excerpt": "Trào lưu sống xanh đang dần thay đổi thói quen giới trẻ. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Trào lưu sống xanh đang dần thay đổi thói quen giới trẻ</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh56.jpg" alt="Trào lưu sống xanh đang dần thay đổi thói quen giới trẻ" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Xu hướng tiêu dùng xanh và lối sống tối giản đang ngày càng được nhiều bạn trẻ ưa chuộng, góp phần bảo vệ môi trường sinh thái.</p>
        <blockquote>"Hạnh phúc đôi khi đến từ những điều giản dị và sự sẻ chia trong cuộc sống thường nhật."</blockquote>
        <h2>Kết luận</h2>
        <p>Các hoạt động cộng đồng và thiện nguyện diễn ra sôi nổi, lan tỏa những thông điệp tích cực và nhân văn trong xã hội hiện đại.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["doi-song"],
        "publishedAt": "2026-10-28 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-29",
        "title": "Câu chuyện ấm lòng về người mẹ đơn thân nuôi 3 con thành đạt",
        "slug": "bai-viet-29",
        "image": "./img/anh57.jpg",
        "excerpt": "Câu chuyện ấm lòng về người mẹ đơn thân nuôi 3 con thành đạt. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Câu chuyện ấm lòng về người mẹ đơn thân nuôi 3 con thành đạt</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Xu hướng tiêu dùng xanh và lối sống tối giản đang ngày càng được nhiều bạn trẻ ưa chuộng, góp phần bảo vệ môi trường sinh thái.</p>
        <img src="./img/anh58.jpg" alt="Câu chuyện ấm lòng về người mẹ đơn thân nuôi 3 con thành đạt" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Hạnh phúc đôi khi đến từ những điều giản dị và sự sẻ chia trong cuộc sống thường nhật."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Các hoạt động cộng đồng và thiện nguyện diễn ra sôi nổi, lan tỏa những thông điệp tích cực và nhân văn trong xã hội hiện đại.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["doi-song"],
        "publishedAt": "2026-10-01 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-30",
        "title": "Góc khuất phía sau cuộc sống hào nhoáng của các KOL",
        "slug": "bai-viet-30",
        "image": "./img/anh59.jpg",
        "excerpt": "Góc khuất phía sau cuộc sống hào nhoáng của các KOL. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh60.jpg" alt="Góc khuất phía sau cuộc sống hào nhoáng của các KOL" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Góc khuất phía sau cuộc sống hào nhoáng của các KOL</h2>
        <p>Vấn đề <strong>Góc khuất phía sau cuộc sống hào nhoáng của các KOL</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Xu hướng tiêu dùng xanh và lối sống tối giản đang ngày càng được nhiều bạn trẻ ưa chuộng, góp phần bảo vệ môi trường sinh thái.</li>
            <li><strong>Khía cạnh xã hội:</strong> Các hoạt động cộng đồng và thiện nguyện diễn ra sôi nổi, lan tỏa những thông điệp tích cực và nhân văn trong xã hội hiện đại.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Hạnh phúc đôi khi đến từ những điều giản dị và sự sẻ chia trong cuộc sống thường nhật."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["doi-song"],
        "publishedAt": "2026-10-02 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-31",
        "title": "Top 10 điểm đến không thể bỏ qua tại Việt Nam dịp cuối năm",
        "slug": "bai-viet-31",
        "image": "./img/anh61.jpg",
        "excerpt": "Top 10 điểm đến không thể bỏ qua tại Việt Nam dịp cuối năm. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Top 10 điểm đến không thể bỏ qua tại Việt Nam dịp cuối năm</p>
        <p>Ngành du lịch đang phục hồi mạnh mẽ với sự bùng nổ của các tour du lịch trải nghiệm văn hóa và du lịch sinh thái.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh62.jpg" alt="Top 10 điểm đến không thể bỏ qua tại Việt Nam dịp cuối năm" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Chính quyền các địa phương đang nỗ lực đa dạng hóa sản phẩm du lịch, nâng cao chất lượng dịch vụ để thu hút du khách quốc tế.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Mỗi chuyến đi không chỉ là khám phá vùng đất mới mà còn là hành trình tìm lại chính mình."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["du-lich"],
        "publishedAt": "2026-10-03 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-32",
        "title": "Trải nghiệm du lịch sinh thái tại vùng lõi rừng quốc gia",
        "slug": "bai-viet-32",
        "image": "./img/anh63.jpg",
        "excerpt": "Trải nghiệm du lịch sinh thái tại vùng lõi rừng quốc gia. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Trải nghiệm du lịch sinh thái tại vùng lõi rừng quốc gia</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh64.jpg" alt="Trải nghiệm du lịch sinh thái tại vùng lõi rừng quốc gia" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Ngành du lịch đang phục hồi mạnh mẽ với sự bùng nổ của các tour du lịch trải nghiệm văn hóa và du lịch sinh thái.</p>
        <blockquote>"Mỗi chuyến đi không chỉ là khám phá vùng đất mới mà còn là hành trình tìm lại chính mình."</blockquote>
        <h2>Kết luận</h2>
        <p>Chính quyền các địa phương đang nỗ lực đa dạng hóa sản phẩm du lịch, nâng cao chất lượng dịch vụ để thu hút du khách quốc tế.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["du-lich"],
        "publishedAt": "2026-10-04 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-33",
        "title": "Ngành du lịch phục hồi mạnh mẽ sau đại dịch",
        "slug": "bai-viet-33",
        "image": "./img/anh65.jpg",
        "excerpt": "Ngành du lịch phục hồi mạnh mẽ sau đại dịch. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Ngành du lịch phục hồi mạnh mẽ sau đại dịch</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Ngành du lịch đang phục hồi mạnh mẽ với sự bùng nổ của các tour du lịch trải nghiệm văn hóa và du lịch sinh thái.</p>
        <img src="./img/anh66.jpg" alt="Ngành du lịch phục hồi mạnh mẽ sau đại dịch" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Mỗi chuyến đi không chỉ là khám phá vùng đất mới mà còn là hành trình tìm lại chính mình."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Chính quyền các địa phương đang nỗ lực đa dạng hóa sản phẩm du lịch, nâng cao chất lượng dịch vụ để thu hút du khách quốc tế.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["du-lich"],
        "publishedAt": "2026-10-05 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-34",
        "title": "Cơ quan vũ trụ NASA công bố hình ảnh mới nhất từ sao Hỏa",
        "slug": "bai-viet-34",
        "image": "./img/anh67.jpg",
        "excerpt": "Cơ quan vũ trụ NASA công bố hình ảnh mới nhất từ sao Hỏa. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh68.jpg" alt="Cơ quan vũ trụ NASA công bố hình ảnh mới nhất từ sao Hỏa" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Cơ quan vũ trụ NASA công bố hình ảnh mới nhất từ sao Hỏa</h2>
        <p>Vấn đề <strong>Cơ quan vũ trụ NASA công bố hình ảnh mới nhất từ sao Hỏa</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Những đột phá trong nghiên cứu lượng tử và công nghệ sinh học đang mở ra những cánh cửa mới cho tương lai nhân loại.</li>
            <li><strong>Khía cạnh xã hội:</strong> Cộng đồng khoa học đang chung tay giải quyết các bài toán hóc búa về biến đổi khí hậu và năng lượng sạch.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Khoa học không có biên giới, nó là chìa khóa để giải quyết những thách thức toàn cầu."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["khoa-hoc"],
        "publishedAt": "2026-10-06 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-35",
        "title": "Bước tiến đột phá trong công nghệ trí tuệ nhân tạo",
        "slug": "bai-viet-35",
        "image": "./img/anh69.jpg",
        "excerpt": "Bước tiến đột phá trong công nghệ trí tuệ nhân tạo. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Bước tiến đột phá trong công nghệ trí tuệ nhân tạo</p>
        <p>Những đột phá trong nghiên cứu lượng tử và công nghệ sinh học đang mở ra những cánh cửa mới cho tương lai nhân loại.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh70.jpg" alt="Bước tiến đột phá trong công nghệ trí tuệ nhân tạo" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Cộng đồng khoa học đang chung tay giải quyết các bài toán hóc búa về biến đổi khí hậu và năng lượng sạch.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Khoa học không có biên giới, nó là chìa khóa để giải quyết những thách thức toàn cầu."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["khoa-hoc"],
        "publishedAt": "2026-10-07 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-36",
        "title": "Giải mã những bí ẩn về hố đen vũ trụ",
        "slug": "bai-viet-36",
        "image": "./img/anh71.jpg",
        "excerpt": "Giải mã những bí ẩn về hố đen vũ trụ. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Giải mã những bí ẩn về hố đen vũ trụ</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh72.jpg" alt="Giải mã những bí ẩn về hố đen vũ trụ" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Những đột phá trong nghiên cứu lượng tử và công nghệ sinh học đang mở ra những cánh cửa mới cho tương lai nhân loại.</p>
        <blockquote>"Khoa học không có biên giới, nó là chìa khóa để giải quyết những thách thức toàn cầu."</blockquote>
        <h2>Kết luận</h2>
        <p>Cộng đồng khoa học đang chung tay giải quyết các bài toán hóc búa về biến đổi khí hậu và năng lượng sạch.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["khoa-hoc"],
        "publishedAt": "2026-10-08 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-37",
        "title": "Apple ra mắt dòng sản phẩm iPhone mới với nhiều cải tiến",
        "slug": "bai-viet-37",
        "image": "./img/anh73.jpg",
        "excerpt": "Apple ra mắt dòng sản phẩm iPhone mới với nhiều cải tiến. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Apple ra mắt dòng sản phẩm iPhone mới với nhiều cải tiến</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Chuyển đổi số không còn là sự lựa chọn mà đã trở thành mệnh lệnh sinh tồn đối với các doanh nghiệp trong kỷ nguyên 4.0.</p>
        <img src="./img/anh74.jpg" alt="Apple ra mắt dòng sản phẩm iPhone mới với nhiều cải tiến" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Công nghệ sinh ra để phục vụ con người, nhưng chúng ta phải biết cách làm chủ công nghệ."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Vấn đề bảo mật dữ liệu và an toàn thông tin mạng đang được đặt lên hàng đầu trước những mối đe dọa không gian mạng ngày càng tinh vi.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["so-hoa"],
        "publishedAt": "2026-10-09 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-38",
        "title": "Nguy cơ lộ lọt dữ liệu cá nhân từ các ứng dụng miễn phí",
        "slug": "bai-viet-38",
        "image": "./img/anh75.jpg",
        "excerpt": "Nguy cơ lộ lọt dữ liệu cá nhân từ các ứng dụng miễn phí. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh76.jpg" alt="Nguy cơ lộ lọt dữ liệu cá nhân từ các ứng dụng miễn phí" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Nguy cơ lộ lọt dữ liệu cá nhân từ các ứng dụng miễn phí</h2>
        <p>Vấn đề <strong>Nguy cơ lộ lọt dữ liệu cá nhân từ các ứng dụng miễn phí</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Chuyển đổi số không còn là sự lựa chọn mà đã trở thành mệnh lệnh sinh tồn đối với các doanh nghiệp trong kỷ nguyên 4.0.</li>
            <li><strong>Khía cạnh xã hội:</strong> Vấn đề bảo mật dữ liệu và an toàn thông tin mạng đang được đặt lên hàng đầu trước những mối đe dọa không gian mạng ngày càng tinh vi.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Công nghệ sinh ra để phục vụ con người, nhưng chúng ta phải biết cách làm chủ công nghệ."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["so-hoa"],
        "publishedAt": "2026-10-10 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-39",
        "title": "Cuộc đua mạng 6G chính thức bắt đầu giữa các ông lớn",
        "slug": "bai-viet-39",
        "image": "./img/anh77.jpg",
        "excerpt": "Cuộc đua mạng 6G chính thức bắt đầu giữa các ông lớn. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Cuộc đua mạng 6G chính thức bắt đầu giữa các ông lớn</p>
        <p>Chuyển đổi số không còn là sự lựa chọn mà đã trở thành mệnh lệnh sinh tồn đối với các doanh nghiệp trong kỷ nguyên 4.0.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh78.jpg" alt="Cuộc đua mạng 6G chính thức bắt đầu giữa các ông lớn" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Vấn đề bảo mật dữ liệu và an toàn thông tin mạng đang được đặt lên hàng đầu trước những mối đe dọa không gian mạng ngày càng tinh vi.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Công nghệ sinh ra để phục vụ con người, nhưng chúng ta phải biết cách làm chủ công nghệ."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["so-hoa"],
        "publishedAt": "2026-10-11 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-40",
        "title": "Hãng xe Việt ra mắt mẫu ô tô điện thông minh thế hệ mới",
        "slug": "bai-viet-40",
        "image": "./img/anh79.jpg",
        "excerpt": "Hãng xe Việt ra mắt mẫu ô tô điện thông minh thế hệ mới. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Hãng xe Việt ra mắt mẫu ô tô điện thông minh thế hệ mới</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh80.jpg" alt="Hãng xe Việt ra mắt mẫu ô tô điện thông minh thế hệ mới" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Thị trường ô tô đang chứng kiến cuộc đua khốc liệt giữa các hãng xe điện, hứa hẹn mang lại nhiều lợi ích cho người tiêu dùng.</p>
        <blockquote>"Tương lai của di chuyển là sự kết hợp hoàn hảo giữa công nghệ xanh và trí tuệ nhân tạo."</blockquote>
        <h2>Kết luận</h2>
        <p>Xu hướng điện hóa và tự động hóa đang định hình lại toàn bộ ngành công nghiệp ô tô toàn cầu.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["xe"],
        "publishedAt": "2026-10-12 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-41",
        "title": "Đánh giá chi tiết siêu xe thể thao vừa cập bến Việt Nam",
        "slug": "bai-viet-41",
        "image": "./img/anh81.jpg",
        "excerpt": "Đánh giá chi tiết siêu xe thể thao vừa cập bến Việt Nam. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Đánh giá chi tiết siêu xe thể thao vừa cập bến Việt Nam</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Thị trường ô tô đang chứng kiến cuộc đua khốc liệt giữa các hãng xe điện, hứa hẹn mang lại nhiều lợi ích cho người tiêu dùng.</p>
        <img src="./img/anh82.jpg" alt="Đánh giá chi tiết siêu xe thể thao vừa cập bến Việt Nam" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Tương lai của di chuyển là sự kết hợp hoàn hảo giữa công nghệ xanh và trí tuệ nhân tạo."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Xu hướng điện hóa và tự động hóa đang định hình lại toàn bộ ngành công nghiệp ô tô toàn cầu.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["xe"],
        "publishedAt": "2026-10-13 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-42",
        "title": "Xu hướng chuyển dịch sang xe xanh của người tiêu dùng",
        "slug": "bai-viet-42",
        "image": "./img/anh83.jpg",
        "excerpt": "Xu hướng chuyển dịch sang xe xanh của người tiêu dùng. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh84.jpg" alt="Xu hướng chuyển dịch sang xe xanh của người tiêu dùng" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Xu hướng chuyển dịch sang xe xanh của người tiêu dùng</h2>
        <p>Vấn đề <strong>Xu hướng chuyển dịch sang xe xanh của người tiêu dùng</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Thị trường ô tô đang chứng kiến cuộc đua khốc liệt giữa các hãng xe điện, hứa hẹn mang lại nhiều lợi ích cho người tiêu dùng.</li>
            <li><strong>Khía cạnh xã hội:</strong> Xu hướng điện hóa và tự động hóa đang định hình lại toàn bộ ngành công nghiệp ô tô toàn cầu.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Tương lai của di chuyển là sự kết hợp hoàn hảo giữa công nghệ xanh và trí tuệ nhân tạo."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["xe"],
        "publishedAt": "2026-10-14 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-43",
        "title": "Chuyên gia hiến kế giải bài toán ùn tắc giao thông đô thị",
        "slug": "bai-viet-43",
        "image": "./img/anh85.jpg",
        "excerpt": "Chuyên gia hiến kế giải bài toán ùn tắc giao thông đô thị. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Chuyên gia hiến kế giải bài toán ùn tắc giao thông đô thị</p>
        <p>Những quan điểm trái chiều xoay quanh vấn đề này cho thấy sự đa dạng trong cách nhìn nhận và giải quyết bài toán xã hội.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh86.jpg" alt="Chuyên gia hiến kế giải bài toán ùn tắc giao thông đô thị" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Sự đồng thuận chỉ có thể đạt được thông qua đối thoại cởi mở và sự lắng nghe từ nhiều phía.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Góc nhìn phản biện là liều thuốc cần thiết để thúc đẩy sự tiến bộ của xã hội."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["y-kien"],
        "publishedAt": "2026-10-15 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-44",
        "title": "Cần có góc nhìn khách quan về hiện tượng mạng xã hội",
        "slug": "bai-viet-44",
        "image": "./img/anh87.jpg",
        "excerpt": "Cần có góc nhìn khách quan về hiện tượng mạng xã hội. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Cần có góc nhìn khách quan về hiện tượng mạng xã hội</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh88.jpg" alt="Cần có góc nhìn khách quan về hiện tượng mạng xã hội" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Những quan điểm trái chiều xoay quanh vấn đề này cho thấy sự đa dạng trong cách nhìn nhận và giải quyết bài toán xã hội.</p>
        <blockquote>"Góc nhìn phản biện là liều thuốc cần thiết để thúc đẩy sự tiến bộ của xã hội."</blockquote>
        <h2>Kết luận</h2>
        <p>Sự đồng thuận chỉ có thể đạt được thông qua đối thoại cởi mở và sự lắng nghe từ nhiều phía.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["y-kien"],
        "publishedAt": "2026-10-16 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-45",
        "title": "Phát triển bền vững: Bài toán khó nhưng bắt buộc phải giải",
        "slug": "bai-viet-45",
        "image": "./img/anh89.jpg",
        "excerpt": "Phát triển bền vững: Bài toán khó nhưng bắt buộc phải giải. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Phát triển bền vững: Bài toán khó nhưng bắt buộc phải giải</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Những quan điểm trái chiều xoay quanh vấn đề này cho thấy sự đa dạng trong cách nhìn nhận và giải quyết bài toán xã hội.</p>
        <img src="./img/anh90.jpg" alt="Phát triển bền vững: Bài toán khó nhưng bắt buộc phải giải" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Góc nhìn phản biện là liều thuốc cần thiết để thúc đẩy sự tiến bộ của xã hội."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Sự đồng thuận chỉ có thể đạt được thông qua đối thoại cởi mở và sự lắng nghe từ nhiều phía.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["y-kien"],
        "publishedAt": "2026-10-17 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-46",
        "title": "Lá thư gửi con trai chuẩn bị bước vào ngưỡng cửa đại học",
        "slug": "bai-viet-46",
        "image": "./img/anh91.jpg",
        "excerpt": "Lá thư gửi con trai chuẩn bị bước vào ngưỡng cửa đại học. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh92.jpg" alt="Lá thư gửi con trai chuẩn bị bước vào ngưỡng cửa đại học" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Lá thư gửi con trai chuẩn bị bước vào ngưỡng cửa đại học</h2>
        <p>Vấn đề <strong>Lá thư gửi con trai chuẩn bị bước vào ngưỡng cửa đại học</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Giữa bộn bề lo toan của cuộc sống hiện đại, những phút giây lắng đọng và chia sẻ cảm xúc trở nên quý giá hơn bao giờ hết.</li>
            <li><strong>Khía cạnh xã hội:</strong> Mỗi câu chuyện là một mảnh ghép đa sắc, phản ánh chân thực những hỉ nộ ái ố của kiếp nhân sinh.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Hãy luôn giữ một trái tim ấm áp và một tinh thần bao dung để đối diện với nghịch cảnh."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["tam-su"],
        "publishedAt": "2026-10-18 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-47",
        "title": "Vượt qua cú sốc tâm lý sau khi hôn nhân đổ vỡ",
        "slug": "bai-viet-47",
        "image": "./img/anh93.jpg",
        "excerpt": "Vượt qua cú sốc tâm lý sau khi hôn nhân đổ vỡ. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Vượt qua cú sốc tâm lý sau khi hôn nhân đổ vỡ</p>
        <p>Giữa bộn bề lo toan của cuộc sống hiện đại, những phút giây lắng đọng và chia sẻ cảm xúc trở nên quý giá hơn bao giờ hết.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh94.jpg" alt="Vượt qua cú sốc tâm lý sau khi hôn nhân đổ vỡ" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Mỗi câu chuyện là một mảnh ghép đa sắc, phản ánh chân thực những hỉ nộ ái ố của kiếp nhân sinh.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Hãy luôn giữ một trái tim ấm áp và một tinh thần bao dung để đối diện với nghịch cảnh."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["tam-su"],
        "publishedAt": "2026-10-19 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-48",
        "title": "Những trăn trở của thế hệ trẻ giữa vòng xoáy cơm áo gạo tiền",
        "slug": "bai-viet-48",
        "image": "./img/anh95.jpg",
        "excerpt": "Những trăn trở của thế hệ trẻ giữa vòng xoáy cơm áo gạo tiền. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Những trăn trở của thế hệ trẻ giữa vòng xoáy cơm áo gạo tiền</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh96.jpg" alt="Những trăn trở của thế hệ trẻ giữa vòng xoáy cơm áo gạo tiền" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Giữa bộn bề lo toan của cuộc sống hiện đại, những phút giây lắng đọng và chia sẻ cảm xúc trở nên quý giá hơn bao giờ hết.</p>
        <blockquote>"Hãy luôn giữ một trái tim ấm áp và một tinh thần bao dung để đối diện với nghịch cảnh."</blockquote>
        <h2>Kết luận</h2>
        <p>Mỗi câu chuyện là một mảnh ghép đa sắc, phản ánh chân thực những hỉ nộ ái ố của kiếp nhân sinh.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["tam-su"],
        "publishedAt": "2026-10-20 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-49",
        "title": "Top 5 bộ phim hài hước giúp bạn xả stress cuối tuần",
        "slug": "bai-viet-49",
        "image": "./img/anh97.jpg",
        "excerpt": "Top 5 bộ phim hài hước giúp bạn xả stress cuối tuần. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Top 5 bộ phim hài hước giúp bạn xả stress cuối tuần</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Giải trí nhẹ nhàng không chỉ giúp tái tạo năng lượng mà còn là cách để cân bằng lại nhịp sống hối hả thường ngày.</p>
        <img src="./img/anh98.jpg" alt="Top 5 bộ phim hài hước giúp bạn xả stress cuối tuần" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Một nụ cười bằng mười thang thuốc bổ, hãy dành thời gian để chăm sóc đời sống tinh thần của chính mình."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Từ những thước phim hài hước đến các tựa game thú vị, tất cả đều mang lại những tiếng cười sảng khoái cho người trải nghiệm.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["thu-gian"],
        "publishedAt": "2026-10-21 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-50",
        "title": "Những câu chuyện cười ra nước mắt chốn công sở",
        "slug": "bai-viet-50",
        "image": "./img/anh99.jpg",
        "excerpt": "Những câu chuyện cười ra nước mắt chốn công sở. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh100.jpg" alt="Những câu chuyện cười ra nước mắt chốn công sở" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Những câu chuyện cười ra nước mắt chốn công sở</h2>
        <p>Vấn đề <strong>Những câu chuyện cười ra nước mắt chốn công sở</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Giải trí nhẹ nhàng không chỉ giúp tái tạo năng lượng mà còn là cách để cân bằng lại nhịp sống hối hả thường ngày.</li>
            <li><strong>Khía cạnh xã hội:</strong> Từ những thước phim hài hước đến các tựa game thú vị, tất cả đều mang lại những tiếng cười sảng khoái cho người trải nghiệm.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Một nụ cười bằng mười thang thuốc bổ, hãy dành thời gian để chăm sóc đời sống tinh thần của chính mình."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["thu-gian"],
        "publishedAt": "2026-10-22 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-51",
        "title": "Gợi ý những tựa game giải trí nhẹ nhàng cho người bận rộn",
        "slug": "bai-viet-51",
        "image": "./img/anh101.jpg",
        "excerpt": "Gợi ý những tựa game giải trí nhẹ nhàng cho người bận rộn. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Gợi ý những tựa game giải trí nhẹ nhàng cho người bận rộn</p>
        <p>Giải trí nhẹ nhàng không chỉ giúp tái tạo năng lượng mà còn là cách để cân bằng lại nhịp sống hối hả thường ngày.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh102.jpg" alt="Gợi ý những tựa game giải trí nhẹ nhàng cho người bận rộn" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Từ những thước phim hài hước đến các tựa game thú vị, tất cả đều mang lại những tiếng cười sảng khoái cho người trải nghiệm.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Một nụ cười bằng mười thang thuốc bổ, hãy dành thời gian để chăm sóc đời sống tinh thần của chính mình."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["thu-gian"],
        "publishedAt": "2026-10-23 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-52",
        "title": "Nỗ lực bảo tồn không gian văn hóa cồng chiêng Tây Nguyên",
        "slug": "bai-viet-52",
        "image": "./img/anh103.jpg",
        "excerpt": "Nỗ lực bảo tồn không gian văn hóa cồng chiêng Tây Nguyên. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Nỗ lực bảo tồn không gian văn hóa cồng chiêng Tây Nguyên</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh104.jpg" alt="Nỗ lực bảo tồn không gian văn hóa cồng chiêng Tây Nguyên" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Việc bảo tồn và phát huy các giá trị di sản văn hóa phi vật thể đang được các cấp chính quyền đặc biệt quan tâm.</p>
        <blockquote>"Văn hóa là cội nguồn của dân tộc, mất văn hóa là mất tất cả."</blockquote>
        <h2>Kết luận</h2>
        <p>Sự giao thoa văn hóa trong thời kỳ hội nhập mang lại những luồng gió mới, làm phong phú thêm đời sống tinh thần của người dân.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["van-hoa"],
        "publishedAt": "2026-10-24 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-53",
        "title": "Sự trở lại ấn tượng của các loại hình nghệ thuật truyền thống",
        "slug": "bai-viet-53",
        "image": "./img/anh105.jpg",
        "excerpt": "Sự trở lại ấn tượng của các loại hình nghệ thuật truyền thống. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Sự trở lại ấn tượng của các loại hình nghệ thuật truyền thống</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Việc bảo tồn và phát huy các giá trị di sản văn hóa phi vật thể đang được các cấp chính quyền đặc biệt quan tâm.</p>
        <img src="./img/anh106.jpg" alt="Sự trở lại ấn tượng của các loại hình nghệ thuật truyền thống" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Văn hóa là cội nguồn của dân tộc, mất văn hóa là mất tất cả."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Sự giao thoa văn hóa trong thời kỳ hội nhập mang lại những luồng gió mới, làm phong phú thêm đời sống tinh thần của người dân.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["van-hoa"],
        "publishedAt": "2026-10-25 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-54",
        "title": "Triển lãm mỹ thuật đương đại thu hút đông đảo giới trẻ",
        "slug": "bai-viet-54",
        "image": "./img/anh107.jpg",
        "excerpt": "Triển lãm mỹ thuật đương đại thu hút đông đảo giới trẻ. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh108.jpg" alt="Triển lãm mỹ thuật đương đại thu hút đông đảo giới trẻ" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Triển lãm mỹ thuật đương đại thu hút đông đảo giới trẻ</h2>
        <p>Vấn đề <strong>Triển lãm mỹ thuật đương đại thu hút đông đảo giới trẻ</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Việc bảo tồn và phát huy các giá trị di sản văn hóa phi vật thể đang được các cấp chính quyền đặc biệt quan tâm.</li>
            <li><strong>Khía cạnh xã hội:</strong> Sự giao thoa văn hóa trong thời kỳ hội nhập mang lại những luồng gió mới, làm phong phú thêm đời sống tinh thần của người dân.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Văn hóa là cội nguồn của dân tộc, mất văn hóa là mất tất cả."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["van-hoa"],
        "publishedAt": "2026-10-26 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-55",
        "title": "Quán cơm 0 đồng ấm lòng người lao động nghèo giữa Thủ đô",
        "slug": "bai-viet-55",
        "image": "./img/anh109.jpg",
        "excerpt": "Quán cơm 0 đồng ấm lòng người lao động nghèo giữa Thủ đô. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Quán cơm 0 đồng ấm lòng người lao động nghèo giữa Thủ đô</p>
        <p>Những vòng tay sẻ chia từ cộng đồng đã giúp đỡ hàng ngàn mảnh đời bất hạnh vượt qua khó khăn, bệnh tật.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh110.jpg" alt="Quán cơm 0 đồng ấm lòng người lao động nghèo giữa Thủ đô" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Phong trào thiện nguyện đang ngày càng lan tỏa rộng rãi, minh chứng cho truyền thống 'lá lành đùm lá rách' tốt đẹp của dân tộc.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Lòng nhân ái là thứ ngôn ngữ mà người mù có thể thấy và người điếc có thể nghe."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["nhan-ai"],
        "publishedAt": "2026-10-27 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-56",
        "title": "Hành trình mang ánh sáng đến cho trẻ em vùng cao",
        "slug": "bai-viet-56",
        "image": "./img/anh111.jpg",
        "excerpt": "Hành trình mang ánh sáng đến cho trẻ em vùng cao. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Hành trình mang ánh sáng đến cho trẻ em vùng cao</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh112.jpg" alt="Hành trình mang ánh sáng đến cho trẻ em vùng cao" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Những vòng tay sẻ chia từ cộng đồng đã giúp đỡ hàng ngàn mảnh đời bất hạnh vượt qua khó khăn, bệnh tật.</p>
        <blockquote>"Lòng nhân ái là thứ ngôn ngữ mà người mù có thể thấy và người điếc có thể nghe."</blockquote>
        <h2>Kết luận</h2>
        <p>Phong trào thiện nguyện đang ngày càng lan tỏa rộng rãi, minh chứng cho truyền thống 'lá lành đùm lá rách' tốt đẹp của dân tộc.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["nhan-ai"],
        "publishedAt": "2026-10-28 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-57",
        "title": "Gây quỹ ủng hộ đồng bào miền Trung bị ảnh hưởng bởi bão lụt",
        "slug": "bai-viet-57",
        "image": "./img/anh113.jpg",
        "excerpt": "Gây quỹ ủng hộ đồng bào miền Trung bị ảnh hưởng bởi bão lụt. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>[ĐIỂM TIN]</strong> Sự kiện <strong>Gây quỹ ủng hộ đồng bào miền Trung bị ảnh hưởng bởi bão lụt</strong> vừa được công bố đã lập tức thu hút sự quan tâm của hàng triệu độc giả. Đây được xem là một trong những điểm nhấn đáng chú ý nhất trong thời gian gần đây.</p>
        <h2>1. Phân tích bối cảnh thực tế</h2>
        <p>Những vòng tay sẻ chia từ cộng đồng đã giúp đỡ hàng ngàn mảnh đời bất hạnh vượt qua khó khăn, bệnh tật.</p>
        <img src="./img/anh114.jpg" alt="Gây quỹ ủng hộ đồng bào miền Trung bị ảnh hưởng bởi bão lụt" style="width:100%; border-radius:8px; margin: 15px 0;">
        <blockquote>"Lòng nhân ái là thứ ngôn ngữ mà người mù có thể thấy và người điếc có thể nghe."</blockquote>
        <h2>2. Tác động và xu hướng tiếp theo</h2>
        <p>Đi sâu vào chi tiết của vấn đề, các nhà phân tích chỉ ra rằng sự việc này mang lại cả cơ hội lẫn thách thức.</p>
        <p>Phong trào thiện nguyện đang ngày càng lan tỏa rộng rãi, minh chứng cho truyền thống 'lá lành đùm lá rách' tốt đẹp của dân tộc.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["nhan-ai"],
        "publishedAt": "2026-10-01 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-58",
        "title": "Nhu cầu tuyển dụng nhân sự IT tăng vọt trong quý 4",
        "slug": "bai-viet-58",
        "image": "./img/anh115.jpg",
        "excerpt": "Nhu cầu tuyển dụng nhân sự IT tăng vọt trong quý 4. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<img src="./img/anh116.jpg" alt="Nhu cầu tuyển dụng nhân sự IT tăng vọt trong quý 4" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <h2>Góc nhìn chuyên sâu: Nhu cầu tuyển dụng nhân sự IT tăng vọt trong quý 4</h2>
        <p>Vấn đề <strong>Nhu cầu tuyển dụng nhân sự IT tăng vọt trong quý 4</strong> đang gây ra những luồng tranh luận đa chiều trên khắp các mặt báo. Chúng tôi đã tổng hợp những góc nhìn đa dạng nhất để cung cấp cho độc giả một bức tranh toàn cảnh.</p>
        <ul>
            <li><strong>Điểm đáng chú ý:</strong> Thị trường lao động đang có sự dịch chuyển kỹ năng, đòi hỏi ứng viên phải liên tục cập nhật kiến thức để không bị đào thải.</li>
            <li><strong>Khía cạnh xã hội:</strong> Các doanh nghiệp cũng đang thay đổi chiến lược thu hút nhân tài, chú trọng hơn vào môi trường làm việc và lộ trình thăng tiến rõ ràng.</li>
        </ul>
        <h3>Chuyên gia nhận định</h3>
        <blockquote>"Nhân sự là tài sản quý giá nhất của mọi tổ chức, sự phát triển của công ty luôn đồng hành cùng sự phát triển của cá nhân."</blockquote>
        <p>Trong tương lai, chúng ta cần theo sát diễn biến này để có những bước đi phù hợp.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["tuyen-dung"],
        "publishedAt": "2026-10-02 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-59",
        "title": "Bí quyết chinh phục nhà tuyển dụng ngay từ vòng phỏng vấn",
        "slug": "bai-viet-59",
        "image": "./img/anh117.jpg",
        "excerpt": "Bí quyết chinh phục nhà tuyển dụng ngay từ vòng phỏng vấn. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p style="font-size: 1.1em; font-weight: bold; color: #2c3e50;">Tin nóng: Bí quyết chinh phục nhà tuyển dụng ngay từ vòng phỏng vấn</p>
        <p>Thị trường lao động đang có sự dịch chuyển kỹ năng, đòi hỏi ứng viên phải liên tục cập nhật kiến thức để không bị đào thải.</p>
        <h3>Nhìn nhận từ giới chuyên môn</h3>
        <p>Nhiều số liệu cho thấy sự dịch chuyển đáng kể trong cách thức tiếp cận vấn đề của cộng đồng. Nếu xu hướng này tiếp tục, sẽ tạo ra hiệu ứng domino trên diện rộng.</p>
        <img src="./img/anh118.jpg" alt="Bí quyết chinh phục nhà tuyển dụng ngay từ vòng phỏng vấn" style="width:100%; border-radius:8px; margin: 15px 0; border: 2px solid #eee;">
        <p>Các doanh nghiệp cũng đang thay đổi chiến lược thu hút nhân tài, chú trọng hơn vào môi trường làm việc và lộ trình thăng tiến rõ ràng.</p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e53e3e; margin-top: 20px;">
            <em>"Nhân sự là tài sản quý giá nhất của mọi tổ chức, sự phát triển của công ty luôn đồng hành cùng sự phát triển của cá nhân."</em>
        </div>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["tuyen-dung"],
        "publishedAt": "2026-10-03 09:00",
        "source": "news.vn"
    },
    {
        "id": "art-60",
        "title": "Thực trạng chảy máu chất xám tại các doanh nghiệp vừa và nhỏ",
        "slug": "bai-viet-60",
        "image": "./img/anh119.jpg",
        "excerpt": "Thực trạng chảy máu chất xám tại các doanh nghiệp vừa và nhỏ. Khám phá ngay các thông tin độc quyền, bình luận chuyên sâu và những con số biết nói xung quanh chủ đề này.",
        "content": `<p><strong>BÀI PHÂN TÍCH: Thực trạng chảy máu chất xám tại các doanh nghiệp vừa và nhỏ</strong></p>
        <h2>Diễn biến nổi bật</h2>
        <img src="./img/anh120.jpg" alt="Thực trạng chảy máu chất xám tại các doanh nghiệp vừa và nhỏ" style="width:100%; border-radius:8px; margin: 15px 0;">
        <p>Ngay sau khi thông tin được phát đi, hàng loạt động thái mới đã được các bên liên quan thực hiện nhằm thích ứng với tình hình mới.</p>
        <h2>Tại sao vấn đề này quan trọng?</h2>
        <p>Thị trường lao động đang có sự dịch chuyển kỹ năng, đòi hỏi ứng viên phải liên tục cập nhật kiến thức để không bị đào thải.</p>
        <blockquote>"Nhân sự là tài sản quý giá nhất của mọi tổ chức, sự phát triển của công ty luôn đồng hành cùng sự phát triển của cá nhân."</blockquote>
        <h2>Kết luận</h2>
        <p>Các doanh nghiệp cũng đang thay đổi chiến lược thu hút nhân tài, chú trọng hơn vào môi trường làm việc và lộ trình thăng tiến rõ ràng.</p>
        <p>Bản tin sẽ tiếp tục cập nhật những thông tin mới nhất liên quan đến chủ đề này.</p>`,
        "author": { "name": "Phóng viên NEWS" },
        "category": ["tuyen-dung"],
        "publishedAt": "2026-10-04 09:00",
        "source": "news.vn"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initData();
    renderNavbarAndMegaMenu();
    checkLoginState();
    startClock();
    navigateTo('home');
});

function initData() {
    localStorage.setItem('menuData', JSON.stringify({ menu: categoriesData }));
    
    localStorage.setItem('articlesData', JSON.stringify(initialArticles));
}

function navigateTo(viewId, param = null) {
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('detail-view').classList.add('hidden');
    document.getElementById('crawler-view').classList.add('hidden');
    
    try {
        if(viewId !== 'home') window.history.pushState({}, '', `?view=${viewId}${param ? '&id='+param : ''}`);
        else window.history.pushState({}, '', `?`);
    } catch(e) {} 

    if (viewId === 'home') {
        document.getElementById('home-view').classList.remove('hidden');
        renderArticles();
    } else if (viewId === 'detail') {
        document.getElementById('detail-view').classList.remove('hidden');
        renderArticleDetail(param);
        window.scrollTo(0, 0);
    } else if (viewId === 'crawler') {
        document.getElementById('crawler-view').classList.remove('hidden');
    }
}

function filterCategory(catId) {
    navigateTo('home');
    renderArticles(catId);
    document.getElementById('mega-menu').classList.add('hidden');
}

window.toggleMegaMenu = function() {
    const menu = document.getElementById('mega-menu');
    menu.classList.toggle('hidden');
};

function renderNavbarAndMegaMenu() {
    const menuList = categoriesData;
    const navList = document.getElementById('nav-list');
    const megaList = document.getElementById('mega-menu-list');
    const footerUl = document.getElementById('footer-categories');
    
    navList.innerHTML = `<li><a href="#" onclick="navigateTo('home'); return false;">Trang chủ</a></li>`;
    megaList.innerHTML = ''; footerUl.innerHTML = '';

    menuList.forEach((item, index) => {
        if(index < 8) navList.innerHTML += `<li><a href="#" onclick="filterCategory('${item.id}'); return false;">${item.title}</a></li>`;
        megaList.innerHTML += `<li><a href="#" onclick="filterCategory('${item.id}'); return false;">${item.title}</a></li>`;
        if(index < 5) footerUl.innerHTML += `<li><a href="#" onclick="filterCategory('${item.id}'); return false;">${item.title}</a></li>`;
    });
}

let currentFilter = { category: null, keyword: null, showAll: false };

window.loadAllArticles = function() {
    currentFilter.showAll = true;
    renderArticles(currentFilter.category, currentFilter.keyword);
    document.getElementById('btn-show-all').style.display = 'none';
};

function renderArticles(categoryFilter = null, keyword = null) {
    const articlesData = JSON.parse(localStorage.getItem('articlesData')) || [];
    currentFilter.category = categoryFilter;
    currentFilter.keyword = keyword;

    let filtered = articlesData;
    let titleText = "Tin tức mới nhất";

    if (categoryFilter) {
        filtered = filtered.filter(a => a.category.includes(categoryFilter));
        const catName = categoriesData.find(c => c.id === categoryFilter)?.title;
        titleText = `Chuyên mục: ${catName}`;
        currentFilter.showAll = true; 
    }
    
    if (keyword) {
        filtered = filtered.filter(a => a.title.toLowerCase().includes(keyword.toLowerCase()) || a.excerpt.toLowerCase().includes(keyword.toLowerCase()));
        titleText = `Kết quả tìm kiếm cho: "${keyword}"`;
        currentFilter.showAll = true;
    }

    document.getElementById('category-title').innerText = titleText;
    document.getElementById('article-count').innerText = `Có ${filtered.length} bài viết.`;
    
    filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    const topSection = document.getElementById('top-section');
    const listSection = document.getElementById('list-section');
    topSection.innerHTML = ''; listSection.innerHTML = '';
    document.getElementById('other-title').style.display = 'block';

    if (filtered.length === 0) {
        topSection.innerHTML = "<p>Không có bài viết nào phù hợp.</p>";
        document.getElementById('other-title').style.display = 'none';
        return;
    }

    let displayLimit = (currentFilter.showAll) ? filtered.length : 8;
    let displayData = filtered.slice(0, displayLimit);
    
    if(!currentFilter.showAll && filtered.length > 8) {
        document.getElementById('btn-show-all').style.display = 'block';
    } else {
        document.getElementById('btn-show-all').style.display = 'none';
    }

    const top3 = displayData.slice(0, 3);
    if(top3.length > 0) {
        let catName = categoriesData.find(c => c.id === top3[0].category[0])?.title || "Tin tức";
        let topHTML = `
            <article class="featured-post" onclick="navigateTo('detail', '${top3[0].id}')">
                <span class="tag-badge">${catName}</span>
                <img src="${top3[0].image}" alt="Thumb" onerror="this.src='https://via.placeholder.com/800x450?text=Ảnh+Lỗi'">
                <div class="overlay-content">
                    <h3>${top3[0].title}</h3>
                    <p>${top3[0].excerpt}</p>
                    <div class="meta-info">
                        <span>${top3[0].author.name}</span>
                        <span>${top3[0].publishedAt}</span>
                    </div>
                </div>
            </article>
        `;
        if (top3.length > 1) {
            topHTML += `<div class="side-posts">`;
            for (let i = 1; i < top3.length; i++) {
                let sCat = categoriesData.find(c => c.id === top3[i].category[0])?.title || "Tin tức";
                topHTML += `
                    <article class="small-post" onclick="navigateTo('detail', '${top3[i].id}')">
                        <img src="${top3[i].image}" alt="Thumb" onerror="this.src='https://via.placeholder.com/400x300?text=Ảnh+Lỗi'">
                        <div class="small-post-text">
                            <span class="text-tag">${sCat}</span>
                            <h4>${top3[i].title}</h4>
                            <p>${top3[i].excerpt}</p>
                            <div class="meta-info" style="color:#888; margin-top:10px;">${top3[i].publishedAt}</div>
                        </div>
                    </article>`;
            }
            topHTML += `</div>`;
        }
        topSection.innerHTML = topHTML;
    }

    const restData = displayData.slice(3);
    if(restData.length === 0) document.getElementById('other-title').style.display = 'none';
    
    restData.forEach(post => {
        let catText = categoriesData.find(c => c.id === post.category[0])?.title || "Tin tức";
        listSection.innerHTML += `
            <article class="list-item-vertical" onclick="navigateTo('detail', '${post.id}')">
                <img src="${post.image}" alt="Thumb" onerror="this.src='https://via.placeholder.com/400x300?text=Ảnh+Lỗi'">
                <div class="list-item-vertical-text">
                    <span class="text-tag">${catText}</span>
                    <h4>${post.title}</h4>
                    <p>${post.excerpt}</p>
                    <div class="meta-info" style="color:#888;">${post.author.name} - ${post.publishedAt}</div>
                </div>
            </article>`;
    });
}

function renderArticleDetail(id) {
    const articlesData = JSON.parse(localStorage.getItem('articlesData')) || [];
    const article = articlesData.find(a => a.id === id);
    const detailContainer = document.getElementById('detail-view');

    if (article) {
        detailContainer.innerHTML = `
            <h1 class="detail-title">${article.title}</h1>
            <p class="detail-meta">Tác giả: <strong>${article.author.name}</strong> | Ngày đăng: ${article.publishedAt}</p>
            <img class="detail-img" src="${article.image}" onerror="this.src='https://via.placeholder.com/1200x600?text=Ảnh+Lỗi'">
            <div class="detail-content">
                ${article.content}
            </div>
        `;
    } else {
        detailContainer.innerHTML = "<h2>Không tìm thấy bài viết!</h2>";
    }
}

window.handleSearch = function(event) {
    if(event.key === 'Enter') executeSearch();
};
window.executeSearch = function() {
    const keyword = document.getElementById('search-input').value.trim();
    if(keyword) {
        navigateTo('home');
        renderArticles(null, keyword);
    }
};

window.openModal = function(id) { document.getElementById(id).classList.remove('hidden'); };
window.closeModal = function(id) { document.getElementById(id).classList.add('hidden'); };

window.register = function() {
    const user = document.getElementById('reg-user').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();
    if(!user || !pass) return showToast('Vui lòng nhập đủ thông tin', 'error');
    
    let users = JSON.parse(localStorage.getItem('usersData')) || [];
    if(users.find(u => u.user === user)) return showToast('Tên đăng nhập đã tồn tại', 'error');
    
    users.push({user, pass});
    localStorage.setItem('usersData', JSON.stringify(users));
    showToast('Đăng ký thành công! Hãy đăng nhập.', 'success');
    closeModal('register-modal');
};

window.login = function() {
    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value.trim();
    let users = JSON.parse(localStorage.getItem('usersData')) || [];
    
    if(users.find(u => u.user === user && u.pass === pass)) {
        localStorage.setItem('currentUser', user);
        showToast('Đăng nhập thành công', 'success');
        closeModal('login-modal');
        checkLoginState();
    } else {
        showToast('Sai tài khoản hoặc mật khẩu', 'error');
    }
};

window.logout = function() {
    localStorage.removeItem('currentUser');
    showToast('Đã đăng xuất', 'info');
    checkLoginState();
};

function checkLoginState() {
    const currentUser = localStorage.getItem('currentUser');
    const authBox = document.getElementById('auth-buttons');
    if(currentUser) {
        authBox.innerHTML = `
            <button onclick="navigateTo('crawler')" class="btn-text">⚙ Crawler</button>
            <span style="font-weight: bold; color: #111;">👋 Chào, ${currentUser}</span>
            <button onclick="logout()" class="btn-solid" style="background:#e53e3e;">Đăng xuất</button>
        `;
    } else {
        authBox.innerHTML = `
            <button onclick="navigateTo('crawler')" class="btn-text">⚙ Crawler</button>
            <button onclick="openModal('login-modal')" class="btn-text">👤 Đăng nhập</button>
            <button onclick="openModal('register-modal')" class="btn-solid">Đăng ký</button>
        `;
    }
}

function showToast(message, type="info") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span> <button style="background:none;border:none;color:white;cursor:pointer;font-size:16px;" onclick="this.parentElement.remove()">✕</button>`;
    container.appendChild(toast);
    setTimeout(() => { if(toast.parentElement) toast.remove(); }, 3000);
}

window.executeCrawler = function() {
    const urlInput = document.getElementById('crawler-url').value;
    const resultBox = document.getElementById('crawler-result');
    if (!urlInput) return showToast('Vui lòng nhập link bài viết!', 'error');

    try {
        const urlObj = new URL(urlInput);
        const slug = urlObj.pathname.split('/').pop().replace('.htm', '');
        const id = "dtri-" + Date.now();

        const crawledData = {
            "id": id,
            "title": "Bài viết vừa được cào từ: " + slug,
            "slug": slug,
            "image": "./img/anh121.jpg",
            "excerpt": "Tóm tắt bài viết tự động. Do đã tắt Proxy vượt CORS nên nội dung này là giả lập...",
            "content": "<p>Nội dung bài viết giả lập bóc tách từ HTML do trình duyệt chặn lấy dữ liệu từ domain khác (lỗi CORS).</p><img src='./img/anh122.jpg' style='width:100%; border-radius:8px; margin: 20px 0;'>",
            "author": { "name": "Hệ Thống Crawler" },
            "category": ["thoi-su"], 
            "publishedAt": new Date().toISOString().slice(0, 16).replace('T', ' '),
            "source": "dantri.com.vn",
            "url": urlInput
        };

        resultBox.style.display = 'block';
        resultBox.textContent = JSON.stringify(crawledData, null, 4); 

        let articlesData = JSON.parse(localStorage.getItem('articlesData')) || [];
        articlesData.unshift(crawledData); 
        localStorage.setItem('articlesData', JSON.stringify(articlesData));

        showToast("Thu thập dữ liệu mô phỏng thành công!", "success");
        document.getElementById('crawler-url').value = '';

    } catch (error) {
        showToast("Lỗi URL không hợp lệ: " + error.message, "error");
        resultBox.textContent = "Không thể lấy dữ liệu: " + error.message;
    }
};

function startClock() {
    setInterval(() => {
        const now = new Date();
        const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
        document.getElementById('real-time-clock').innerText = `${days[now.getDay()]}, ${now.toLocaleDateString('vi-VN')} ${now.toLocaleTimeString('vi-VN')}`;
    }, 1000);
}
