import React from "react";
import Hero from "../components/Common/Hero";
import GenderCollectionSection from "../products/GenderCollectionSection";
import NewArrivals from "../products/NewArrivals";
import BestSeller from "../products/BestSeller";
import YouMayLike from "../products/YouMayLike";
import TopWearForWomen from "./../products/TopWearForWomen";

const Home = () => {
  return (
    <section>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      <BestSeller />
      <YouMayLike />
      <TopWearForWomen />
    </section>
  );
};

export default Home;
