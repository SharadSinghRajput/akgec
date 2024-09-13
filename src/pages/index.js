import Home from "./Home";
import NewsEvents from "./Components/NewsEvents";
import Menu from "./Components/NavBar";
import Footer from "./Components/Footer";


export default function HomePage({ children }) {
  return (
    <div>
        <Menu />
      <main className="flex-grow">{children || <Home />}</main>
        <Footer />
    </div>
  );
}