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
const loginSchema = z.object({
  email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
  password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
});

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("การเข้าสู่ระบบล้มเหลว");
      }

      toast.success("เข้าสู่ระบบสำเร็จ");
      router.push("/");
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
        <title>เข้าสู่ระบบ - Login</title>
        <meta
          name="description"
          content="เข้าสู่ระบบเพื่อเข้าถึงฟีเจอร์ทั้งหมดใน My App"
        />
        <meta name="keywords" content="เข้าสู่ระบบ, ล็อกอิน, My App" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Login - เข้าสู่ระบบ",
              description: "เข้าสู่ระบบเพื่อเข้าถึงฟีเจอร์ทั้งหมดใน My App",
              url: "https://www.example.com/login",
              mainEntity: {
                "@type": "WebSite",
                name: "My App",
                url: "https://www.example.com",
              },
            }),
          }}
        />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="เข้าสู่ระบบ - Login" />
        <meta
          property="og:description"
          content="เข้าสู่ระบบเพื่อเข้าถึงฟีเจอร์ทั้งหมดใน My App"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/login" />
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
              เข้าสู่ระบบ
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              กรอกอีเมลและรหัสผ่านเพื่อเข้าสู่บัญชีของคุณ
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
                {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
              </Button>
            </form>
          </Form>
          <p className="text-center text-sm md:text-base text-muted-foreground">
            ยังไม่มีบัญชี?{" "}
            <Link
              href="/signup"
              className="font-medium underline hover:text-primary"
            >
              สมัครสมาชิก
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
