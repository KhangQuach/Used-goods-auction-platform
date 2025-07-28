# 📦 Dự án Quản Lý Đấu Giá Đồ Cũ

> Nền tảng đấu giá trực tuyến cho các sản phẩm đã qua sử dụng, minh bạch – tiện lợi – thân thiện.

---

## 🛠️ Công nghệ sử dụng

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/) – UI Kit cho Tailwind
- TypeScript, React, App Router (layout/page/client)

---

## 🧩 Tính năng chính

### 👤 Người mua
- Đăng nhập / Đăng ký
- Tìm kiếm & xem sản phẩm
- Đặt giá trong phiên đấu giá
- Theo dõi đơn hàng đã thắng
- Trò chuyện với người bán
- Quản lý thông tin tài khoản

### 🧑‍💼 Người bán
- Đăng sản phẩm lên đấu giá
- Quản lý phiên đấu giá
- Thống kê người mua & sản phẩm

### 🛡️ Quản trị viên
- Quản lý tài khoản người dùng
- Kiểm duyệt / Xóa phiên đấu giá
- Thêm danh mục sản phẩm
- Cập nhật hệ thống & sao lưu dữ liệu

---

## 📂 Cấu trúc thư mục

```
/app
  /(auth)              → Giao diện đăng nhập / đăng ký
  /(dashboard)         → Buyer, Seller, Admin
    /buyer
      page.tsx         → Trang tổng quan người mua
      /orders
      /chat
      /account
  /products
    page.tsx           → Trang tìm kiếm sản phẩm
    [id]/page.tsx      → Trang chi tiết sản phẩm

/components
  Navbar.tsx           → Thanh điều hướng toàn trang
  ...
```

---

## 🚀 Cài đặt & chạy

```bash
# Cài dependency
npm install

# Chạy dev
npm run dev

# Mở trình duyệt
http://localhost:3000
```

---

## 🔐 Ghi chú phát triển

- Thư viện daisyUI được cấu hình sẵn trong `tailwind.config.js`
- Dữ liệu hiện tại là mock (fake). Bạn có thể thay bằng API thật sau.
- Trang sử dụng App Router: tách layout riêng cho `/auth` và `/dashboard`

---

## 📸 Demo

> Giao diện demo người mua:
- Dashboard: `/dashboard/buyer`
- Đơn hàng: `/dashboard/buyer/orders`
- Chat: `/dashboard/buyer/chat`
- Tìm kiếm: `/products`

---

## ✅ TODO (mở rộng sau)

- [ ] Kết nối backend thật (NestJS, Express, Firebase...)
- [ ] Realtime chat (Socket.IO / Pusher)
- [ ] Xác thực bảo mật (NextAuth / Clerk)
- [ ] API đấu giá theo thời gian thực

---

## 👨‍💻 Tác giả

- 💻 Frontend: Next.js + Tailwind + daisyUI
- 📅 Project by: Quach Thieu Khang