import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, Coins, DollarSign, Gift, HeartHandshake, MessageSquare, Package, PlayIcon as Poker, Trophy, Users, Wallet } from 'lucide-react'

const navItems = [
  {
    title: "โทเค็น BC",
    value: "$0.007893",
    change: "0.19%",
    positive: true,
    icon: Coins,
  },
  {
    title: "โป๊กเกอร์ BC",
    isNew: true,
    icon: Poker,
  },
  {
    title: "คาสิโน",
    hasDropdown: true,
    icon: DollarSign,
  },
  {
    title: "กีฬา",
    hasDropdown: true,
    icon: Trophy,
  },
  {
    title: "หวย",
    hasDropdown: true,
    icon: Gift,
  },
  {
    title: "เทรดคริปโต",
    hasDropdown: true,
    icon: Wallet,
  },
  {
    title: "โปรโมชั่น",
    hasDropdown: true,
    icon: Package,
  },
  {
    title: "วีไอพี",
    icon: Users,
  },
  {
    title: "โบนัส",
    icon: Gift,
  },
  {
    title: "แนะนำเพื่อน",
    icon: HeartHandshake,
  },
  {
    title: "ฟอรั่ม",
    icon: MessageSquare,
    isExternal: true,
  },
]

export function MainNav() {
  return (
    <nav className="hidden md:flex md:flex-col space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.title}
          href="#"
          className={cn(
            "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800",
            item.title === "แนะนำเพื่อน" && "bg-gray-800 text-green-400"
          )}
        >
          <item.icon className="w-5 h-5 mr-3" />
          <span className="flex-1">{item.title}</span>
          {item.value && (
            <span
              className={cn(
                "text-sm",
                item.positive ? "text-green-400" : "text-red-400"
              )}
            >
              {item.value}
              <span className="ml-1">
                {item.positive ? "↑" : "↓"} {item.change}
              </span>
            </span>
          )}
          {item.isNew && (
            <span className="ml-2 text-xs bg-green-400 text-black px-1.5 py-0.5 rounded">
              ใหม่
            </span>
          )}
          {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-2" />}
          {item.isExternal && (
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </Link>
      ))}
    </nav>
  )
}

