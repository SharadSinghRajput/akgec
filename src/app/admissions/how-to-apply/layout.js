import { Inter } from "next/font/google";
import"@/styles/globals.css";


// import AboutSideBar from './AboutSideBar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hostel | AKGEC",
  description: "Hostel",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      
      {children}
      
    </div>
  );
}
