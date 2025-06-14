import type React from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Script from 'next/script'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Einbürgerungstest Deutsch',
  description: 'Master your German citizenship test with our comprehensive preparation app',
  keywords:
    'Germany, citizenship test, Einbürgerungstest Deutsch, Deutsch test preparation, Deutsch lernen, Living in Germany, Leben in deutschland',
  authors: [{ name: 'Einbürgerungstest Deutsch' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className + ' antialiased'}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DNN4VWCKNY"
          strategy="afterInteractive"
        ></Script>
        <Script id="ga-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DNN4VWCKNY');`}
        </Script>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
