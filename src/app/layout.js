"use client";

import "@/styles/globals.css";

import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {!isAdminPath && <NavBar />}
        {children}
        {!isAdminPath && <Footer />}
      </body>
    </html>
  );
}
