"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavItems from "./NavItems";
import { LanguageSwitcher } from "./LanguageSwitcher";
import MobileNav from "./MobileNav";
import { navLinks } from "@/constants";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import clsx from "clsx"; // optional: for className conditionally

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const t = useTranslations("Header.navLinks");

  const translatedNavLinks = navLinks.map((link) => ({
    ...link,
    label: t(link.id),
  }));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full z-30 transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <header className="w-full py-5 bg-white bg-opacity-90 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="home" smooth={true} duration={500}>
            <Image
              src="/assets/Logo.png"
              alt="header logo"
              width={170}
              height={20}
              className="cursor-pointer"
            />
          </Link>

          <div className="md:hidden">
            <MobileNav
              isOpen={isMenuOpen}
              toggle={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>

          <NavItems items={translatedNavLinks} />

          <div className="hidden md:block">
            <LanguageSwitcher isMenuOpen={false} />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="w-full bg-white md:hidden">
          <nav className="flex flex-col max-w-7xl mx-auto py-5">
            {translatedNavLinks.map(({ label, href }) => (
              <Link
                className="flex items-center justify-between hover:bg-[#F0EDFF] text-[#252324] hover:text-[#6A04FE] transition-colors cursor-pointer px-4"
                key={label}
                to={href}
                smooth={true}
                duration={500}
              >
                <span
                  className="py-3 rounded-[99px] text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </span>
                <div className="w-4 h-4 items-center justify-center flex">
                  <MdKeyboardArrowRight size={16} />
                </div>
              </Link>
            ))}
          </nav>
          <div className="w-full border-t border-[#E9EAEB] px-4 py-6">
            <LanguageSwitcher isMenuOpen />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
