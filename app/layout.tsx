import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simple TodoApp',
  description: 'simple todo app for leaning next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white'>
      <body>{children}</body>
    </html>
  )
}
