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
  HelpCircle
} from 'lucide-react';

const services = [
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: 'การสนับสนุนตลอด 24 ชม.',
    description: 'ทีมงานเฉพาะของเราพร้อมช่วยเหลือคุณเสมอ',
    action: 'ติดต่อฝ่ายสนับสนุน',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'แชทสด',
    description: 'รับคำตอบทันทีผ่านบริการแชทสดของเรา',
    action: 'เริ่มแชท',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'การเล่นเกมที่ปลอดภัย',
    description: 'สภาพแวดล้อมการเล่นเกมที่มีใบอนุญาตและควบคุม',
    action: 'เรียนรู้เพิ่มเติม',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'การถอนเงินอย่างรวดเร็ว',
    description: 'ดำเนินการถอนเงินภายใน 15 นาที',
    action: 'ดูวิธีการ',
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: 'โซลูชันการชำระเงิน',
    description: 'มีตัวเลือกการชำระเงินที่ปลอดภัยหลายแบบ',
    action: 'ดูตัวเลือก',
  },
  {
    icon: <HelpCircle className="h-8 w-8" />,
    title: 'คำถามที่พบบ่อย',
    description: 'ค้นหาคำตอบสำหรับคำถามที่พบบ่อย',
    action: 'ดูคำถามที่พบบ่อย',
  },
];

export function ServiceDepartment() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">ฝ่ายบริการลูกค้า</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" className="w-full">
                  {service.action}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const runtime = "edge";