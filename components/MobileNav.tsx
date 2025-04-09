"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const MobileNav = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <button
      onClick={toggle}
      className="p-2 text-2xl text-[#252324] cursor-pointer"
    >
      {isOpen ? <MdClose /> : <GiHamburgerMenu />}
    </button>
  );
};

export default MobileNav;
