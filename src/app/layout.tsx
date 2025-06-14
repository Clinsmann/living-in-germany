import type React from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Script from 'next/script'
import { keywords } from '../lib/keyworkds'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Einbürgerungstest Deutsch',
  description: 'Master your German citizenship test with our comprehensive preparation app',
  keywords: keywords.join(', '),
  authors: [{ name: 'Ibeanu Hillary', url: 'https://ibeanuhillary.com' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  alternates: {
    canonical: 'https://lebenind.ibeanuhillary.com',
  },
  openGraph: {
    title: 'Einbürgerungstest Deutsch',
    description: 'Master your German citizenship test with our comprehensive preparation app',
    url: 'https://lebenind.ibeanuhillary.com',
    siteName: 'Einbürgerungstest Deutsch',
    images: [{ url: 'https://res.cloudinary.com/africhoral/image/upload/v1749849476/personal-website/german-flag.svg' }],
  },
  icons: {
    icon: 'https://res.cloudinary.com/africhoral/image/upload/v1749849476/personal-website/german-flag.svg',
  },
}

// genereate the structuredData for the website
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Einbürgerungstest Deutsch',
  url: 'https://lebenind.ibeanuhillary.com',
  description: 'Master your German citizenship test with our comprehensive preparation app',
  author: {
    '@type': 'Person',
    name: 'Ibeanu Hillary',
    url: 'https://ibeanuhillary.com',
  },
  publisher: {
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://res.cloudinary.com/africhoral/image/upload/v1749849476/personal-website/german-flag.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="https://res.cloudinary.com/africhoral/image/upload/w_5,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1749849476/personal-website/german-flag.svg" type="image/svg+xml" />
      <body className={roboto.className + ' antialiased'}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DNN4VWCKNY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DNN4VWCKNY');
          `}
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
