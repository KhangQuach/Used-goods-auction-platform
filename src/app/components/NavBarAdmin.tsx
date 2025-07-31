// app/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Quản lý người dùng', href: '/dashboard/admin/users' },
  { label: 'Phiên đấu giá', href: '/dashboard/admin/auctions' },
  { label: 'Danh mục sản phẩm', href: '/dashboard/admin/categories' },
  { label: 'Hệ thống', href: '/dashboard/admin/system' },
  { label: 'Đăng xuất', href: '/auth/login' }
]

export default function NavbarAdmin() {
  const pathname = usePathname()

  return (
    <div className="navbar bg-base-100 border-b border-base-200 sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <Link href="/dashboard/admin" className="text-xl font-bold text-primary px-4">
          Đấu Giá Đồ Cũ (ADMIN)
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
