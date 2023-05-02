import AboutSidebar from "./components/AboutSidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <AboutSidebar />
      <Hero />
      <Footer />
    </main>
  );
}
