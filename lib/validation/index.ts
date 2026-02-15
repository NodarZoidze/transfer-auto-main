import { z } from "zod";

export const privateDetailsFormSchema = z.object({
  name: z.string().min(2, "მინიმუმ 2 სიმბოლო").max(50, "მაქსიმუმ 50 სიმბოლო"),
  // email-ს ვხდით არააუცილებელს (optional), რომ ფორმის გაგზავნისას შეცდომა არ ამოაგდოს
  email: z.string().optional(),
  // მობილურის ნომერი გავხადოთ სავალდებულო, რადგან იმეილს აღარ ვიყენებთ
  mobile: z.string().min(9, "მიუთითეთ ვალიდური ნომერი"),
  message: z.string().optional(),
});