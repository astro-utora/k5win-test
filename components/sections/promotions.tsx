'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Gift, Percent, Users, Wallet } from 'lucide-react';

const promotions = [
  {
    icon: <Gift className="h-8 w-8" />,
    title: 'โบนัสต้อนรับ',
    description: 'รับโบนัส 100% สูงสุด $1,000 จากการฝากเงินครั้งแรก',
    code: 'WELCOME100',
  },
  {
    icon: <Percent className="h-8 w-8" />,
    title: 'เงินคืนรายวัน',
    description: 'รับเงินคืนรายวัน 10% จากการขาดทุนทั้งหมดของคุณ',
    code: 'CASHBACK10',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'แนะนำและรับรายได้',
    description: 'รับ $50 สำหรับเพื่อนแต่ละคนที่คุณแนะนำ',
    code: 'REFER50',
  },
  {
    icon: <Wallet className="h-8 w-8" />,
    title: 'โบนัสเติมเงิน',
    description: 'โบนัส 50% สำหรับการรีโหลดทุกครั้ง',
    code: 'RELOAD50',
  },
];

export function Promotions() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">โปรโมชั่นล่าสุด</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {promo.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                    <p className="text-muted-foreground mb-4">{promo.description}</p>
                    <div className="flex items-center justify-between">
                      <code className="px-2 py-1 bg-muted rounded text-sm">
                        {promo.code}
                      </code>
                      <Button variant="outline">รับสิทธิ์ทันที</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const runtime = "edge";