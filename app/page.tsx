'use client';

import { HomeHero } from '@/components/sections/home-hero';
import { GameCategories } from '@/components/sections/game-categories';
import { Promotions } from '@/components/sections/promotions';
import { ServiceDepartment } from '@/components/sections/service-department';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Gamepad2, LogIn } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-6 w-6" />
            <span className="font-bold text-xl">K5Win</span>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="outline">
              Register
            </Button>
            <Button>
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HomeHero />
        <GameCategories />
        <Promotions />
        <ServiceDepartment />
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Gamepad2 className="h-6 w-6" />
              <span className="font-bold text-xl">K5Win</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} K5Win. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}