import { DM_Sans } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'StoryCraft',
  description: 'AI-powered storyboard generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

