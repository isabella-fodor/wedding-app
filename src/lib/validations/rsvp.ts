import { z } from "zod";

export const rsvpFormSchema = z.object({
  fullName: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
  email: z.string().email("Email invalid").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  status: z.enum(["YES", "NO", "MAYBE"]).refine(
    (val) => ["YES", "NO", "MAYBE"].includes(val),
    { message: "Selectați un răspuns valid" }
  ),
  peopleCount: z.coerce
    .number()
    .min(1, "Trebuie să fie cel puțin o persoană")
    .max(5, "Maximum 5 persoane pe invitație"),
  menuOption: z.string().optional().or(z.literal("")),
  comment: z.string().max(500, "Comentariul nu trebuie să depășească 500 de caractere").optional().or(z.literal("")),
});

export type RSVPFormData = z.infer<typeof rsvpFormSchema>;
