import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "สล็อต PG SLOT เว็บตรง | เว็บสล็อตใหม่ล่าสุด อันดับ 1",
//   description:
//     "เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมเครดิตฟรี ระบบฝาก-ถอนออโต้ slot เว็บตรง ตลอด 24 ชั่วโมง เว็บสล็อตใหม่ล่าสุด",
//   keywords:
//     "สล็อต, pg slot, pg slot เว็บตรง, เว็บสล็อต, slot เว็บตรง, เว็บสล็อตตรง, สล็อตเครดิตฟรี, สล็อต pg, เว็บตรงสล็อต, เว็บสล็อตใหม่ล่าสุด",
//   openGraph: {
//     title: "สล็อต PG SLOT เว็บตรง | เว็บสล็อตใหม่ล่าสุด อันดับ 1",
//     description:
//       "เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมเครดิตฟรี ระบบฝาก-ถอนออโต้ slot เว็บตรง ตลอด 24 ชั่วโมง เว็บสล็อตใหม่ล่าสุด",
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop",
//         width: 1200,
//         height: 630,
//         alt: "สล็อต PG SLOT เว็บตรง",
//       },
//     ],
//     locale: "th_TH",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "สล็อต PG SLOT เว็บตรง | เว็บสล็อตใหม่ล่าสุด อันดับ 1",
//     description:
//       "เล่น สล็อต pg และ pg slot เว็บตรง สนุกกับระบบฝากถอนออโต้และโปรโมชั่นมากมาย",
//     images: [
//       "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop",
//     ],
//   },
//   robots: "index, follow",
//   viewport: "width=device-width, initial-scale=1.0",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
