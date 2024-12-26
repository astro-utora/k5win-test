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
    title: 'Slots',
    description: 'Experience thrilling slot games with massive jackpots',
  },
  {
    icon: <Joystick className="h-8 w-8" />,
    title: 'Shoot Fish',
    description: 'Dive into exciting underwater shooting games',
  },
  {
    icon: <PlaySquare className="h-8 w-8" />,
    title: 'Card Games',
    description: 'Classic card games with modern twists',
  },
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: 'Live Casino',
    description: 'Real-time casino experience with live dealers',
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: 'Sports',
    description: 'Bet on your favorite sports events worldwide',
  },
  {
    icon: <Swords className="h-8 w-8" />,
    title: 'Cockfighting',
    description: 'Traditional cockfighting betting platform',
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'Esports',
    description: 'Bet on popular competitive gaming tournaments',
  },
  {
    icon: <Ticket className="h-8 w-8" />,
    title: 'Lottery',
    description: 'Daily lottery draws with huge prizes',
  },
  {
    icon: <Bitcoin className="h-8 w-8" />,
    title: 'Blockchain',
    description: 'Crypto-based games and betting options',
  },
];

export function GameCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Games</h2>
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