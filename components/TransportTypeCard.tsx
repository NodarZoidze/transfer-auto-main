import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ReservationBtn from "./ReservationBtn";

const TransportTypeCard = ({
  transportType,
  text,
  image,
  styles,
  id,
}: TransportTypeCardTypes) => {
  return (
    <div className="pt-4 pr-4 pb-4 pl-5 gap-4 rounded-lg border">
      <div className="flex flex-col xs:flex-row items-center gap-4">
        <div className="max-w-full xs:max-w-[326px] flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl text-medium text-[#252324]">
              {transportType}
            </h4>
            <p className="text-[#6E7375] text-sm text-normal">{text}</p>
          </div>

          <ReservationBtn className="bg-[#F0EDFF] hover:bg-[#F0EDFF] text-[#7500FF] font-bold text-sm py-3 px-[14px] rounded-full flex items-center gap-1 w-fit h-10">
            დაჯავშნა
            <ArrowRight size={16} />
          </ReservationBtn>
        </div>

        <div
          style={{
            backgroundColor: styles.bg,
          }}
          className="w-full xs:w-[250px] h-[168px] rounded-[12px] flex items-center justify-center"
        >
          <Image
            src={image}
            alt="car-img"
            width={232}
            height={135}
            className={`${
              id === 2
                ? "w-[150px] h-[127px] xs:w-[162px] xs:h-[132px]"
                : "w-[205px] xs:w-[232px] h-[121px] xs:h-p135px]"
            } object-contain`}
          />
        </div>
      </div>
    </div>
  );
};

export default TransportTypeCard;
