
import './globals.css'
import { Header } from '../components/Header'
import SearchBar from '@/components/SearchBar'

export const metadata = {
  title: 'Movies Explorer',
  description: 'Application that allows you to search and view information about movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className='flex flex-col items-center'>
        <Header />
        <SearchBar />
        {children}
      </body>
    </html>
  )
}
