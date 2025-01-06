import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Gamepad2, LogIn, MessageCircle, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const Footer = ()=>{
    return(
       
        <footer className="relative overflow-hidden border-t bg-background/80 backdrop-blur-sm w-full">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background w-full" />
        
        <div className="w-full px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Gamepad2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  K5Win
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                เว็บตรงสล็อต ให้บริการ สล็อต pg และ pg slot เว็บตรง พร้อมระบบฝาก-ถอนออโต้
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">ลิงก์ด่วน</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors">
                  <a href="#">หน้าแรก</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">โปรโมชั่น</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">เกมทั้งหมด</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">ติดต่อเรา</a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold">ช่วยเหลือ</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors">
                  <a href="#">คำถามที่พบบ่อย</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">วิธีการเล่น</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">กฎและเงื่อนไข</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">นโยบายความเป็นส่วนตัว</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold">ติดต่อเรา</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>แชทสด 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@k5win.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>1234-5678</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} K5Win. สงวนลิขสิทธิ์.
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer