import { HomeHero } from "@/components/sections/home-hero";
import { GameCategories } from "@/components/sections/game-categories";
import { Promotions } from "@/components/sections/promotions";
import { ServiceDepartment } from "@/components/sections/service-department";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "สล็อต PG SLOT เว็บตรง | เว็บสล็อตใหม่ล่าสุด อันดับ 1",
  description:
    "เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมเครดิตฟรี ระบบฝาก-ถอนออโต้ slot เว็บตรง ตลอด 24 ชั่วโมง เว็บสล็อตใหม่ล่าสุด",
  keywords:
    "สล็อต, pg slot, pg slot เว็บตรง, เว็บสล็อต, slot เว็บตรง, เว็บสล็อตตรง, สล็อตเครดิตฟรี, สล็อต pg, เว็บตรงสล็อต, เว็บสล็อตใหม่ล่าสุด",
  openGraph: {
    title: "สล็อต PG SLOT เว็บตรง | เว็บสล็อตใหม่ล่าสุด อันดับ 1",
    description:
      "เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมเครดิตฟรี",
    locale: "th_TH",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <>
        {/* Structured Data: JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.example.com",
              "name": "สล็อต PG SLOT เว็บตรง | เว็บสล็อตใหม่ล่าสุด อันดับ 1",
              "description": "เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมเครดิตฟรี ระบบฝาก-ถอนออโต้ slot เว็บตรง ตลอด 24 ชั่วโมง เว็บสล็อตใหม่ล่าสุด",
              "keywords": ["สล็อต", "pg slot", "pg slot เว็บตรง", "เว็บสล็อต", "slot เว็บตรง", "เว็บสล็อตตรง", "สล็อตเครดิตฟรี", "สล็อต pg", "เว็บตรงสล็อต", "เว็บสล็อตใหม่ล่าสุด"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.example.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
            `,
          }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.example.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "สล็อต",
                  "item": "https://www.example.com/สล็อต"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "PG Slot",
                  "item": "https://www.example.com/pg-slot"
                }
              ]
            }
            `,
          }}
        />
      </>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HomeHero />
        <GameCategories />
        <Promotions />
        <ServiceDepartment />

        {/* Section for SEO Content */}
        <section className="px-4 py-8">
          <h2 className="text-2xl font-bold text-center">
            เล่นสล็อต PG SLOT และ เว็บสล็อตใหม่ล่าสุด
          </h2>
          <p className="mt-4 text-gray-600">
            สนุกไปกับสล็อตคุณภาพระดับพรีเมียมที่มีให้เลือกเล่นมากมาย
            ไม่ว่าจะเป็น <strong>สล็อต PG SLOT</strong> หรือ{" "}
            <strong>เว็บสล็อตใหม่ล่าสุด</strong>{" "}
            เรามีโปรโมชั่นและระบบฝาก-ถอนออโต้ เพื่อให้คุณเล่นได้ตลอด 24
            ชั่วโมงอย่างไม่มีสะดุด
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const runtime = "edge";
