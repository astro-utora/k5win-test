"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// Define validation schema
const signUpSchema = z.object({
  username: z.string().min(3, "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร"),
  email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
  password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
});

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("การสมัครสมาชิกล้มเหลว");
      }

      toast.success(
        "สร้างบัญชีสำเร็จ! กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชีของคุณ"
      );
      router.push("/login");
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <>
        {/* SEO Meta Tags */}
        <title>สมัครสมาชิก - Sign Up</title>
        <meta
          name="description"
          content="สมัครสมาชิกเพื่อเข้าถึงฟีเจอร์ทั้งหมดใน My App"
        />
        <meta name="keywords" content="สมัครสมาชิก, ลงทะเบียน, My App" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Sign Up - สมัครสมาชิก",
              description: "สมัครสมาชิกเพื่อเข้าถึงฟีเจอร์ทั้งหมดใน My App",
              url: "https://www.example.com/signup",
              mainEntity: {
                "@type": "WebSite",
                name: "My App",
                url: "https://www.example.com",
              },
            }),
          }}
        />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="สมัครสมาชิก - Sign Up" />
        <meta
          property="og:description"
          content="สมัครสมาชิกเพื่อเข้าถึงฟีเจอร์ทั้งหมดใน My App"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/signup" />
        <meta
          property="og:image"
          content="https://www.example.com/og-image.jpg"
        />
      </>

      <Navbar />
      <main className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-10">
        <div className="w-full max-w-[500px] mx-auto space-y-6 bg-card p-8 rounded-lg shadow-lg border border-border">
          <div className="space-y-3 text-center">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              สมัครสมาชิก
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              กรุณากรอกข้อมูลด้านล่างเพื่อสร้างบัญชีของคุณ
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
              aria-busy={isLoading}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อผู้ใช้</FormLabel>
                    <FormControl>
                      <Input placeholder="ชื่อผู้ใช้ของคุณ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>อีเมล</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        {...field}
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
                    <FormLabel>รหัสผ่าน</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="รหัสผ่านของคุณ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
              </Button>
            </form>
          </Form>
          <p className="text-center text-sm md:text-base text-muted-foreground">
            มีบัญชีอยู่แล้ว?{" "}
            <Link
              href="/login"
              className="font-medium underline hover:text-primary"
            >
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
