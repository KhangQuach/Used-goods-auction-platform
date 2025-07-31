'use client'

import { useState } from 'react'

const mockUsers = [
  { id: 'U001', name: 'Nguyễn Văn A', email: 'a@example.com', phone: '0912345678', role: 'buyer', status: 'active' },
  { id: 'U002', name: 'Trần Thị B', email: 'b@example.com', phone: '0987654321', role: 'seller', status: 'locked' },
  { id: 'U003', name: 'Admin Boom', email: 'admin@site.com', phone: '0123456789', role: 'admin', status: 'active' },

  { id: 'U004', name: 'Lê Minh Tuấn', email: 'tuan@example.com', phone: '0901111222', role: 'buyer', status: 'active' },
  { id: 'U005', name: 'Phạm Hồng Nhung', email: 'nhung@example.com', phone: '0933444555', role: 'seller', status: 'locked' },
  { id: 'U006', name: 'Trịnh Quốc Bảo', email: 'bao@example.com', phone: '0902233445', role: 'buyer', status: 'active' },
  { id: 'U007', name: 'Ngô Gia Linh', email: 'linh@example.com', phone: '0988111223', role: 'buyer', status: 'locked' },
  { id: 'U008', name: 'Lý Minh Anh', email: 'minhanh@example.com', phone: '0968777888', role: 'seller', status: 'active' },
  { id: 'U009', name: 'Trần Hoàng Khang', email: 'khang@example.com', phone: '0977666555', role: 'seller', status: 'active' },
  { id: 'U010', name: 'Đoàn Hải Yến', email: 'yen@example.com', phone: '0933666999', role: 'buyer', status: 'active' },
  { id: 'U011', name: 'Nguyễn Quốc Tuấn', email: 'qtuan@example.com', phone: '0912999888', role: 'admin', status: 'active' },
  { id: 'U012', name: 'Phạm Thị Hoa', email: 'hoa@example.com', phone: '0944555666', role: 'buyer', status: 'locked' },
  { id: 'U013', name: 'Lê Văn Tèo', email: 'teo@example.com', phone: '0955123456', role: 'buyer', status: 'active' },
  { id: 'U014', name: 'Nguyễn Thanh Trúc', email: 'truc@example.com', phone: '0904455667', role: 'seller', status: 'locked' },
  { id: 'U015', name: 'Đinh Gia Hưng', email: 'hung@example.com', phone: '0909090909', role: 'buyer', status: 'active' },
  { id: 'U016', name: 'Bùi Thị Loan', email: 'loan@example.com', phone: '0988001122', role: 'seller', status: 'active' },
  { id: 'U017', name: 'Vũ Minh Nhật', email: 'nhat@example.com', phone: '0922333444', role: 'buyer', status: 'locked' },
  { id: 'U018', name: 'Hồ Quang Phúc', email: 'phuc@example.com', phone: '0903004005', role: 'buyer', status: 'active' },
  { id: 'U019', name: 'Lâm Bảo Trâm', email: 'tram@example.com', phone: '0977001122', role: 'seller', status: 'active' },
  { id: 'U020', name: 'Trịnh Nhật Long', email: 'long@example.com', phone: '0944111222', role: 'buyer', status: 'locked' },
  { id: 'U021', name: 'Ngô Đức Duy', email: 'duy@example.com', phone: '0933555777', role: 'seller', status: 'active' },
  { id: 'U022', name: 'Võ Thị Mơ', email: 'mo@example.com', phone: '0966777888', role: 'buyer', status: 'active' },
  { id: 'U023', name: 'Nguyễn Cao Cường', email: 'cuong@example.com', phone: '0909988776', role: 'admin', status: 'active' },
]


export default function AdminUsersPage() {
  const [users, setUsers] = useState(mockUsers)

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: user.status === 'active' ? 'locked' : 'active' } : user
      )
    )
  }

  const deleteUser = (id: string) => {
    if (confirm('Bạn chắc chắn muốn xoá người dùng này?')) {
      setUsers((prev) => prev.filter((user) => user.id !== id))
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Quản lý người dùng</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Điện thoại</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>
                  <div className="badge badge-info text-white capitalize">{u.role}</div>
                </td>
                <td>
                  <div
                    className={`badge ${
                      u.status === 'active' ? 'badge-success' : 'badge-error'
                    } capitalize`}
                  >
                    {u.status}
                  </div>
                </td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-xs btn-outline"
                    onClick={() => toggleStatus(u.id)}
                  >
                    {u.status === 'active' ? 'Khóa' : 'Mở'}
                  </button>
                  <button className="btn btn-xs btn-outline btn-error" onClick={() => deleteUser(u.id)}>
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
