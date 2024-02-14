import { Outfit } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} `}>
        <Header />

        <div className='inner-container gap'>
          {children}
        </div>

      </body>
    </html>
  )
}
