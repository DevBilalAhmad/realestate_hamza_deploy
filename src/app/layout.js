import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/Navbar'

import Footer from './component/Footer'
import Header from './component/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Roomflog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
          <Header/>
          {/* <Navbar/> */}
        {children}
        <Footer/>
        </body>
    </html>
  )
}
