
import './globals.css'
import { Header } from '../components/Header'

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
