import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ajay Kumar Garg Engineering College (AKGEC) | Top Private Engineering Colleges in Ghaziabad UP (Delhi NCR)",
  description: "AKGEC is one of the top engineering colleges in UP, Delhi NCR with excellent academic results, best placement, world-class infrastructure and Faculty.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}