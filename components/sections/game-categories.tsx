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
    title: 'PG SLOT เว็บตรง',
    description: 'เว็บสล็อตออนไลน์ทันดับ 1 มาพร้อมเกมใหม่ล่าสุดกว่า 500 เกม รองรับทุกระบบ ทั้ง iOS และ Android พร้อมโบนัสต้อนรับ 100% และเครดิตฟรีทุกวัน',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Joystick className="h-8 w-8" />,
    title: 'ยิงปลา',
    description: 'เกมยิงปลาออนไลน์สุดมันส์ กราฟิกสวยงามคมชัดระดับ HD พร้อมระบบเกมเพลย์ที่ลื่นไหล รางวัลแจ็คพอตแตกง่าย มีห้องให้เลือกเล่นหลากหลายระดับ',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <PlaySquare className="h-8 w-8" />,
    title: 'เกมไพ่',
    description: 'รวมเกมไพ่ยอดนิยมครบวงจร บาคาร่า ป๊อกเด้ง ไพ่แคง รูเล็ต และอื่นๆ อีกมากมาย พร้อมระบบถ่ายทอดสดคุณภาพสูง ดีลเลอร์สาวสวย',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: 'คาสิโนสด',
    description: 'ปัมผัสประสบการณ์คาสิโนออนไลน์เสมือนจริง ถ่ายทอดสดตรงจากคาสิโนชั้นนำระดับโลก มาพร้อมระบบภาพและเสียงคมชัดระดับ 4K ไม่มีการกระตุก',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: 'กีฬา',
    description: 'เดิมพันกีฬาออนไลน์ครบทุกชนิด ทั้งบอล บาส มวย และอื่นๆ อัตราต่อรองดีที่สุด อัพเดทผลสดตลอด 24 ชม. พร้อมระบบวิเคราะห์สถิติแบบมืออาชีพ',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: <Swords className="h-8 w-8" />,
    title: 'การชนไก่',
    description: 'ถ่ายทอดสดการชนไก่จากสังเวียนชั้นนำทั่วเอเชีย พร้อมระบบวิเคราะห์สถิติ ประวัติการชน และอัตราต่อรองที่ดีที่สุด อัพเดทผลแบบเรียลไทม์',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'อีสปอร์ต',
    description: 'เดิมพันอีสปอร์ตชั้นนำระดับโลก ทั้ง DOTA2, LOL, CSGO และอื่นๆ ถ่ายทอดสดทุกแมตช์สำคัญ พร้อมระบบวิเคราะห์ทีมและสถิติผู้เล่นแบบละเอียด',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: <Ticket className="h-8 w-8" />,
    title: 'ลอตเตอรี',
    description: 'แทงหวยออนไลน์ครบวงจร ทั้งหวยรัฐ หวยยี่กี หวยลาว และหวยอื่นๆ อัตราจ่ายสูงสุด บาทละ 999 รับรองจ่ายจริง ออกผลทุกวัน ดูผลย้อนหลังได้',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    icon: <Bitcoin className="h-8 w-8" />,
    title: 'บล็อคเชน',
    description: 'เกมทล็อคเชนรูปแบบใหม่ รองรับการเดิมพันด้วยคริปโตทุกสกุลหลัก เช่น BTC, ETH, USDT พร้อมระบบฝาก-ถอนอัตโนมัติ และความปลอดภัยระดับสูงสุด',
    gradient: 'from-orange-500 to-amber-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function GameCategories() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            เว็บสล็อตออนไลน์ อันดับ 1
          </h2>
          <p className="text-lg text-muted-foreground">
            เลือกจากเกมที่หลากหลายของเรา พร้อมระบบที่เสถียรและปลอดภัย
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {games.map((game, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="relative p-6 overflow-hidden backdrop-blur-sm bg-card/50 border-muted/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                {/* Gradient background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${game.gradient}`} />
                
                <div className="relative z-10">
                  <div className="mb-6 text-primary transform transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                    {game.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {game.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-300 rounded-lg" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const runtime = "edge";