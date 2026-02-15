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
          // mt-7 წაიშალა. დაემატა h-14 და flex-ცენტრირება
          "bg-[#6A04FE] hover:bg-[#6A04FE] text-white px-8 h-14 rounded-full text-base font-medium cursor-pointer inline-flex items-center justify-center transition-colors",
          className
        )}
      >
        {children ?? t("booking")}
      </DialogTrigger>
      <ReservationModal />
    </Dialog>
  );
};

export default ReservationBtn;