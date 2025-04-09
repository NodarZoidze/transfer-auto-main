"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Link } from "react-scroll";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-4">
      {navLinks.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            to={href}
            smooth={true}
            duration={500}
            className={`p-3 rounded-[99px] text-base font-medium transition-colors cursor-pointer ${
              isActive ? "bg-[#F0EDFF] text-[#6A04FE]" : "text-[#252324]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;
