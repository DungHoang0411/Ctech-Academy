// Chờ cho toàn bộ nội dung trang web được tải xong rồi mới thực thi mã
document.addEventListener('DOMContentLoaded', function () {

    // ==================================================================
    // DỮ LIỆU TIN TỨC - BẠN CÓ THỂ CHỈNH SỬA Ở ĐÂY
    // ==================================================================
    const newsData = [
        {
            images: [
                'IMG_NEWS/BK.jpg',
                'IMG_NEWS/BK_2.jpg',
                'IMG_NEWS/BK_3.jpg'
            ],
            category: 'Sự Kiện',
            date: '25/08/2025',
            title: 'Khóa học fintech cùng với trường Đại học Bách Khoa Hà Nội',
            excerpt: ' BƯỚC VÀO THẾ GIỚI FINTECH CÙNG ĐẠI HỌC BÁCH KHOA HÀ NỘI Bạn muốn dẫn đầu xu hướng công nghệ tài chính?👉 Đừng bỏ lỡ Khóa học Fintech ngắn hạn tại CTECH Academy, giảng dạy bởi giảng viên Đại học Bách khoa Hà Nội!'
        },
        {
            images: [
                'IMG_NEWS/Blockchain.jpg',
                'IMG_NEWS/Blockchain_2.jpg',
                'IMG_NEWS/Blockchain_3.jpg'
            ],
            category: 'Học Thuật',
            date: '18/08/2025',
            title: 'Workshop "Xây dựng Ứng dụng Blockchain đầu tiên"',
            excerpt: 'Buổi workshop chuyên sâu cung cấp kiến thức nền tảng và kinh nghiệm thực chiến để sinh viên tự tin bước vào lĩnh vực công nghệ blockchain.'
        },
        {
            images: [
                'IMG_NEWS/Hutech_1.jpg',
                'IMG_NEWS/Hutech_2.jpg',
                'IMG_NEWS/Hutech_3.jpg'
            ],
            category: 'Hợp Tác Doanh Nghiệp',
            date: '12/08/2025',
            title: 'Giới thiệu khóa học Fintech cho các sinh viên tại sự kiện HUTECH SHOW',
            excerpt: 'Trong sự kiện HUTECH SHOW khóa học Fintech đã thu hút sự quan tâm từ các bạn sinh viên tại đây mở ra cơ hội tiếp cận với lĩnh vực công nghệ tài chình số.'
        }
    ];

    // ==================================================================
    // MÃ ĐỂ HIỂN THỊ TIN TỨC - BẠN KHÔNG CẦN CHỈNH SỬA PHẦN NÀY
    // ==================================================================
    const newsContainer = document.getElementById('news-container');

    if (newsContainer) {
        let allNewsHTML = '';
        newsData.forEach(article => {
            const imagesHTML = article.images.map(imgSrc => `
                <img src="${imgSrc}" alt="${article.title}" class="w-full h-45 object-cover">
            `).join('');

            const articleHTML = `
                <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 max-w-4xl mx-auto">
                    <div class="grid grid-cols-3 gap-1">
                        ${imagesHTML}
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-2">
                            <p class="text-sm font-semibold text-blue-600">${article.category}</p>
                            <p class="text-sm text-gray-500">${article.date}</p>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                            <a href="#">${article.title}</a>
                        </h3>
                        <p class="text-gray-600">${article.excerpt}</p>
                    </div>
                </div>
            `;
            allNewsHTML += articleHTML;
        });

        newsContainer.innerHTML = allNewsHTML;
    }
});