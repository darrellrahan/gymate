import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

function page() {
  return (
    <main>
      <Header />
      <Banner page="Register" />
    </main>
  );
}

export default page;
