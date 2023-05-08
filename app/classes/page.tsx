import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import AboutSidebar from "../components/AboutSidebar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FeaturedClass from "../components/FeaturedClass";

function page() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <AboutSidebar />
      <Banner page="Classes" />
      <FeaturedClass />
      <Footer />
    </main>
  );
}

export default page;
