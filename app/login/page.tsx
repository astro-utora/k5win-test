'use client'

import { FC } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const loginSchema = z.object({
  email: z.string().email('กรุณากรอกอีเมลให้ถูกต้อง'),
  password: z.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
})

const LoginPage: FC = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true)
    // Add your login logic here
    setIsLoading(false)
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 md:py-16 lg:py-20">
      <div className="w-full max-w-[500px] mx-auto space-y-6 bg-card p-8 rounded-lg shadow-lg border border-border mt-10 md:mt-0">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">เข้าสู่ระบบ</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            กรุณากรอกข้อมูลด้านล่างเพื่อเข้าสู่ระบบ
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">อีเมล</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      type="email" 
                      {...field} 
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">รหัสผ่าน</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="กรอกรหัสผ่าน" 
                      type="password" 
                      {...field} 
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link href='/home'>
            <Button 
              className="w-full h-11 text-base font-medium mt-5" 
              type="submit" 
              disabled={isLoading}
            >
              {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </Button>
            </Link>
          </form>
        </Form>

        <p className="text-center text-sm md:text-base text-muted-foreground pt-2">
          ยังไม่มีบัญชี?{' '}
          <Link 
            href="/signup" 
            className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            สมัครสมาชิก
          </Link>
        </p>
      </div>
    </div>
    <Footer/>
</>
  )
}

export default LoginPage