"use client";

import React from "react";
import PlanCard from "./PlanCard";
import { useTranslations } from "next-intl";

const PopularDestinations = () => {
  const t = useTranslations("PopularRoutes");

  return (
    <section
      className="relative bg-grid-dot w-full bg-[#F9F5FF] py-20 px-4"
      id="directions"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-[#252324] text-[36px] font-semibold">
          {t("title")} {/* ნათარგმნი სათაური */}
        </h3>
        <p className="text-lg font-normal text-[#6E7375]">
          {t("description")} {/* ნათარგმნი აღწერა */}
        </p>
      </div>

      <div className="mt-[42px] flex flex-col md:flex-row w-full gap-5 items-center md:gap-8">
        <PlanCard
          fromLocation={t("poti")}
          toLocation={t("tbilisi")}
          distance={300}
          arrivalTime={`1-2 ${t("days")}`}
          service={t("everyday")}
          price={320}
          bgColor="#EEE1FE"
          iconColor="#6A04FE"
        />
        <PlanCard
          fromLocation={t("poti")}
          toLocation={t("batumi")}
          distance={70}
          arrivalTime={`1-2 ${t("days")}`}
          service={t("everyday")}
          price={180}
          bgColor="#E5F0FF"
          iconColor="#0A69FA"
        />
        <PlanCard
          fromLocation={t("batumi")}
          toLocation={t("tbilisi")}
          distance={370}
          arrivalTime={`1-2 ${t("days")}`}
          service={t("everyday")}
          price={500}
          bgColor="#D7F5E5"
          iconColor="#038557"
        />
      </div>
    </section>
  );
};

export default PopularDestinations;