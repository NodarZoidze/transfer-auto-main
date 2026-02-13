"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useTranslations } from "next-intl";

const PrivateDetailsForm = ({
  setStep,
  setPersonalDetails,
  selectedDirection,
  selectedTransport,
}: {
  setStep: Dispatch<
    SetStateAction<
      "details" | "direction" | "select" | "summary" | "confirmation"
    >
  >;
  setPersonalDetails: Dispatch<
    SetStateAction<{
      name: string;
      email: string;
      phone: string;
      message: string;
    }>
  >;
  selectedDirection: {
    from: string;
    to: string;
  };
  selectedTransport: string;
}) => {
  const t = useTranslations("Reservation");

  // იმისათვის რომ ვალიდაციამ იმეილი არ მოგვთხოვოს, 
  // აქ ვიყენებთ უბრალო defaultValues-ს. 
  const form = useForm({
    defaultValues: {
      name: "",
      email: "no-email@transferauto.ge", // ავტომატური მნიშვნელობა ბექენდისთვის
      mobile: "",
      message: "",
    },
  });

  async function onSubmit(values: any) {
    const bookingData = {
      fullName: values.name,
      email: values.email, // ბექენდში მაინც გაიგზავნება "no-email"
      phone: values.mobile,
      carDetails: values.message,
      transportType: selectedTransport,
      destination: selectedDirection,
      createdAt: new Date(),
    };
    try {
      await addDoc(collection(db, "bookings"), bookingData);
      setStep("summary");
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
    setPersonalDetails({
      name: values.name,
      email: values.email,
      phone: values.mobile || "",
      message: values.message || "",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* სახელი და გვარი */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#252324] text-sm font-normal">
                {t("fullName")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t("fullNamePlaceholder")}
                  {...field}
                  className="focus:outline-none focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ტელეფონის ნომერი */}
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#252324] text-sm font-normal">
                {t("phone")}
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder={t("phonePlaceholder")}
                  {...field}
                  className="focus:outline-none focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ინფორმაცია ავტომობილზე */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#252324] text-sm font-normal">
                {t("vehicleInfo")}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={t("vehicleInfoPlaceholder")}
                  className="focus:outline-none focus:ring-0 focus-visible:ring-0 h-[174px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end mt-10">
          <div className="flex items-center gap-3">
            <Button
              type="button"
              className="h-12 text-[#6A04FE] bg-transparent hover:bg-transparent cursor-pointer text-base font-medium px-6 py-4 rounded-full"
              onClick={() => setStep("direction")}
            >
              {t("back")}
            </Button>
            <Button
              type="submit"
              className="h-12 bg-[#6A04FE] text-white text-base font-medium px-6 py-4 rounded-full"
            >
              {t("next")}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PrivateDetailsForm;