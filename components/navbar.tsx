
import { HomeHero } from '@/components/sections/home-hero';
import { GameCategories } from '@/components/sections/game-categories';
import { Promotions } from '@/components/sections/promotions';
import { ServiceDepartment } from '@/components/sections/service-department';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Gamepad2, LogIn, MessageCircle, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from 'next/link';

const Navbar = ()=>{
    return(
        <>
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-6 w-6" />
            <span className="font-bold text-xl">K5Win</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Link href='/signup'>
            <Button variant="outline">
              ลงทะเบียน
            </Button>
            </Link>
            <Link href='/login'>
            <Button>
              <LogIn className="mr-2 h-4 w-4" />
              เข้าสู่ระบบ
            </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Button variant="outline" className="w-full justify-start">
                    ลงทะเบียน
                  </Button>
                  <Button className="w-full justify-start">
                    <LogIn className="mr-2 h-4 w-4" />
                    เข้าสู่ระบบ
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar