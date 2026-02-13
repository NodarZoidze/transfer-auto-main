"use client";

import { ReactNode } from "react";
import { ReservationModal } from "./ReservationModal";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ReservationBtnProps {
  className?: string;
  children?: ReactNode;
  transportType?: string;
}

const ReservationBtn = ({ className, children }: ReservationBtnProps) => {
  const t = useTranslations("Hero");

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "bg-[#6A04FE] hover:bg-[#6A04FE] text-white px-8 py-4 rounded-full mt-7 text-base font-medium cursor-pointer",
          className
        )}
      >
        {/* თუ children არსებობს (მაგალითად ხატულა), მას გამოაჩენს, თუ არა - თარგმნილ ტექსტს */}
        {children ?? t("booking")}
      </DialogTrigger>
      <ReservationModal />
    </Dialog>
  );
};

export default ReservationBtn;