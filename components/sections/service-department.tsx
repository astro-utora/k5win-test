'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  HeadphonesIcon, 
  MessageCircle, 
  Shield, 
  Clock,
  CreditCard,
  HelpCircle,
  Gift,
  Users,
  Wallet
} from 'lucide-react';

const services = [
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: 'กริการลูกค้า 24 ชม.',
    description: 'ทีมงานมืออาชีพพร้อมให้บริการตลอด 24 ชั่วโมง ด้วยประสบการณ์มากกว่า 10 ปี แก้ไขปัญหาได้ทุกเรื่อง รวดเร็ว ใส่ใจทุกรายละเอียด',
    action: 'ติดต่อทีมงาน',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'แชทสดตลอด 24 ชม.',
    description: 'พูดคุยกับทีมงานผ่านระบบแชทสดได้ทันที ตอบกลับภายใน 30 วินาที รองรับทั้งภาษาไทยและอังกฤษ พร้อมให้คำปรึกษาทุกปัญหา',
    action: 'แชทเลย',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'ระบบความปลอดภัยสูงสุด',
    description: 'มั่นใจด้วยระบบรักษาความปลอดภัยมาตรฐานสากล SSL 256-bit เข้ารหัสทุกข้อมูล พร้อมระบบป้องกันการโจมตี DDoS ตรวจสอบได้ทุกธุรกรรม',
    action: 'ดูรายละเอียด',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'ถอนเงินภายใน 15 นาที',
    description: 'ระบบถอนเงินอัตโนมัติที่เร็วที่สุด รับเงินภายใน 15 นาทีทุกธนาคาร ไม่มีขั้นต่ำในการถอน ทำรายการได้ตลอด 24 ชม. ไม่มีวันหยุด',
    action: 'วิธีถอนเงิน',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: 'ฝาก-ถอนออโต้',
    description: 'ระบบฝาก-ถอนอัตโนมัติ ทองรับทุกธนาคารชั้นนำ และ True Wallet ทำรายการได้ตลอด 24 ชม. ไม่มีขั้นต่ำ เครดิตเข้าทันทีภายใน 3 วินาที',
    action: 'วิธีฝากเงิน',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: <HelpCircle className="h-8 w-8" />,
    title: 'คำถามที่พบบ่อย',
    description: 'รวมรวมคำถามและคำตอบที่พบบ่อยทั้งหมด พร้อมวิธีแก้ไขปัญหาเบื้องต้น คู่มือการใช้งานแบบละเอียด และวิดีโอสอนใช้งานทุกฟีเจอร์',
    action: 'ดูคำถาม',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: <Gift className="h-8 w-8" />,
    title: 'โปรโมชั่นพิเศษ',
    description: 'รับโบนัสและโปรโมชั่นมากมาย อั้งสมาชิกใหม่และเก่า โบนัสต้อนรับ 100% โบนัสเติมเงินรายวัน คืนยอดเสีย และกิจกรรมพิเศษทุกสัปดาห์',
    action: 'ดูโปรโมชั่น',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'สิทธิพิเศษ VIP',
    description: 'รับสิทธิประโยชน์มุดพิเศษสำหรับสมาชิก VIP เจ้าหน้าที่ดูแลส่วนตัว โบนัสพิเศษ คืนยอดเสียสูงสุด 10% และของขวัญวันเกิด พร้อมสิทธิพิเศษอื่นๆ อีกมากมาย',
    action: 'สมัคร VIP',
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    icon: <Wallet className="h-8 w-8" />,
    title: 'วิธีการชำระเงิน',
    description: 'รองรับการชำระเงินหลากหลายช่องทาง ทั้งธนาคารชั้นนำทุกธนาคาร บัตรเครดิต/เดบิต E-Wallet และ True Money Wallet พร้อมระบบตรวจสอบอัตโนมัติ',
    action: 'ดูช่องทาง',
    gradient: 'from-teal-500 to-emerald-500'
  }
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
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export function ServiceDepartment() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects - Enhanced grid visibility */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            บริการลูกค้า สล็อต PG SLOT เว็บตรง
          </h2>
          <p className="text-lg text-muted-foreground">
            เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมระบบฝาก-ถอนออโต้ ตลอด 24 ชั่วโมง
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="relative overflow-hidden backdrop-blur-sm bg-card/50 border-muted/50">
                {/* Gradient Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`} />
                
                <div className="relative z-10 p-6">
                  <div className="mb-6">
                    <div className="p-3 inline-flex rounded-lg bg-primary/10 text-primary transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    {service.action}
                  </Button>
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