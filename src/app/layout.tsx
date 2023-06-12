'use client'

import 'dayjs/locale/pt-br'
import './globals.css'
import { Inter } from 'next/font/google'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { Provider } from 'react-redux'
import store from '@/store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <Provider store={store}>
        <body className="bg-white">
          <Sidebar />

          <div className="ml-80 relative h-screen max-[785px]:hidden">
            <Header />

            <div className="py-24 px-8 mx-auto">
              {children}
            </div>
          </div>
        </body>
      </Provider>
    </html>
  )
}
