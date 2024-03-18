import React, { useEffect } from "react";
import Features from "../home-components/Features";
import Banner from "../home-components/Banner";
import SecBanner from "../home-components/SecBanner";
import ThrBanner from "../home-components/ThrBanner";
import TopSection from "../home-components/TopSection";
import Products from "../home-components/Products";


function Home() {
  
  return (
    <main>
      <TopSection />
      <Features />
      <Products />
      <Banner />
      <SecBanner />
      <ThrBanner />
    </main>
  );
}

export default Home;
