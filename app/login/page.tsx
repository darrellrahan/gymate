import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MobileNavbar from "../components/MobileNavbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import AboutSidebar from "../components/AboutSidebar";

function page() {
  return (
    <main className="bg-[url('/images/bg/bg.jpg')] bg-[50%] bg-no-repeat bg-cover">
      <Header />
      <MobileNavbar />
      <AboutSidebar />
      <Banner page="Login" />
      <Form />
      <Footer />
    </main>
  );
}

export default page;
