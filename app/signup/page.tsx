'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from 'react-toastify'
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

// Define validation schema using Zod
const signUpSchema = z.object({
  username: z.string().min(3, 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร'),
  email: z.string().email('กรุณากรอกอีเมลให้ถูกต้อง'),
  password: z.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
})

export default function SignUpPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  // Handle form submission
  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    try {
      setIsLoading(true)
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('การสมัครสมาชิกล้มเหลว')
      }

      toast.success('สร้างบัญชีสำเร็จ! กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชีของคุณ')
      router.push('/login')
    } catch (error) {
      toast.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-[130px]">
      {/* Form Container */}
      <div className="w-full max-w-[500px] mx-auto space-y-6 bg-card p-8 rounded-lg shadow-lg border border-border mt-10 md:mt-0">
        
        {/* Title and Description */}
        <div className="space-y-3 text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">สมัครสมาชิก</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            กรุณากรอกข้อมูลด้านล่างเพื่อสร้างบัญชีของคุณ
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">ชื่อผู้ใช้</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="ชื่อผู้ใช้ของคุณ" 
                      {...field} 
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
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

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">รหัสผ่าน</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="รหัสผ่านของคุณ" 
                      type="password" 
                      {...field} 
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Link href='/home'>
            <Button 
              className="w-full h-11 text-base font-medium mt-5" 
              type="submit" 
              disabled={isLoading}
            >
              {isLoading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
            </Button>
            </Link>
          </form>
        </Form>

        {/* Login Redirect */}
        <p className="text-center text-sm md:text-base text-muted-foreground pt-2">
          มีบัญชีอยู่แล้ว?{' '}
          <Link 
            href="/login" 
            className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            เข้าสู่ระบบ
          </Link>
        </p>
      </div>

      
    </div>
    {/* Footer */}
    <Footer />
    </>
  )
}
