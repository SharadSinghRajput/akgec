import Home from "./Home";
import NewsEvents from "./NewsEvents";
import Menu from "./Components/NavBar";
import Footer from "./Components/Footer";


export default function HomePage({ children }) {
  return (
    <div>
        <Menu />
      <main className="flex-grow bg-orange-50">{children || <Home />}</main>
        <Footer />
    </div>
  );
}