'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Gọi API đăng nhập thực tế tại đây
    if (email && password) {
      // Giả lập đăng nhập thành công
      router.push('/dashboard/buyer')
    } else {
      alert('Vui lòng nhập đầy đủ thông tin')
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center">Đăng nhập</h1>

      <form onSubmit={handleLogin} className="space-y-4">
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

        <button type="submit" className="btn btn-primary w-full mt-4">
          Đăng nhập
        </button>
      </form>

      <p className="text-sm text-center">
        Chưa có tài khoản?{' '}
        <a href="/auth/register" className="link link-primary">
          Đăng ký ngay
        </a>
      </p>
    </div>
  )
}
