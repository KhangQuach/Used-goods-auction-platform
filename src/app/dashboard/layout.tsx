import Navbar from '@/app/components/NavBar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='container mx-auto'>{children}</main>
    </>
  )
}