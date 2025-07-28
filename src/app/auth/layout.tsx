export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center items-center" >
      <div style={{width: "300px"}} className="mt-32">{children}</div>
    </main>
  )
}