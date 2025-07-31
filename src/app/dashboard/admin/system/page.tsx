'use client'

import { useState } from 'react'

const mockLogs = [
  { id: 1, action: 'Backup dữ liệu hệ thống', time: '2025-07-27 14:32', by: 'Quách Thiếu Khang B2203505' },
  { id: 2, action: 'Khôi phục bản backup 2025-07-25', time: '2025-07-27 08:10', by: 'Quách Thiếu Khang B2203505' },
  { id: 3, action: 'Cập nhật hệ thống lên v1.2.0', time: '2025-07-26 09:45', by: 'Quách Thiếu Khang B2203505' },
]

export default function AdminSystemPage() {
  const [logs, setLogs] = useState(mockLogs)

  const backupSystem = () => {
    const time = new Date().toLocaleString('vi-VN')
    const log = {
      id: Date.now(),
      action: 'Backup dữ liệu hệ thống',
      time,
      by: 'Admin Boom',
    }
    setLogs((prev) => [log, ...prev])
    alert('✅ Backup thành công!')
  }

  const restoreSystem = () => {
    const time = new Date().toLocaleString('vi-VN')
    const log = {
      id: Date.now(),
      action: 'Khôi phục bản backup gần nhất',
      time,
      by: 'Admin Boom',
    }
    setLogs((prev) => [log, ...prev])
    alert('✅ Khôi phục thành công!')
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Quản lý hệ thống</h1>

      {/* Hành động hệ thống */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Sao lưu hệ thống</h2>
            <p>Tạo bản backup dữ liệu toàn bộ hệ thống.</p>
            <button className="btn btn-primary mt-2" onClick={backupSystem}>
              Backup ngay
            </button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Khôi phục hệ thống</h2>
            <p>Khôi phục dữ liệu từ bản backup gần nhất.</p>
            <button className="btn btn-warning mt-2" onClick={restoreSystem}>
              Khôi phục
            </button>
          </div>
        </div>
      </div>

      {/* Thông tin hệ thống */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Thông tin hệ thống</h2>
          <ul className="list-disc pl-6 text-sm">
            <li>Phiên bản hiện tại: <strong>v1.2.0</strong></li>
            <li>Ngày cập nhật gần nhất: <strong>2025-07-26</strong></li>
            <li>Trạng thái: <span className="badge badge-success">Đang hoạt động</span></li>
          </ul>
        </div>
      </div>

      {/* Nhật ký hệ thống */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Nhật ký hoạt động 📝</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra text-sm">
            <thead>
              <tr>
                <th>Thời gian</th>
                <th>Hành động</th>
                <th>Thực hiện bởi</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.time}</td>
                  <td>{log.action}</td>
                  <td>{log.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
