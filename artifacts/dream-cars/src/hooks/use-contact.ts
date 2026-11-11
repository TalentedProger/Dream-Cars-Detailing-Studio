import { z } from "zod";

// Schema for the contact form
export const contactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  service: z.string().min(1, "Выберите услугу"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
