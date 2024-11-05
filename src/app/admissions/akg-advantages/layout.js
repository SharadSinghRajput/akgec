import { Inter } from "next/font/google";
import"@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hostel | AKGU",
  description: "Hostel",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}
