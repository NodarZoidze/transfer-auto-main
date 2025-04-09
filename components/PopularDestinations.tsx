import React from "react";
import PlanCard from "./PlanCard";

const PopularDestinations = () => {
  return (
    <section
      className="relative bg-grid-dot w-full bg-[#F9F5FF] py-20 px-4"
      id="directions"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-[#252324] text-[36px] font-semibold">
        Popular Port-to-City Transport Routes
        </h3>
        <p className="text-lg font-normal text-[#6E7375]">
        Choose the route that fits your needs — fast, secure car delivery from port to your destination, with transparent pricing
        </p>
      </div>

      <div className="mt-[42px] flex flex-col md:flex-row w-full gap-5 items-center md:gap-8">
        <PlanCard
          fromLocation="Poti"
          toLocation="Tbilisi"
          distance={300}
          arrivalTime="1-2 day"
          service="everyday"
          price={350}
          bgColor="#EEE1FE"
          iconColor="#6A04FE"
        />
        <PlanCard
          fromLocation="Poti"
          toLocation="Batumi"
          distance={70}
          arrivalTime="1-2 day"
          service="everyday"
          price={200}
          bgColor="#E5F0FF"
          iconColor="#0A69FA"
        />
        <PlanCard
          fromLocation="Batumi"
          toLocation="Tbilisi"
          distance={70}
          arrivalTime="1-2 day"
          service="everyday"
          price={500}
          bgColor="#D7F5E5"
          iconColor="#038557"
        />
      </div>
    </section>
  );
};

export default PopularDestinations;
