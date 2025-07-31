import NavbarAdmin from '@/app/components/NavBarAdmin'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarAdmin />
      <main className='container mx-auto'>{children}</main>
    </>
  )
}