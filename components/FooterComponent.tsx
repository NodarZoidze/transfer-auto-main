"use client";

import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { navLinks } from "@/constants";
import { useTranslations } from "next-intl";

const FooterComponent = () => {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Header.navLinks");

  return (
    <div className="px-4">
      <footer className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-start md:items-center justify-between py-16">
          <Image
            src="/assets/Logo.png"
            alt="header logo"
            width={170}
            height={20}
            className="cursor-pointer"
          />

          <div className="h-[96px] md:h-auto w-[343px] md:w-auto flex flex-wrap items-center md:gap-[42px]">
            {navLinks.map(({ label, href, id }) => {
              return (
                <span
                  key={href}
                  className="p-3 rounded-[99px] text-sm md:text-base font-normal md:font-medium transition-colors text-[#252324]"
                >
                  {/* ვიყენებთ Header-ის თარგმანებს ლინკებისთვის */}
                  {tNav(id)}
                </span>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Image
              src="/assets/Twitter.png"
              alt="twitter"
              width={24}
              height={24}
            />
            <Image
              src="/assets/Dribbble.png"
              alt="dribbble"
              width={24}
              height={24}
            />
            <Image
              src="/assets/Linkedin.png"
              alt="linkedin"
              width={24}
              height={24}
            />
          </div>
        </div>

        <Separator className="text-gray-400" />

        <div className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8">
          <span className="text-normal text-[#6E7375]">
            {t("rights")}
          </span>
          <p className="text-normal text-[#6E7375]">
            {t("terms")}
          </p>
          <div className="flex md:hidden items-center gap-4">
            <Image
              src="/assets/Twitter.png"
              alt="twitter"
              width={24}
              height={24}
            />
            <Image
              src="/assets/Dribbble.png"
              alt="dribbble"
              width={24}
              height={24}
            />
            <Image
              src="/assets/Linkedin.png"
              alt="linkedin"
              width={24}
              height={24}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;