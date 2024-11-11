import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

const metaData = {
  title: "Ajay Kumar Garg University (AKGU) | One of the Top Private University in Ghaziabad, Delhi NCR",
  description: "AKGU is one of the top engineering colleges in UP, Delhi NCR with excellent academic results, best placement, world-class infrastructure and Faculty.",
  keywords: "AKGU, University, Ghaziabad, Delhi NCR, top private engineering colleges, best placements, world-class infrastructure",
  bannerImage: "/image/building.jpg",
  app_id: "",
  logoUrl: "",
  path: "https://www.akgec.ac.in/",
  description: "Ajay Kumar Garg University, Ghaziabad, is a top-ranked University offering cutting-edge programs, modern facilities, and excellent career opportunities.",
  componentToShow: "HomePage",
  breadcrumb: { path: "", name: "Home" },
  title: "Ajay Kumar Garg University (AKGU)",
  shortDesc: "One of the Top Private University in Delhi NCR, Ghaziabad",
};


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