"use client";
import { Inter } from "next/font/google";
import "../../../../src/app/globals.css";
import Navbar from '../../Components/NavBar'
import Footer from '../../Components/Footer'

// import AboutSideBar from './AboutSideBar'

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}
