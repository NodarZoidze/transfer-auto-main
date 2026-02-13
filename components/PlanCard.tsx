"use client";

import { FaRoute, FaClock, FaTruck } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { LuArrowRight } from "react-icons/lu";
import { TiLocation } from "react-icons/ti";
import ReservationBtn from "./ReservationBtn";
import { useTranslations } from "next-intl";

const PlanCard = ({
  distance,
  arrivalTime,
  service,
  price,
  fromLocation,
  toLocation,
  bgColor = "#EEE1FE",
  iconColor = "#0A69FA",
}: PlanCardProps) => {
  const t = useTranslations("PopularRoutes");

  return (
    <div className="w-[343px] md:w-[405px] flex-1 p-5 bg-white rounded-lg shadow-md space-y-6">
      <div
        className="flex items-center justify-between px-5 py-4 rounded-[12px] relative"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-2 items-center">
              <div className="z-5 w-[54px] h-[54px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                <TiLocation
                  size={26}
                  style={{
                    color: iconColor,
                  }}
                />
              </div>
            </div>

            <div className="flex-1 relative">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] h-[2px]"
                style={{
                  backgroundImage: `linear-gradient(to right, ${iconColor} 50%, rgba(255,255,255,0) 0%)`,
                  backgroundPosition: "bottom",
                  backgroundSize: "15px 1px",
                  backgroundRepeat: "repeat-x",
                }}
              />

              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26px] h-[26px] rounded-full text-white flex items-center justify-center"
                style={{ backgroundColor: iconColor }}
              >
                <LuArrowRight size={20} />
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="z-5 w-[54px] h-[54px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                <TiLocation
                  size={26}
                  style={{
                    color: iconColor,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-between">
            <span className="text-lg font-medium text-[#252324]">
              {fromLocation}
            </span>
            <span className="text-lg font-medium text-[#252324]">
              {toLocation}
            </span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 text-base font-normal">
        <div className="flex items-center gap-3 text-[#252324]">
          <FaRoute className="text-[#6E7375]" size={24} />
          <span className="text-[#6E7375]">{t('distance')}</span> {distance}კმ
        </div>
        <div className="flex items-center gap-3 text-[#252324]">
          <FaClock className="text-[#6E7375]" size={24} />
          <span className="text-[#6E7375]">{t('deliveryTime')}</span> {arrivalTime}
        </div>
        <div className="flex items-center gap-3 text-[#252324]">
          <FaTruck className="text-[#6E7375]" size={24} />
          <span className="text-[#6E7375]">{t('service')}</span> {service}
        </div>
      </div>

      <Separator className="text-[#E9E9E9] my-6" />

      {/* Price section */}
      <div className="flex items-center gap-[32px]">
        <div className="w-fit min-w-[60px]">
          <p className="text-sm text-[#6E7375]">{t('price')}</p>
          <p className="text-2xl font-semibold text-[#252324]">₾{price}</p>
        </div>
        <ReservationBtn className="flex-1 bg-[#F0EDFF] text-[#6A04FE] font-medium rounded-full hover:bg-[#F0EDFF] cursor-pointer h-12" />
      </div>
    </div>
  );
};

export default PlanCard;