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
  title: 'Weft — Design Systems for AI Agents',
  description: 'A collection of professional-grade DESIGN.md files for AI coding agents.',
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
