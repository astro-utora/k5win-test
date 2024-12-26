'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Dice5, 
  PlaySquare, 
  Trophy, 
  Swords, 
  Rocket, 
  Ticket, 
  Bitcoin,
  Joystick
} from 'lucide-react';

const games = [
  {
    icon: <Dice5 className="h-8 w-8" />,
    title: 'สล็อต',
    description: 'สัมผัสประสบการณ์เกมสล็อตสุดตื่นเต้นพร้อมแจ็คพอตมหาศาล',
  },
  {
    icon: <Joystick className="h-8 w-8" />,
    title: 'ยิงปลา',
    description: 'ดำดิ่งสู่เกมยิงปืนใต้น้ำสุดตื่นเต้น',
  },
  {
    icon: <PlaySquare className="h-8 w-8" />,
    title: 'เกมไพ่',
    description: 'เกมไพ่คลาสสิกพร้อมความทันสมัย',
  },
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: 'คาสิโนสด',
    description: 'ประสบการณ์คาสิโนแบบเรียลไทม์กับดีลเลอร์สด',
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: 'กีฬา',
    description: 'เดิมพันในกิจกรรมกีฬาที่คุณชื่นชอบทั่วโลก',
  },
  {
    icon: <Swords className="h-8 w-8" />,
    title: 'การชนไก่',
    description: 'แพลตฟอร์มเดิมพันการชนไก่แบบดั้งเดิม',
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'อีสปอร์ต',
    description: 'เดิมพันในทัวร์นาเมนต์เกมการแข่งขันยอดนิยม',
  },
  {
    icon: <Ticket className="h-8 w-8" />,
    title: 'ลอตเตอรี',
    description: 'การจับฉลากลอตเตอรีรายวันพร้อมรางวัลใหญ่',
  },
  {
    icon: <Bitcoin className="h-8 w-8" />,
    title: 'บล็อคเชน',
    description: 'เกมที่ใช้คริปโตและตัวเลือกการเดิมพัน',
  },
];

export function GameCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">เกมของเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer">
                <div className="mb-4 text-primary">{game.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-muted-foreground">{game.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const runtime = "edge";