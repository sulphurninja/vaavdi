import Footer from './Footer'
import Header from './Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaavdi - Maratha Club',
  description: 'Maratha Club - Vaavdi (वावडी) Blog maratha club beed',
  keywords: 'Maratha Club,maratha,maratha mandir, maratha matrimony,maratha mandir cinema maratha marriage,maratha chamber of commerce,maratha caste,maratha mandir photos,maratha aarakshan,maratha architecture,maratha anand,maratha kranti morcha,maratha army,ek maratha lakh maratha,maratha aarakshan latest news,maratha administration ,maratha architecture short note,maratha art,shivaji maharaj,chatrapati shivaji maharaj,maratha and kesari newspaper,balasaheb pingle,pingle,dr,aditya balasaheb pingle,96k maratha,96 kuli maratha, Maratha Press, News, Maratha Club Press, Vaavdi, Blog, Marathi, Marathi News, Vichaar, Beed, Jai Shivaji, Jai shivrai, Jai jijau',
  author: 'Dr.Balasaheb Pingle'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
      <Header />
        {children}</body>
        <Footer/>
    </html>
  )
}
