import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronDown, Coins, DollarSign, Gift, HeartHandshake, MessageSquare, Package, PlayIcon as Poker, Trophy, Users, Wallet } from 'lucide-react'

const navItems = [
  {
    title: "BC Token",
    value: "$0.007893",
    change: "0.19%",
    positive: true,
    icon: Coins,
  },
  {
    title: "BC Poker",
    isNew: true,
    icon: Poker,
  },
  {
    title: "Casino",
    hasDropdown: true,
    icon: DollarSign,
  },
  {
    title: "Sports",
    hasDropdown: true,
    icon: Trophy,
  },
  {
    title: "Lottery",
    hasDropdown: true,
    icon: Gift,
  },
  {
    title: "Crypto Trading",
    hasDropdown: true,
    icon: Wallet,
  },
  {
    title: "Promotions",
    hasDropdown: true,
    icon: Package,
  },
  {
    title: "VIP Club",
    icon: Users,
  },
  {
    title: "Bonus",
    icon: Gift,
  },
  {
    title: "Affiliate",
    icon: HeartHandshake,
  },
  {
    title: "Forum",
    icon: MessageSquare,
    isExternal: true,
  },
]

export function MobileLeftNav() {
  return (
    <nav className="md:hidden fixed left-0 top-0 bottom-0 w-16 bg-gray-900 border-r border-gray-800 overflow-y-auto">
      <div className="flex flex-col items-center py-4 space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href="#"
            className={cn(
              "flex flex-col items-center justify-center w-12 h-12 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800",
              item.title === "Affiliate" && "bg-gray-800 text-green-400"
            )}
          >
            <item.icon className="w-6 h-6" />
            <span className="sr-only">{item.title}</span>
            {item.isNew && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}
