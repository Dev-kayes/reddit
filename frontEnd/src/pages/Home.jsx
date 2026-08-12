import React from "react";
import Hero from "../components/Common/Hero";
import GenderCollectionSection from "../products/GenderCollectionSection";
import NewArrivals from "../products/NewArrivals";
import BestSeller from "../products/BestSeller";
import ProductDetails from "../products/ProductDetails";

const Home = () => {
  return (
    <section>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      <BestSeller />
      <ProductDetails />
    </section>
  );
};

export default Home;
