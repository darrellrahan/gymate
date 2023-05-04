import AboutSidebar from "./components/AboutSidebar";
import FeaturedClass from "./components/FeaturedClass";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <AboutSidebar />
      <Hero />
      <WhoWeAre />
      <FeaturedClass />
      <Footer />
    </main>
  );
}
