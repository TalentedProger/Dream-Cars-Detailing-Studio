import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// Schema for the contact form
export const contactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  service: z.string().min(1, "Выберите услугу"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

// Mock API hook since this is a frontend-only design artifact
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormInput) => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Log the data to prove it works
      console.log("Form submitted successfully:", data);
      
      // Simulate a successful response
      return { success: true, message: "Заявка успешно отправлена" };
    },
  });
}
