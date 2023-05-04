import AboutSidebar from "./components/AboutSidebar";
import FeaturedClass from "./components/FeaturedClass";
import Footer from "./components/Footer";
import GymTrainers from "./components/GymTrainers";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <AboutSidebar />
      <Hero />
      <WhoWeAre />
      <FeaturedClass />
      <WhyChooseUs />
      <GymTrainers />
      <Footer />
    </main>
  );
}
