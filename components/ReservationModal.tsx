"use client";

import {
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { directions, transports } from "@/constants";
import PrivateDetailsForm from "./PrivateDetailsForm";
import { TiLocation } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { calculateProgress, SummaryItem } from "@/utils";
import SearchDirection from "./SearchDirection";
import { useTranslations } from "next-intl";

export function ReservationModal() {
  const t = useTranslations("Reservation");
  const tTrans = useTranslations("TransportTypes");
  const tRoutes = useTranslations("PopularRoutes");

  const [selectedTransport, setSelectedTransport] = useState("sedan");
  const [selectedDirection, setSelectedDirection] = useState<{
    from: string;
    to: string;
  }>({
    from: "",
    to: "",
  });
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [step, setStep] = useState<
    "select" | "direction" | "details" | "confirmation" | "summary"
  >("select");

  const [query, setQuery] = useState("");

  const getCityName = (city: string) => {
    const key = city.toLowerCase();
    return tRoutes.has(key) ? tRoutes(key) : city;
  };

  const filteredDirections = directions.filter(
    (direction) =>
      direction.from.toLowerCase().includes(query.toLowerCase()) ||
      direction.to.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <DialogContent className="bg-white min-w-screen h-screen mt-[25px] md:mt-0 sm:min-w-[640px] sm:min-h-[600px] sm:h-auto rounded-[10px] p-6 flex flex-col max-h-[95vh]">
      <DialogClose>
        <div className="w-full flex justify-center sm:hidden cursor-pointer">
          <Image src="/assets/drag.png" alt="drag" width={48} height={5} />
        </div>
      </DialogClose>
      <DialogTitle className="text-left text-base text-[#101828] pb-0 md:pb-6 font-medium max-h-[60px]">
        {t("title")}
      </DialogTitle>

      <div className="flex gap-2">
        {["select", "details", "summary", "confirmation"].map((s, idx) => (
          <div key={s} className="flex-1">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div
                className="h-full bg-purple-600 rounded-full"
                style={{ width: calculateProgress(step, idx + 1) }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col overflow-y-auto flex-grow mt-4 pr-1 hide-scrollbar">
        {step === "select" && (
          <div className="w-full">
            <h2 className="text-left text-base text-[#101828] pb-6 font-medium">
              {t("selectVehicle")}
            </h2>

            <div className="space-y-4">
              {transports.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedTransport(option.id)}
                  className={clsx(
                    "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition",
                    selectedTransport === option.id
                      ? "border-[#6A04FE] bg-[#F6F1FF]"
                      : "border-[#EAECF0]"
                  )}
                >
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                    <Image
                      src={option.icon}
                      alt="transport icon"
                      width={43}
                      height={25}
                      className="w-[43px] h-[25px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-medium">
                      {tTrans(option.id)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {tTrans(`${option.id}Desc`)}
                    </span>
                  </div>
                  {selectedTransport === option.id && (
                    <CheckCircle2 className="ml-auto text-[#7933FF]" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-10">
              <Button
                className="h-12 bg-[#6A04FE] hover:bg-[#6A04FE] cursor-pointer text-white text-base font-medium px-6 py-4 rounded-full"
                onClick={() => setStep("direction")}
              >
                {t("next")}
              </Button>
            </div>
          </div>
        )}

        {step === "direction" && (
          <div className="w-full">
            <h2 className="text-left text-base text-[#101828] pb-6 font-medium">
              {t("pickupLocation")}
            </h2>
            <SearchDirection query={query} setQuery={setQuery} />

            <div className="flex flex-col gap-3 max-h-[328px] overflow-y-auto hide-scrollbar mt-4">
              {filteredDirections.map((direction) => (
                <div
                  key={direction.from + direction.to}
                  onClick={() =>
                    setSelectedDirection({
                      from: direction.from,
                      to: direction.to,
                    })
                  }
                  className={clsx(
                    "flex items-center gap-4 p-4 rounded-[16px] border cursor-pointer transition",
                    selectedDirection.from === direction.from &&
                      selectedDirection.to === direction.to
                      ? "border-[#6A04FE] bg-[#F6F1FF]"
                      : "border-[#EAECF0]"
                  )}
                >
                  <div className="bg-[#F1F1F1] w-12 h-12 rounded-full flex items-center justify-center">
                    <TiLocation size={20} />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-base text-[#252324] font-medium">
                      <span>{getCityName(direction.from)}</span>-<span>{getCityName(direction.to)}</span>
                    </div>
                    <p className="text-sm font-normal text-[#6E7375]">
                      {tRoutes("distance")} {direction.distance} km
                    </p>
                  </div>

                  {selectedDirection.from === direction.from &&
                    selectedDirection.to === direction.to && (
                      <CheckCircle2 className="ml-auto text-[#7933FF]" />
                    )}
                </div>
              ))}
            </div>
            <div className="flex justify-end pt-10 border-t border-[#E5F0FF] mt-4">
              <div className="flex items-center gap-3">
                <Button
                  className="h-12 text-[#6A04FE] bg-transparent hover:bg-transparent cursor-pointer text-base font-medium px-6 py-4 rounded-full"
                  onClick={() => setStep("select")}
                >
                  {t("back")}
                </Button>
                <Button
                  className="h-12 bg-[#6A04FE] hover:bg-[#6A04FE] cursor-pointer text-white text-base font-medium px-6 py-4 rounded-full"
                  onClick={() => setStep("details")}
                  disabled={!selectedDirection.from}
                >
                  {t("next")}
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="w-full">
            <h2 className="text-left text-base text-[#101828] pb-6 font-medium">
              {t("personalDetails")}
            </h2>
            <PrivateDetailsForm
              setStep={setStep}
              setPersonalDetails={setPersonalDetails}
              selectedDirection={selectedDirection}
              selectedTransport={selectedTransport}
            />
          </div>
        )}

        {step === "summary" && (
          <div className="w-full">
            <h2 className="text-left text-base text-[#101828] pb-6 font-medium">
              {t("title")}
            </h2>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="font-medium text-[#101828] text-base">
                  {t("bookingDetails")}
                </h3>
                <div className="rounded-[16px] border border-[#E0E0E0] py-1">
                  <SummaryItem
                    icon={
                      <Image
                        src={
                          transports.find((t) => t.id === selectedTransport)
                            ?.icon ?? "/assets/sedan.png"
                        }
                        alt="transport type"
                        width={37}
                        height={21}
                      />
                    }
                    label={t("transportType")}
                    value={tTrans(selectedTransport)}
                  />
                  <SummaryItem
                    icon={<TiLocation size={20} />}
                    label={t("dropoffLocation")}
                    value={`${getCityName(selectedDirection.from)} - ${getCityName(selectedDirection.to)}`}
                  />
                  <SummaryItem
                    icon={<TiLocation size={20} />}
                    label={tRoutes("deliveryTime")}
                    value={`1-2 ${tRoutes("days")}`}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <h3>{t("personalDetails")}</h3>
                <div className="rounded-[16px] border border-[#E0E0E0] py-1">
                  <SummaryItem
                    icon={<IoPerson size={20} />}
                    label={t("fullName")}
                    value={personalDetails.name}
                  />
                  <SummaryItem
                    icon={<FaPhone size={20} />}
                    label={t("phone")}
                    value={personalDetails.phone}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <h3 className="text-base text-[#101828]">
                {t("vehicleInfo")}
              </h3>
              <div className="w-full h-[134px] bg-[#E0E0E0] rounded-[16px] py-3 px-4">
                {personalDetails.message}
              </div>
            </div>

            <div className="flex justify-end items-center mt-10">
              <div className="flex items-center gap-3">
                <Button
                  className="h-12 text-[#6A04FE] bg-transparent hover:bg-transparent cursor-pointer text-base font-medium px-6 py-4 rounded-full"
                  onClick={() => setStep("details")}
                >
                  {t("back")}
                </Button>
                <Button
                  className="h-12 bg-[#6A04FE] hover:bg-[#6A04FE] cursor-pointer text-white text-base font-medium px-6 py-4 rounded-full"
                  onClick={() => setStep("confirmation")}
                >
                  {t("confirm")}
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "confirmation" && (
          <div className="w-full">
            <div className="w-full h-[400px] flex flex-col gap-6 items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#D7F5E5] flex items-center justify-center">
                <Image
                  src="/assets/check.png"
                  alt="check"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <h2 className="text-[#131214] font-semibold text-2xl">
                {t("successTitle")}
              </h2>
              <p className="text-[#6E7375] font-normal text-sm max-w-[408px]">
                {t("successDesc")}
              </p>
            </div>
          </div>
        )}
      </div>
    </DialogContent>
  );
}