'use client'

import type { JSX } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface RewardCardProps {
  title: string
  amount: string
  description: string
  imageSrc: string
}

export function RewardCard({
  title,
  amount,
  description,
  imageSrc,
}: RewardCardProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex flex-col md:flex-row md:items-baseline gap-2">
          <span>รับ</span>
          <span className="text-green-400">{amount}</span>
        </CardTitle>
        <p className="text-muted-foreground">{title}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
          <p className="text-sm text-muted-foreground md:max-w-[60%] text-center md:text-left">
            {description}
          </p>
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src={imageSrc}
              alt="ภาพประกอบรางวัล"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

