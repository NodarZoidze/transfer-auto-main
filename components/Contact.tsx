"use client";

import { contactOptions } from "@/constants";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  // ფუნქცია, რომელიც ინდექსის მიხედვით აბრუნებს შესაბამისი თარგმანის გასაღებებს
  const getContactContent = (index: number) => {
    const keys = [
      { title: "emailTitle", desc: "emailDesc" }, // ინდექსი 0: Email
      { title: "visitTitle", desc: "visitDesc" }, // ინდექსი 1: Visit Us
      { title: "callTitle", desc: "callDesc" }    // ინდექსი 2: Call Us
    ];
    return keys[index];
  };

  return (
    <section
      className="max-w-7xl mx-auto bg-[#F9F5FF] py-20 relative bg-grid-dot px-4"
      id="contact"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-[#252324] text-[36px] font-semibold">
          {t("title")}
        </h3>
        <p className="text-lg font-normal text-[#6E7375]">
          {t("description")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 mt-16">
        {contactOptions.map((option, index) => {
          const content = getContactContent(index);

          return (
            <div
              key={index}
              className="flex-1 w-full p-6 bg-[#FFFFFF] rounded-2xl"
            >
              <div className="flex flex-col gap-6">
                <div className="w-9 h-9 bg-[#EEE1FE] rounded-full flex items-center justify-center">
                  <Image src={option.icon} width={24} height={24} alt="icon" />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-base text-[#252324]">
                      {t(content.title)}
                    </h5>
                    <p className="text-sm text-[#6E7375] font-normal">
                      {t(content.desc)}
                    </p>
                  </div>

                  <span className="text-[#6A04FE] font-semibold text-base">
                    {/* კონტაქტის ინფორმაციას (ნომერი/იმეილი) ვტოვებთ როგორც არის */}
                    {option.contactInfo}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;