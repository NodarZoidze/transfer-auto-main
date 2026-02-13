import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import TransportType from "@/components/TransportType";
import WhyUs from "@/components/WhyUs";
import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Hero />
        <TransportType />
      </div>

      {/* Full-width background with grid dots & radial mask */}
      <div className="bg-[#F9F5FF] w-full  bg-grid-dot relative overflow-hidden">
        <div className="max-w-7xl mx-auto ">
          <PopularDestinations />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <WhyUs />
      </div>

      <div className="bg-[#F9F5FF] w-full bg-mask-radial-sides bg-grid-dot relative">
        <div className="max-w-7xl mx-auto">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default MainPage;
