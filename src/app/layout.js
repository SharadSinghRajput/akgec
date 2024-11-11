import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}