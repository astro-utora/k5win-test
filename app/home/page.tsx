import { MainNav } from "@/components/home/main-nav";
import { MobileLeftNav } from "@/components/home/mobile-nav";
import { RewardCard } from "@/components/home/reward-card";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <>
        <title>หน้าแรก - Home</title>
        <meta
          name="description"
          content="ชวนเพื่อนและรับรางวัลจากการแนะนำ พร้อมคอมมิชชั่น 25%"
        />
        <meta name="keywords" content="รางวัล, คอมมิชชั่น, การแนะนำ, My App" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="ชวนเพื่อนรับรางวัล - My App" />
        <meta
          property="og:description"
          content="ชวนเพื่อนและรับรางวัลจากการแนะนำ พร้อมคอมมิชชั่น 25%"
        />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="th_TH" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ชวนเพื่อนรับรางวัล - My App" />
        <meta
          name="twitter:description"
          content="ชวนเพื่อนและรับรางวัลจากการแนะนำ พร้อมคอมมิชชั่น 25%"
        />
        <meta name="twitter:image" content="/placeholder.svg" />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "ชวนเพื่อนรับรางวัล - My App",
              description:
                "ชวนเพื่อนและรับรางวัลจากการแนะนำ พร้อมคอมมิชชั่น 25%",
              url: "https://www.yourwebsite.com",
              mainEntityOfPage: "https://www.yourwebsite.com",
              publisher: {
                "@type": "Organization",
                name: "My App",
                logo: {
                  "@type": "ImageObject",
                  url: "/logo.svg",
                },
              },
              image: "/placeholder.svg",
              about: {
                "@type": "Thing",
                name: "รางวัลและคอมมิชชั่น",
                description:
                  "ชวนเพื่อนและรับรางวัลจากการแนะนำ พร้อมคอมมิชชั่น 25%",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "THB",
                price: "85742.60",
                priceValidUntil: "2025-12-31",
                availability: "InStock",
                url: "https://www.yourwebsite.com",
                seller: {
                  "@type": "Organization",
                  name: "My App",
                },
              },
            }),
          }}
        />
      </>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <MobileLeftNav />

        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden md:block w-64 bg-background border-r border-border p-4 min-h-screen">
            <MainNav />
          </div>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6 ml-16 md:ml-0">
            {/* Hero Section */}
            <div className="relative rounded-xl bg-card p-4 md:p-8 mb-6 overflow-hidden border border-border">
              <div className="relative z-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  ชวนเพื่อนรับรางวัล
                </h1>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-6">
                  <span className="text-2xl md:text-3xl text-green-400">
                    ฿85,742.60
                  </span>
                  <span className="text-xl md:text-2xl">+ คอมมิชชั่น 25%</span>
                </div>
                <Button className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 mb-4">
                  สมัครและรับรางวัล
                </Button>
                <div>
                  <a
                    href="#"
                    className="text-green-400 hover:underline text-sm"
                  >
                    ข้อกำหนดและเงื่อนไขการแนะนำ
                  </a>
                </div>
              </div>
              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
                <div className="relative h-full">
                  <Image
                    src="/placeholder.svg"
                    alt="ภาพประกอบ"
                    width={400}
                    height={300}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Reward Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <RewardCard
                title="รางวัลการแนะนำ"
                amount="฿85,742.60"
                description="ทุกครั้งที่คุณชวนเพื่อน คุณจะได้รับ ฿85,742.60 ยิ่งชวนมาก ยิ่งได้มาก!"
                imageSrc="/placeholder.svg"
              />
              <RewardCard
                title="รางวัลคอมมิชชั่น"
                amount="25%"
                description="คุณจะได้รับคอมมิชชั่นทุกครั้งที่เพื่อนของคุณเล่นเกม โดยคำนวณจากยอดเดิมพัน"
                imageSrc="/placeholder.svg"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
