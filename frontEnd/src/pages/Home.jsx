import React from "react";
import Hero from "../components/Common/Hero";
import GenderCollectionSection from "../products/GenderCollectionSection";
import NewArrivals from "../products/NewArrivals";

const Home = () => {
  return (
    <section>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
    </section>
  );
};

export default Home;
