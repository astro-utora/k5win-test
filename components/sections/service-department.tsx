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
    title: '24/7 Support',
    description: 'Our dedicated team is always here to help you',
    action: 'Contact Support',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'Live Chat',
    description: 'Get instant responses through our live chat service',
    action: 'Start Chat',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Secure Gaming',
    description: 'Licensed and regulated gaming environment',
    action: 'Learn More',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Quick Withdrawals',
    description: 'Process withdrawals within 15 minutes',
    action: 'View Methods',
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: 'Payment Solutions',
    description: 'Multiple secure payment options available',
    action: 'See Options',
  },
  {
    icon: <HelpCircle className="h-8 w-8" />,
    title: 'FAQ',
    description: 'Find answers to common questions',
    action: 'View FAQ',
  },
];

export function ServiceDepartment() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Customer Service</h2>
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