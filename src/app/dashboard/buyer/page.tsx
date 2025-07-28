'use client'

import { useRouter } from 'next/navigation'

const mockAuctions = [
  {
    id: '1',
    name: 'Laptop cũ Acer Aspire 5',
    image: 'https://th.bing.com/th/id/OIP.HNlBhGcqIx0QF8DOTJnNQAHaEK?w=323&h=181&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 3000000,
    endsIn: '1 ngày 2 giờ',
  },
  {
    id: '2',
    name: 'Điện thoại Samsung Note 9',
    image: 'https://th.bing.com/th/id/OIP.Uogq6yOpI9TSubsN-hkkdgHaEr?w=293&h=185&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 2500000,
    endsIn: '5 giờ 30 phút',
  },
  {
    id: '3',
    name: 'Ghế Gaming cũ',
    image: 'https://th.bing.com/th/id/OIP.viW4eW4uvv6nmoHcnPxiMwHaE7?w=279&h=186&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 800000,
    endsIn: '12 giờ',
  },
  {
    id: '4',
    name: 'Loa bluetooth JBL Flip 5',
    image: 'https://th.bing.com/th/id/OIP.ysWQ4Cx3q72-nKmf4_-iCQHaEY?w=313&h=185&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 1200000,
    endsIn: '3 giờ 20 phút',
  },
  {
    id: '5',
    name: 'Máy ảnh Canon EOS 60D',
    image: 'https://th.bing.com/th/id/OIP.b94svUWDAG2uvu7B8pi1AQHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 4500000,
    endsIn: '2 ngày',
  },
  {
    id: 'SP101',
    name: 'iPhone 11 Pro Max 256GB',
    image: 'https://th.bing.com/th/id/OIP.D65N7SAb8wBsrdSsXy48gwHaF-?w=231&h=185&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 5200000,
    endsIn: '1 giờ 30 phút',
  },
  {
    id: 'SP102',
    name: 'Máy ảnh Canon cũ EOS 600D',
    image: 'https://th.bing.com/th/id/OIP.HC7zsMMgeiTmrdlZlKbXjgHaFq?w=259&h=198&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 3400000,
    endsIn: '2 giờ',
  },
  {
    id: 'SP103',
    name: 'Đồng hồ Casio G-Shock',
    image: 'https://th.bing.com/th/id/OIP.ARNVqhD5g4lrlYfFBeHkbwHaEK?w=305&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 1500000,
    endsIn: '4 giờ',
  },
  {
    id: 'SP104',
    name: 'Tai nghe Sony WH-1000XM4',
    image: 'https://th.bing.com/th/id/OIP.7Np4bfBKYmHt8JD_oT-BvQHaFj?w=263&h=197&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 2700000,
    endsIn: '3 giờ 15 phút',
  }
]


export default function BuyerDashboard() {
  const router = useRouter()

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Trang chủ</h1>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="card bg-base-100 shadow-md hover:shadow-xl cursor-pointer transition"
          onClick={() => router.push('/dashboard/buyer/orders')}
        >
          <div className="card-body">
            <h2 className="card-title">Đơn hàng</h2>
            <p>Xem và theo dõi trạng thái đơn hàng bạn đã đấu giá thành công.</p>
          </div>
        </div>

        <div
          className="card bg-base-100 shadow-md hover:shadow-xl cursor-pointer transition"
          onClick={() => router.push('/dashboard/buyer/chat')}
        >
          <div className="card-body">
            <h2 className="card-title">Trò chuyện</h2>
            <p>Liên hệ trực tiếp với người bán để hỏi về sản phẩm.</p>
          </div>
        </div>

        <div
          className="card bg-base-100 shadow-md hover:shadow-xl cursor-pointer transition"
          onClick={() => router.push('/dashboard/buyer/account')}
        >
          <div className="card-body">
            <h2 className="card-title">Tài khoản</h2>
            <p>Chỉnh sửa thông tin cá nhân, đổi mật khẩu,...</p>
          </div>
        </div>
      </div>

      {/* Phiên đấu giá nổi bật */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Phiên đấu giá nổi bật 🔥</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAuctions.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-md hover:shadow-xl transition">
              <figure>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>Giá khởi điểm: {item.price.toLocaleString()}đ</p>
                <p>Hết hạn: {item.endsIn}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-outline btn-primary btn-sm"
                    onClick={() => router.push(`/products/${item.id}`)}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
