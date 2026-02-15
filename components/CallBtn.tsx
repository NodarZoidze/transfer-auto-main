"use client";

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface CallBtnProps {
    className?: string;
    phoneNumber?: string;
}

const CallBtn = ({ className, phoneNumber = "+995511104885" }: CallBtnProps) => {
    const t = useTranslations("Hero");

    return (
        <a
            href={`tel:${phoneNumber}`}
            className={cn(
                // აქაც h-14, რომ სიმაღლეში იდეალურად დაემთხვეს
                "box-border border-2 border-[#6A04FE] text-[#6A04FE] px-8 h-14 rounded-full text-base font-medium inline-flex items-center justify-center gap-2 hover:bg-[#6A04FE] hover:text-white transition-colors",
                className
            )}
        >
            <Phone size={18} className="mb-[1px]" />
            {t("callNow") || "დარეკვა"}
        </a>
    );
};

export default CallBtn;