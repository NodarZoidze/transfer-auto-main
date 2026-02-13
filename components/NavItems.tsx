"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

// განვიხილოთ ინტერფეისი, რომ TypeScript-მა არ იჩხუბოს
interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NavItems = ({ items }: { items: NavItem[] }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-4">
      {/* ახლა ვიყენებთ ნათარგმნ 'items'-ს, რომელიც Header-იდან მოდის */}
      {items.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            to={href}
            smooth={true}
            duration={500}
            className={`p-3 rounded-[99px] text-base font-medium transition-colors cursor-pointer ${isActive ? "bg-[#F0EDFF] text-[#6A04FE]" : "text-[#252324]"
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