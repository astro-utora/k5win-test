import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'K5Win | Premium Online Gaming & Betting Platform',
  description: 'Experience the thrill of premium online gaming with K5Win. Enjoy slots, live casino, sports betting, and more with secure transactions and 24/7 support.',
  keywords: 'online betting, casino games, slots, live casino, sports betting, esports betting, online lottery, สล็อต, pg slot, pg slot เว็บ ตรง, เว็บ สล็อต, slot เว็บ ตรง, เว็บ สล็อต ตรง, สล็อต เครดิต ฟรี, สล็อต pg, เว็บ ตรง สล็อต, เว็บ สล็อต ใหม่ ล่าสุด',
  openGraph: {
    title: 'K5Win | Premium Online Gaming & Betting Platform',
    description: 'Experience the thrill of premium online gaming with K5Win.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'K5Win Gaming Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K5Win | Premium Online Gaming & Betting Platform',
    description: 'Experience the thrill of premium online gaming with K5Win.',
    images: ['https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar/> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}