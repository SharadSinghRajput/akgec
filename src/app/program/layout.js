import { Inter } from "next/font/google";
import "../../app/globals.css";
import Navbar from '../Components/NavBar'
import Footer from '../Components/Footer'

// import AboutSideBar from './AboutSideBar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Program | AKGEC",
  description: "Program | AKGEC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
