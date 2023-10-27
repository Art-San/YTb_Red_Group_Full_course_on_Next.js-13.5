import type { PropsWithChildren } from 'react'
// передаем через type влияет на оптимизацию

export default function DashboardLayout({
  children
}: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1>Group layout</h1>
      {children}
    </div>
  )
}
