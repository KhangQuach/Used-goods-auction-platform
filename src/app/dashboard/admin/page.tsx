'use client'

import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Bảng điều khiển quản trị viên 🛡️</h1>

      {/* Quick Admin Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer"
          onClick={() => router.push('/dashboard/admin/users')}
        >
          <div className="card-body">
            <h2 className="card-title">Quản lý người dùng</h2>
            <p>Xem, khoá/mở và xoá tài khoản người dùng.</p>
          </div>
        </div>

        <div
          className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer"
          onClick={() => router.push('/dashboard/admin/auctions')}
        >
          <div className="card-body">
            <h2 className="card-title">Phiên đấu giá</h2>
            <p>Duyệt, xoá và xử lý báo cáo phiên đấu giá.</p>
          </div>
        </div>

        <div
          className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer"
          onClick={() => router.push('/dashboard/admin/categories')}
        >
          <div className="card-body">
            <h2 className="card-title">Danh mục sản phẩm</h2>
            <p>Thêm, xoá hoặc sửa danh mục đấu giá.</p>
          </div>
        </div>

        <div
          className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer"
          onClick={() => router.push('/dashboard/admin/system')}
        >
          <div className="card-body">
            <h2 className="card-title">Hệ thống</h2>
            <p>Sao lưu dữ liệu, cập nhật phần mềm và xem lịch sử.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
