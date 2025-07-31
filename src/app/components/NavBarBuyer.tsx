// app/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Trang chủ', href: '/dashboard/buyer' },
  { label: 'Đấu giá', href: '/products' },
  { label: 'Đơn hàng', href: '/dashboard/buyer/orders' },
  { label: 'Trò chuyện', href: '/dashboard/buyer/chat' },
  { label: 'Tài khoản', href: '/dashboard/buyer/account' },
  { label: 'Đăng xuất', href: '/auth/login' }
]

export default function NavbarBuyer() {
  const pathname = usePathname()

  return (
    <div className="navbar bg-base-100 border-b border-base-200 sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <Link href="/dashboard/buyer" className="text-xl font-bold text-primary px-4">
          Đấu Giá Đồ Cũ
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex menu menu-horizontal px-1 gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? 'active font-semibold' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
