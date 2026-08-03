import React from "react";
import menCollection from "../../assets/mens-collection.webp";
import womenCollection from "../../assets/womens-collection.webp";
import { Link } from "react-router";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto gap-8 flex flex-col md:flex-row">
        {/* women's collection */}
        <div className="flex-1 relative">
          <img
            src={womenCollection}
            alt="womenCollection"
            className="w-full h-175 object-cover"
          />
          <div className="bottom-8 left-8 absolute bg-white text-2xl font-bold opacity-35 p-4 hover:opacity-90">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to={"/collection/all?gender=women"}
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* men's collection */}
        <div className="flex-1 relative ">
          <img
            src={menCollection}
            alt="womenCollection"
            className="w-full h-175 object-cover"
          />
          <div className="bottom-8 left-8 absolute bg-white text-2xl font-bold opacity-35 p-4 hover:opacity-90">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to={"/collection/all?gender=men"}
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
