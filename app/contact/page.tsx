import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import AboutSidebar from "../components/AboutSidebar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function page() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <AboutSidebar />
      <Banner page="Contact Us" />
      <Contact />
      <Footer />
    </main>
  );
}

export default page;
