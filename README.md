# 🚀 MyPortfolio - Professional Fullstack Showcase

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Inertia.js](https://img.shields.io/badge/Inertia-9553E9?style=for-the-badge&logo=inertia&logoColor=white)

> **"Code is poetry."** - Đây là website Portfolio cá nhân của tôi, nơi trưng bày các dự án và kỹ năng lập trình Fullstack. Hệ thống được xây dựng với kiến trúc hiện đại, tối ưu trải nghiệm người dùng (UX) và quản trị nội dung dễ dàng.

## ✨ Tính năng nổi bật (Highlights)

### 🎨 Frontend (Client Side)
- **Modern UI/UX:** Giao diện tối giản, sạch sẽ với hiệu ứng *Glassmorphism* và *Aurora Gradients*.
- **Interactive Animations:**
  - **Infinite Marquee:** Dải băng chuyền kỹ năng chạy vô tận.
  - **Eye Tracking 404:** Trang lỗi với hiệu ứng đôi mắt dõi theo con trỏ chuột.
  - **Wiggle Phone Button:** Nút gọi điện với hiệu ứng lắc lư thu hút.
  - **Scroll Reveal:** Nội dung hiện dần khi cuộn trang (AOS).
- **Contact Form:** Giao diện Split-Card hiện đại, tích hợp gửi mail thật qua SMTP.
- **Responsive:** Tối ưu hoàn hảo cho Mobile (Hamburger Menu) và Desktop.

### 🛠 Backend & Admin Panel
- **CMS mạnh mẽ:** Sử dụng **FilamentPHP** để quản lý:
  - Dự án (CRUD, Upload ảnh, Rich Text Editor).
  - Kỹ năng (Quản lý logo, tên công nghệ).
- **Auto Slug:** Tự động tạo đường dẫn thân thiện SEO từ tiêu đề dự án.
- **Bảo mật:** Xác thực 2 lớp, chống CSRF, XSS.

## ⚙️ Cài đặt & Chạy thử (Installation)

Nếu bạn muốn chạy thử source code này trên máy cá nhân:

```bash
# 1. Clone dự án
git clone [https://github.com/thaodeveloper1809/my-portfolio.git](https://github.com/thaodeveloper1809/my-portfolio.git)
cd my-portfolio

# 2. Cài đặt thư viện Backend
composer install

# 3. Cài đặt thư viện Frontend
npm install

# 4. Cấu hình môi trường
cp .env.example .env
# (Mở file .env và cấu hình DB_DATABASE, DB_USERNAME, DB_PASSWORD của bạn)

# 5. Tạo Key & Database
php artisan key:generate
php artisan migrate --seed

# 6. Tạo tài khoản Admin (Filament)
php artisan make:filament-user

# 7. Chạy dự án
npm run dev
php artisan serve

📬 Liên hệ
Tác giả: Nguyễn Tăng Thảo

Email: thaodeveloper1809@gmail.com

Facebook: [https://www.facebook.com/sunboy189/]
