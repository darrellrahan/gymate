import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import AboutSidebar from "../components/AboutSidebar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import WhoWeAreAbout from "../components/WhoWeAreAbout";

function page() {
  return (
    <main className="bg-[url('/images/bg/bg.jpg')] bg-[50%] bg-no-repeat bg-cover">
      <Header />
      <MobileNavbar />
      <AboutSidebar />
      <Banner page="About Us" />
      <WhoWeAreAbout />
      <Footer />
    </main>
  );
}

export default page;
