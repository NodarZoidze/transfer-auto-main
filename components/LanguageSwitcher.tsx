// components/LanguageSwitcher.tsx

"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher({ isMenuOpen }: { isMenuOpen: boolean }) {
  const router = useRouter();

  const pathName = usePathname();
  const path = pathName.slice(1, 3);

  const handleChange = (value: string) => {
    console.log(value);

    const newPathName = "/" + value + pathName.slice(3);

    router.push(newPathName);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border border-[#6A04FE]">
        <button
          className={` ${
            isMenuOpen ? "w-full h-full" : "w-[86px] h-[44px]"
          } flex items-center gap-2 justify-between  text-[#6A04FE] font-medium text-base px-3 py-[10px] rounded-[48px]`}
        >
          {path === "ge" ? "GEO" : "ENG"}
          <ChevronDown className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-[calc(100vw-32px)] md:w-24 mt-2"
      >
        <DropdownMenuItem onClick={() => handleChange("ge")}>
          GEO
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange("en")}>
          ENG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
