import Image from "next/image";
import React from "react";
import ReservationBtn from "./ReservationBtn";
import { getTranslations } from "next-intl/server";

const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <section
      className="w-full py-20 pt-40 flex flex-col md:flex-row gap-[30px] md:gap-0 items-center justify-between px-4"
      id="home"
    >
      <div className="flex-1">
        <div className="max-w-[560px]">
          <h2 className="text-[36px] md:text-[54px] font-semibold text-[#252324]">
            {t("weTransport")}
          </h2>
          <p className="mt-4 text-gray-600 text-lg">{t("deliveryTracking")}</p>

          <ReservationBtn />
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center overflow-hidden">
        <div className="relative w-auto sm:w-[500px] md:w-[800px] rotate-[7.27deg]">
          <Image
            src="/assets/map.png"
            alt={t("selectTransportType")}
            width={800}
            height={480}
            className="relative z-10 w-auto sm:w-[500px] md:w-[800px]"
          />
        </div>

        {/* Blur Overlay for both sides */}
        <div className="absolute left-0 top-0 h-full w-[150px] bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-[150px] bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
