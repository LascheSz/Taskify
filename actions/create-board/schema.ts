import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "Titel ist erforderlich",
    invalid_type_error: "Titel ist erforderlich",
  }).min(3, {
    message: "Titel ist zu kurz."
  }),
  image: z.string({
    required_error: "Bild ist erforderlich",
    invalid_type_error: "Bild ist erforderlich",
  }),
});