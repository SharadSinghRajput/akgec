import { Inter } from "next/font/google";
import "../../../globals.css";
import Navbar from '../../../Components/NavBar'
import Footer from '../../../Components/Footer'

// import AboutSideBar from './AboutSideBar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Academic Calendar",
  description: "Academic Calendar",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}
