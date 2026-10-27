import type { Metadata } from "next";
import "./globals.css";
import { MotionEnhancer } from "./components/MotionEnhancer";

export const metadata: Metadata = {
  title: "DTA — дизайн, который работает",
  description: "DTA — визуальный образ бизнеса от логотипа до полноценной системы бренда.",
  icons: { icon: "/brand/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><MotionEnhancer />{children}</body></html>;
}
