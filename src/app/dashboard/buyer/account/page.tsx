'use client'

import { useState } from 'react'

export default function AccountPage() {
  const [form, setForm] = useState({
    name: 'Quách Thiếu Khang',
    email: 'quachthieukhang@gmail.com',
    phone: '0942766191',
  })

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  })

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
  }

  const handleSaveInfo = () => {
    alert('Thông tin cá nhân đã được cập nhật!')
    // TODO: gọi API PUT cập nhật
  }

  const handleChangePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert('Mật khẩu mới không khớp')
      return
    }
    // TODO: gọi API đổi mật khẩu
    alert('Mật khẩu đã được thay đổi!')
  }

  return (
    <>
      <h1 className="text-2xl font-bold p-4">Tài khoản của bạn</h1>
      <div className="space-y-8 flex flex-col md:flex-row gap-6">

        {/* Cập nhật thông tin */}
        <div className="card bg-base-100 shadow w-full md:w-96 flex-1">
          <div className="card-body space-y-4 h-full">
            <h2 className="card-title">Thông tin cá nhân</h2>

            <div className="form-control flex flex-row items-center gap-2">
              <label className="label pr-2 min-w-[120px]">Họ và tên:</label>
              <input
                type="text"
                name="name"
                className="input input-bordered flex-1"
                value={form.name}
                onChange={handleInfoChange}
              />
            </div>

            <div className="form-control flex flex-row items-center gap-2">
              <label className="label pr-2 min-w-[120px]">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered flex-1"
                value={form.email}
                onChange={handleInfoChange}
              />
            </div>

            <div className="form-control flex flex-row items-center gap-2">
              <label className="label pr-2 min-w-[120px]">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                className="input input-bordered flex-1"
                value={form.phone}
                onChange={handleInfoChange}
              />
            </div>

            <button className="btn btn-primary mt-2 w-fit" onClick={handleSaveInfo}>
              Lưu thay đổi
            </button>
          </div>
        </div>

        {/* Đổi mật khẩu */}
        <div className="card bg-base-100 shadow w-full md:w-96 flex-1">
          <div className="card-body space-y-4 h-full">
            <h2 className="card-title">Đổi mật khẩu</h2>

            <div className="form-control flex flex-row items-center gap-2">
              <label className="label pr-2 min-w-[120px]">Mật khẩu hiện tại</label>
              <input
                type="password"
                name="current"
                className="input input-bordered flex-1"
                value={passwords.current}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="form-control flex flex-row items-center gap-2">
              <label className="label pr-2 min-w-[120px]">Mật khẩu mới</label>
              <input
                type="password"
                name="new"
                className="input input-bordered flex-1"
                value={passwords.new}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="form-control flex flex-row items-center gap-2">
              <label className="label pr-2 min-w-[120px]">Xác nhận mật khẩu mới</label>
              <input
                type="password"
                name="confirm"
                className="input input-bordered flex-1"
                value={passwords.confirm}
                onChange={handlePasswordChange}
              />
            </div>

            <button className="btn btn-primary mt-2 w-fit" onClick={handleChangePassword}>
              Đổi mật khẩu
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
