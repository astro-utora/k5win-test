'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HomeHero() {
  return (
    <div>

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-gray-900">
      <div className="absolute inset-0 bg-[url('https://wallpapercave.com/wp/mLby7uv.jpg')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 text-white">
          จุดหมายปลายทางการเล่นเกมอันดับหนึ่งของคุณ
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            สั็อต PG เว็บตรง ที่ดีที่สุด พร้อมเครดิตฟรี slot เว็บตรง ระบบฝาก-ถอนออโต้ตลอด 24 ชั่วโมง
          </p>
          <p className="text-lg text-gray-400 mb-8">
            เว็บสล็อตตรง ให้บริการ สล็อต pg และ เกมสล็อตออนไลน์ครบวงจร
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/login">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              เข้าร่วมตอนนี้
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
            <Link href="/privacy-policy">
            <Button size="lg" variant="outline" className="text-gray border-white hover:bg-white/10">
              เรียนรู้เพิ่มเติม
            </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}

export const runtime = "edge";
