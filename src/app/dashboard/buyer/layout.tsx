import NavbarBuyer from '@/app/components/NavBarBuyer'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarBuyer />
      <main className='container mx-auto'>{children}</main>
    </>
  )
}