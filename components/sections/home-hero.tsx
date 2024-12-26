'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-gray-900">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/casino-table-with-poker-chips-cards-slot-machines_1150-19600.jpg')] bg-cover bg-center opacity-20" />
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
            สัมผัสกับความตื่นเต้นของการเล่นเกมออนไลน์ระดับพรีเมียมพร้อมธุรกรรมที่ปลอดภัยและการสนับสนุนตลอด 24 ชั่วโมงทุกวัน
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              เข้าร่วมตอนนี้
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-gray border-white hover:bg-white/10">
              เรียนรู้เพิ่มเติม
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const runtime = "edge";