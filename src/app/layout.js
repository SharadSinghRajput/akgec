"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isAdminPath && <NavBar />}
        {children}
        {!isAdminPath && <Footer />}
      </body>
    </html>
  );
}
