'use client'

import { useState } from 'react'

const mockAuctions = [
  {
    id: 'A001',
    product: 'Laptop Acer Aspire 5',
    seller: 'Nguyễn Văn A',
    currentPrice: 3200000,
    status: 'pending',
    reports: 0,
  },
  {
    id: 'A002',
    product: 'Điện thoại iPhone 11',
    seller: 'Trần Thị B',
    currentPrice: 5700000,
    status: 'approved',
    reports: 2,
  },
  {
    id: 'A003',
    product: 'Tivi Samsung 40"',
    seller: 'Phạm Văn C',
    currentPrice: 4300000,
    status: 'rejected',
    reports: 5,
  },
  {
    id: 'A004',
    product: 'Máy ảnh Canon EOS 600D',
    seller: 'Lê Minh Tuấn',
    currentPrice: 3450000,
    status: 'approved',
    reports: 1,
  },
  {
    id: 'A005',
    product: 'Loa JBL Flip 5',
    seller: 'Phạm Hồng Nhung',
    currentPrice: 1250000,
    status: 'pending',
    reports: 0,
  },
  {
    id: 'A006',
    product: 'Tai nghe Sony WH-1000XM4',
    seller: 'Trịnh Quốc Bảo',
    currentPrice: 2950000,
    status: 'approved',
    reports: 0,
  },
  {
    id: 'A007',
    product: 'Đồng hồ Casio G-Shock',
    seller: 'Ngô Gia Linh',
    currentPrice: 1500000,
    status: 'pending',
    reports: 0,
  },
  {
    id: 'A008',
    product: 'Giày Adidas Ultraboost',
    seller: 'Lý Minh Anh',
    currentPrice: 1350000,
    status: 'approved',
    reports: 1,
  },
  {
    id: 'A009',
    product: 'Bàn học gỗ sồi',
    seller: 'Trần Hoàng Khang',
    currentPrice: 870000,
    status: 'rejected',
    reports: 3,
  },
  {
    id: 'A010',
    product: 'Tủ lạnh mini Electrolux',
    seller: 'Đoàn Hải Yến',
    currentPrice: 1890000,
    status: 'approved',
    reports: 0,
  },
  {
    id: 'A011',
    product: 'Điện thoại Samsung Note 9',
    seller: 'Nguyễn Quốc Tuấn',
    currentPrice: 2550000,
    status: 'pending',
    reports: 1,
  },
  {
    id: 'A012',
    product: 'Máy tính bảng iPad Air 4',
    seller: 'Phạm Thị Hoa',
    currentPrice: 7100000,
    status: 'approved',
    reports: 0,
  },
  {
    id: 'A013',
    product: 'Ghế công thái học Sihoo',
    seller: 'Lê Văn Tèo',
    currentPrice: 1950000,
    status: 'rejected',
    reports: 2,
  },
  {
    id: 'A014',
    product: 'Máy lọc không khí Xiaomi',
    seller: 'Nguyễn Thanh Trúc',
    currentPrice: 2200000,
    status: 'approved',
    reports: 0,
  },
  {
    id: 'A015',
    product: 'Xe đạp thể thao Giant',
    seller: 'Đinh Gia Hưng',
    currentPrice: 3100000,
    status: 'pending',
    reports: 0,
  },
  {
    id: 'A016',
    product: 'Tivi LG 4K 43"',
    seller: 'Bùi Thị Loan',
    currentPrice: 4990000,
    status: 'approved',
    reports: 4,
  },
  {
    id: 'A017',
    product: 'Đèn học thông minh',
    seller: 'Vũ Minh Nhật',
    currentPrice: 420000,
    status: 'pending',
    reports: 0,
  },
  {
    id: 'A018',
    product: 'Micro thu âm BM800',
    seller: 'Hồ Quang Phúc',
    currentPrice: 890000,
    status: 'rejected',
    reports: 3,
  },
  {
    id: 'A019',
    product: 'Máy in HP LaserJet P1102',
    seller: 'Lâm Bảo Trâm',
    currentPrice: 1690000,
    status: 'approved',
    reports: 0,
  },
  {
    id: 'A020',
    product: 'Bộ sofa mini cho phòng trọ',
    seller: 'Trịnh Nhật Long',
    currentPrice: 1850000,
    status: 'approved',
    reports: 1,
  },
  {
    id: 'A021',
    product: 'Router WiFi TP-Link Archer C6',
    seller: 'Ngô Đức Duy',
    currentPrice: 560000,
    status: 'pending',
    reports: 0,
  },
  {
    id: 'A022',
    product: 'Balo du lịch chống nước',
    seller: 'Võ Thị Mơ',
    currentPrice: 380000,
    status: 'approved',
    reports: 0,
  },
  {
    id: 'A023',
    product: 'Máy cạo râu Philips',
    seller: 'Nguyễn Cao Cường',
    currentPrice: 690000,
    status: 'rejected',
    reports: 2,
  },
]


export default function AdminAuctionsPage() {
  const [auctions, setAuctions] = useState(mockAuctions)

  const updateStatus = (id: string, newStatus: 'approved' | 'rejected') => {
    setAuctions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    )
  }

  const deleteAuction = (id: string) => {
    if (confirm('Bạn chắc chắn muốn xoá phiên này?')) {
      setAuctions((prev) => prev.filter((item) => item.id !== id))
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Quản lý phiên đấu giá</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Mã phiên</th>
              <th>Sản phẩm</th>
              <th>Người bán</th>
              <th>Giá hiện tại</th>
              <th>Trạng thái</th>
              <th>Báo cáo</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {auctions.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.product}</td>
                <td>{a.seller}</td>
                <td>{a.currentPrice.toLocaleString()}đ</td>
                <td>
                  <div
                    className={`badge capitalize ${
                      a.status === 'approved'
                        ? 'badge-success'
                        : a.status === 'pending'
                        ? 'badge-warning'
                        : 'badge-error'
                    }`}
                  >
                    {a.status}
                  </div>
                </td>
                <td>
                  <div className="badge badge-outline">{a.reports}</div>
                </td>
                <td className="flex flex-wrap gap-2">
                  {a.status === 'pending' && (
                    <>
                      <button
                        className="btn btn-xs btn-success"
                        onClick={() => updateStatus(a.id, 'approved')}
                      >
                        Duyệt
                      </button>
                      <button
                        className="btn btn-xs btn-error"
                        onClick={() => updateStatus(a.id, 'rejected')}
                      >
                        Từ chối
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-xs btn-outline"
                    onClick={() => deleteAuction(a.id)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
