"use client";

import "@/styles/globals.css";

import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import useStickyBar from "@/hooks/useStickyBar";
import { usePathname } from "next/navigation";
import { StickyFooter } from "@/Components";



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showStickyBar = useStickyBar();
  const isAdminPath = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {!isAdminPath && <NavBar />}
        {children}
        {!isAdminPath && <StickyFooter ShowState={showStickyBar} />}
        {!isAdminPath && <Footer />}
      </body>
    </html>
  );
}
