import { HomeHero } from '@/components/sections/home-hero';
import { GameCategories } from '@/components/sections/game-categories';
import { Promotions } from '@/components/sections/promotions';
import { ServiceDepartment } from '@/components/sections/service-department';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
  title: {
    template: '%s | K5Win',
    default: 'สล็อต PG SLOT เว็บตรง | เว็บสล็อตใหม่ล่าสุด อันดับ 1'
  },
  description: 'เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมเครดิตฟรี ระบบฝาก-ถอนออโต้ slot เว็บตรง ตลอด 24 ชั่วโมง เว็บสล็อตใหม่ล่าสุด',
  keywords: 'สล็อต, pg slot, pg slot เว็บตรง, เว็บสล็อต, slot เว็บตรง, เว็บสล็อตตรง, สล็อตเครดิตฟรี, สล็อต pg, เว็บตรงสล็อต, เว็บสล็อตใหม่ล่าสุด',
  openGraph: {
    title: 'สล็อต PG SLOT เว็บตรง | เว็บสล็อตใหม่ล่าสุด อันดับ 1',
    description: 'เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมเครดิตฟรี',
    locale: 'th_TH',
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
     <Navbar/>

      {/* Main Content */}
      <main>
        <HomeHero />
        <GameCategories />
        <Promotions />
        <ServiceDepartment />
      </main>

      <Footer/>
      
    </div>
  );
}

export const runtime = "edge";