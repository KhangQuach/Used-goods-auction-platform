'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword) {
      alert('Vui lòng điền đầy đủ thông tin')
      return
    }

    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp')
      return
    }

    // TODO: Gọi API đăng ký thực tế tại đây
    router.push('/dashboard/buyer') // Giả lập đăng ký xong -> chuyển vào dashboard
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center">Đăng ký</h1>

      <form onSubmit={handleRegister} className="space-y-4">
        <div className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            className="input input-bordered"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Mật khẩu</span>
          </label>
          <input
            id="password"
            type="password"
            className="input input-bordered"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="confirmPassword">
            <span className="label-text">Xác nhận mật khẩu</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="input input-bordered"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Đăng ký
        </button>
      </form>

      <p className="text-sm text-center">
        Đã có tài khoản?{' '}
        <a href="/auth/login" className="link link-primary">
          Đăng nhập
        </a>
      </p>
    </div>
  )
}
