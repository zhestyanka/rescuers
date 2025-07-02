import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'СпасСлужба - Профессиональная спасательная служба',
  description: 'Профессиональная спасательная служба. Спасение на воде, обучение, профилактика чрезвычайных ситуаций. Работаем 24/7.',
  keywords: 'спасательная служба, спасение на воде, МЧС, безопасность, обучение спасателей',
  authors: [{ name: 'СпасСлужба' }],
  robots: 'index, follow',
  openGraph: {
    title: 'СпасСлужба - Профессиональная спасательная служба',
    description: 'Профессиональная спасательная служба. Спасение на воде, обучение, профилактика чрезвычайных ситуаций.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
