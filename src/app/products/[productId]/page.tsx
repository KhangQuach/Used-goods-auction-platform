'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const mockProducts = [
  {
    id: '1',
    name: 'Laptop cũ Acer Aspire 5',
    image: 'https://th.bing.com/th/id/OIP.HNlBhGcqIx0QF8DOTJnNQAHaEK?w=323&h=181&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 3000000,
    currentPrice: 3200000,
    endsIn: '1 ngày 2 giờ',
    description: 'Laptop cũ hiệu năng tốt, phù hợp làm việc, học tập và giải trí cơ bản.',
  },
  {
    id: '2',
    name: 'Điện thoại Samsung Note 9',
    image: 'https://th.bing.com/th/id/OIP.Uogq6yOpI9TSubsN-hkkdgHaEr?w=293&h=185&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 2500000,
    currentPrice: 2700000,
    endsIn: '5 giờ 30 phút',
    description: 'Điện thoại flagship một thời, vẫn hoạt động mượt, có bút S-Pen tiện lợi.',
  },
  {
    id: '3',
    name: 'Ghế Gaming cũ',
    image: 'https://th.bing.com/th/id/OIP.viW4eW4uvv6nmoHcnPxiMwHaE7?w=279&h=186&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 800000,
    currentPrice: 850000,
    endsIn: '12 giờ',
    description: 'Ghế gaming đã qua sử dụng, êm ái, màu đen đỏ, còn rất mới.',
  },
  {
    id: '4',
    name: 'Loa bluetooth JBL Flip 5',
    image: 'https://th.bing.com/th/id/OIP.ysWQ4Cx3q72-nKmf4_-iCQHaEY?w=313&h=185&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 1200000,
    currentPrice: 1250000,
    endsIn: '3 giờ 20 phút',
    description: 'Loa JBL chất âm mạnh mẽ, chống nước IPX7, pin 12 giờ.',
  },
  {
    id: '5',
    name: 'Máy ảnh Canon EOS 60D',
    image: 'https://th.bing.com/th/id/OIP.b94svUWDAG2uvu7B8pi1AQHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 4500000,
    currentPrice: 4550000,
    endsIn: '2 ngày',
    description: 'Máy ảnh DSLR bán chuyên, cảm biến APS-C, quay phim FullHD.',
  },
  {
    id: 'SP101',
    name: 'iPhone 11 Pro Max 256GB',
    image: 'https://th.bing.com/th/id/OIP.D65N7SAb8wBsrdSsXy48gwHaF-?w=231&h=185&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 5200000,
    currentPrice: 5500000,
    endsIn: '1 giờ 30 phút',
    description: 'iPhone quốc tế pin tốt, FaceID, màn OLED siêu nét.',
  },
  {
    id: 'SP102',
    name: 'Máy ảnh Canon cũ EOS 600D',
    image: 'https://th.bing.com/th/id/OIP.HC7zsMMgeiTmrdlZlKbXjgHaFq?w=259&h=198&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 3400000,
    currentPrice: 3550000,
    endsIn: '2 giờ',
    description: 'Máy ảnh phổ thông, dễ dùng cho người mới, chụp rõ nét.',
  },
  {
    id: 'SP103',
    name: 'Đồng hồ Casio G-Shock',
    image: 'https://th.bing.com/th/id/OIP.ARNVqhD5g4lrlYfFBeHkbwHaEK?w=305&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 1500000,
    currentPrice: 1520000,
    endsIn: '4 giờ',
    description: 'G-Shock chống sốc, chống nước, phong cách thể thao nam tính.',
  },
  {
    id: 'SP104',
    name: 'Tai nghe Sony WH-1000XM4',
    image: 'https://th.bing.com/th/id/OIP.7Np4bfBKYmHt8JD_oT-BvQHaFj?w=263&h=197&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 2700000,
    currentPrice: 2800000,
    endsIn: '3 giờ 15 phút',
    description: 'Tai nghe chống ồn hàng đầu, pin 30 giờ, cảm ứng thông minh.',
  },
  {
    id: 'SP105',
    name: 'Laptop Dell XPS 13',
    image: 'https://th.bing.com/th/id/OIP.0jhL2o_M2IP5-M9DowQT5wHaFj?w=202&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    startingPrice: 7400000,
    currentPrice: 7600000,
    endsIn: '6 giờ',
    description: 'Ultrabook mỏng nhẹ, viền siêu mỏng, hiệu năng mạnh.',
  }
]


export default function ProductDetailPage() {
  const { productId } = useParams()
  const router = useRouter()

  const product = mockProducts.find((p) => p.id === productId)
  const [bidPrice, setBidPrice] = useState('')

  const handleBid = () => {
    const value = parseInt(bidPrice)
    if (!value || value <= (product?.currentPrice ?? 0)) {
      alert('Giá đấu phải lớn hơn giá hiện tại!')
      return
    }
    alert(`✅ Bạn đã đặt giá ${value.toLocaleString()}đ cho sản phẩm "${product?.name}"`)
    // TODO: Gửi bid lên server tại đây
    setBidPrice('')
  }

  if (!product) {
    return <div className="p-6 text-error">❌ Sản phẩm không tồn tại!</div>
  }

  return (
    <div className="p-6 space-y-6">
      <button className="btn btn-sm btn-outline" onClick={() => router.back()}>← Quay lại</button>

      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="rounded-xl w-full max-h-[400px] object-contain bg-white" />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-500">Thời gian còn lại: <strong>{product.endsIn}</strong></p>

          <p className="text-lg">💰 <strong>Giá khởi điểm:</strong> {product.startingPrice.toLocaleString()}đ</p>
          <p className="text-lg">🔥 <strong>Giá hiện tại:</strong> {product.currentPrice.toLocaleString()}đ</p>

          <p className="text-sm mt-2">{product.description}</p>

          <div className="form-control w-full max-w-xs mt-4">
            <label className="label">Đặt giá của bạn</label>
            <input
              type="number"
              className="input input-bordered"
              placeholder="Nhập giá đấu (VNĐ)"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
            />
          </div>

          <button className="btn btn-primary mt-2" onClick={handleBid}>
            Đặt giá
          </button>
        </div>
      </div>
    </div>
  )
}
