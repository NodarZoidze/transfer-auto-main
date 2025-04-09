import { z } from "zod";

export const privateDetailsFormSchema = z.object({
  name: z.string().min(2, "მინიმუმ 2 სიმბოლო").max(50, "მაქსიმუმ 50 სიმბოლო"),
  email: z
    .string()
    .email("მიუთითეთ ვალიდური ელფოსტა")
    .endsWith("@gmail.com", "ელფოსტა უნდა მთავრდებოდეს @gmail.com-ით"),
  mobile: z.string().optional(),
  message: z.string().optional(),
});
