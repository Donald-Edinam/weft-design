import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';

const satoshi = localFont({
  src: [
    { path: '../../public/fonts/Satoshi-Light.otf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Satoshi-Medium.otf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Satoshi-Bold.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Satoshi-Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Weft — Professional DESIGN.md Files for AI Coding Agents',
  description: 'Supercharge your AI coding agents with production-ready design systems. Each system includes tokens, component specifications, and explicit agent instructions.',
  keywords: 'AI coding, design systems, next.js, agentic coding, design.md, tailwind, framer motion, UI/UX, Ghana, Accra',
  openGraph: {
    title: 'Weft — Design Systems for agentic AI',
    description: 'Production-ready UI blueprints for Claude, Cursor, and Gemini.',
    url: 'https://weft-design.vercel.app',
    siteName: 'Weft',
    images: [
      {
        url: '/og_image_weft.png',
        width: 1200,
        height: 630,
        alt: 'Weft Design Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weft — Design Systems for AI Agents',
    description: 'The structure behind the surface. Professional UI blueprints for agentic coding.',
    images: ['/og_image_weft.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-[var(--weft-white)] text-[var(--weft-black)] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
