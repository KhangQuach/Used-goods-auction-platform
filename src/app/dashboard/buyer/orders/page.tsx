'use client'

import { useState } from 'react'

const mockOrders = [
  {
    id: 'DH001',
    productName: 'Laptop cũ Acer Aspire',
    image: 'https://th.bing.com/th/id/OIP.HNlBhGcqIx0QF8DOTJnNQAHaEK?w=323&h=181&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 3100000,
    status: 'Đang giao',
    date: '2025-07-28',
  },
  {
    id: 'DH002',
    productName: 'Điện thoại Samsung Note 9',
    image: 'https://th.bing.com/th/id/OIP.Uogq6yOpI9TSubsN-hkkdgHaEr?w=293&h=185&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 2700000,
    status: 'Đã giao',
    date: '2025-07-26',
  },
  {
    id: 'DH003',
    productName: 'iPhone 11 Pro Max 256GB',
    image: 'https://th.bing.com/th/id/OIP.Uogq6yOpI9TSubsN-hkkdgHaEr?w=293&h=185&c=7&r=0&o=7&pid=1.7&rm=3',
    price: 5200000,
    status: 'Đã giao',
    date: '2025-07-26',
  },
]

export default function BuyerOrdersPage() {
  const [orders] = useState(mockOrders)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold p-4">Đơn hàng của bạn</h1>

      {orders.length === 0 ? (
        <div className="alert alert-info">Bạn chưa có đơn hàng nào.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order.id} className="card bg-base-100 shadow-md">
              <figure>
                <img src={order.image} alt={order.productName} className="h-full w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{order.productName}</h2>
                <p>
                  <span className="font-semibold">Mã đơn hàng:</span> {order.id}
                </p>
                <p>
                  <span className="font-semibold">Giá đã đấu:</span>{' '}
                  {order.price.toLocaleString()}đ
                </p>
                <p>
                  <span className="font-semibold">Ngày đặt:</span> {order.date}
                </p>
                <p>
                  <span className="font-semibold">Trạng thái:</span>{' '}
                  <span
                    className={`badge ${
                      order.status === 'Đã giao'
                        ? 'badge-success'
                        : 'badge-warning'
                    }`}
                  >
                    {order.status}
                  </span>
                </p>
                {order.status === 'Đang giao' && (
                  <button className="btn btn-sm btn-outline btn-primary mt-2">
                    Theo dõi đơn hàng
                  </button>
                )}
                {order.status === 'Đã giao' && (
                  <button className="btn btn-sm btn-outline btn-primary mt-2">
                    Xác nhận đã nhận hàng
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
