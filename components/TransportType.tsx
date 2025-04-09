import { transportOptions } from "@/constants";
import React from "react";
import TransportTypeCard from "./TransportTypeCard";

const TransportType = () => {
  return (
    <section className="w-full py-20 px-4" id="services">
      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-[#252324] text-[36px] font-semibold">
        Our Specialized Car Transport Services
        </h3>
        <p className="text-lg font-normal text-[#6E7375]">
        We offer secure and efficient transport for every type of vehicle — from sedans and SUVs to motorcycles and vans
        </p>
      </div>

      <div className="mt-[46px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {transportOptions.map((option, index) => (
          <TransportTypeCard
            key={option.id}
            transportType={option.transportType as transportType}
            text={option.text}
            image={option.image}
            styles={option.styles}
            id={option.id}
          />
        ))}
      </div>
    </section>
  );
};

export default TransportType;
