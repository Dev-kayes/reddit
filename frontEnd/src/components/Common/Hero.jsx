import React from "react";
import heroImage from "../../../assets/rabbit-hero.webp";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <img
          src={heroImage}
          alt="heroImage"
          className="w-full object-cover h-100 md:h-150 lg:h-187.5"
        />
        <div className="absolute inset-0 bg-black items-center flex justify-center opacity-40">
          <div className="bg-black text-white text-center p-6">
            <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4 ">
              Vacation <br /> Ready
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Explore your vacation-ready outfit with fast worldwide shipping
            </p>
            <button className="bg-white text-black text-2xl p-3 rounded cursor-pointer hover:opacity-80 transition-[200ms]">
              <Link to={"#"}>Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
