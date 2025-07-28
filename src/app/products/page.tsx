'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const mockProducts = [
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
  },
  {
    id: 'SP105',
    name: 'Laptop Dell XPS 13',
    image: 'https://th.bing.com/th/id/OIP.0jhL2o_M2IP5-M9DowQT5wHaFj?w=202&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 7400000,
    endsIn: '6 giờ',
  },
  {
    id: 'SP106',
    name: 'Giày thể thao Adidas Ultraboost',
    image: 'https://th.bing.com/th/id/OIP.zhi_rdU9KWZIUp82WelwKwHaFj?w=322&h=193&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 1200000,
    endsIn: '1 ngày 2 giờ',
  },
  {
    id: 'SP107',
    name: 'Bàn làm việc gỗ sồi 1m2',
    image: 'https://th.bing.com/th/id/OIP.T39OLlEQEBBbA7f3a8KMPwHaE_?w=284&h=191&c=7&r=0&o=5&pid=1.7',
    price: 850000,
    endsIn: '12 giờ 30 phút',
  },
  {
    id: 'SP108',
    name: 'Tivi Samsung 43 inch Smart TV',
    image: 'https://th.bing.com/th/id/OIP.sbwtokMrM8KFGUWP-JR7KwHaE8?w=259&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 3900000,
    endsIn: '5 giờ',
  },
  {
    id: 'SP109',
    name: 'Xe đạp thể thao Giant cũ',
    image: 'https://th.bing.com/th/id/OIP.dByWCBaScWGWDxjiGxFjQwHaE8?w=345&h=188&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 2100000,
    endsIn: '8 giờ 45 phút',
  },
  {
    id: 'SP110',
    name: 'Bộ ghế sofa mini cho phòng trọ',
    image: 'https://th.bing.com/th/id/OIP.wIqZARgZIf16rIIh0KlZPAHaEj?w=303&h=187&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 1850000,
    endsIn: '3 giờ 10 phút',
  },
]


export default function ProductsPage() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Gọi API tìm kiếm hoặc cập nhật URL query param
    alert(`Tìm: ${keyword}`)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold p-4">Danh sách sản phẩm đấu giá</h1>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          className="input input-bordered w-full"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Tìm
        </button>
      </form>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <figure>
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>Giá khởi điểm: {product.price.toLocaleString()}đ</p>
              <p>Hết hạn: {product.endsIn}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-outline btn-sm btn-primary"
                  onClick={() => router.push(`/products/${product.id}`)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
