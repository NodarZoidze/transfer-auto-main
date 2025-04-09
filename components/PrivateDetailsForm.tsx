"use client";

import { privateDetailsFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "@/components/ui/textarea"; // Make sure you have this component
import { Dispatch, SetStateAction } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

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
  const form = useForm<z.infer<typeof privateDetailsFormSchema>>({
    resolver: zodResolver(privateDetailsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof privateDetailsFormSchema>) {
    const bookingData = {
      fullName: values.name,
      email: values.email,
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
      alert("შეცდომა მონაცემების შენახვისას.");
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
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#252324] text-sm font-normal">
                სრული სახელი
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="focus:outline-none focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#252324] text-sm font-normal">
                    ელფოსტა
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className="focus:outline-none focus:ring-0 focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex-1">
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#252324] text-sm font-normal">
                    მობილურის ნომერი
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      className="focus:outline-none focus:ring-0 focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#252324] text-sm font-normal">
                დამატებითი ინფორმაცია
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="დამატებითი დეტალები..."
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
              type="submit"
              className="h-12 text-[#6A04FE] bg-transparent hover:bg-transparent cursor-pointer text-base font-medium px-6 py-4 rounded-full"
              onClick={() => setStep("direction")}
            >
              უკან
            </Button>
            <Button
              type="submit"
              className="h-12 bg-[#6A04FE] text-white text-base font-medium px-6 py-4 rounded-full"
            >
              გაგრძელება
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PrivateDetailsForm;
