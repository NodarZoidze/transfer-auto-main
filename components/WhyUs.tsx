"use client";

import Image from "next/image";
import React from "react";
import { whyUsOptions } from "@/constants";
import { useTranslations } from "next-intl";

const WhyUs = () => {
  const t = useTranslations("WhyUs");

  // ფუნქცია, რომელიც ობიექტის ინდექსის მიხედვით აბრუნებს შესაბამის თარგმანს
  const getFeatureContent = (index: number) => {
    const keys = [
      { title: "trustedTitle", desc: "trustedDesc" },
      { title: "pricingTitle", desc: "pricingDesc" },
      { title: "updatesTitle", desc: "updatesDesc" },
      { title: "teamTitle", desc: "teamDesc" }
    ];
    return keys[index];
  };

  return (
    <section className="w-full py-20 px-4" id="why-us">
      <div className="flex flex-col gap-5 text-start">
        <h3 className="text-[#252324] text-[36px] font-semibold">
          {t("title")}
        </h3>
        <p className="text-lg font-normal text-[#6E7375]">
          {t("description")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-[46px] mt-[46px]">
        <div className="flex flex-col gap-5">
          {whyUsOptions.map((option, index) => {
            const content = getFeatureContent(index);
            return (
              <div
                key={index}
                className="rounded-[16px] p-5 bg-[#FFFFFF] border border-[#E5F0FF]"
              >
                <div className="flex items-center gap-4 w-full md:w-[684px]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: option.bgColor }}
                  >
                    <Image src={option.icon} width={24} height={24} alt="icon" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-xl font-medium text-[#101828]">
                      {t(content.title)}
                    </h5>
                    <p className="text-base font-normal text-[#6E7375]">
                      {t(content.desc)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#F9F5FF] rounded-[16px] w-auto h-auto md:w-[550px] md:h-[468px] flex items-center justify-end">
          <Image
            src="/assets/trailer.png"
            alt="trailer"
            width={445}
            height={401}
            className="md:w-[445px] h-[401px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;