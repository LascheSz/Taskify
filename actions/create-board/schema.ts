import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "Gib einen Titel ein!",
    invalid_type_error: "Gib ein Titel ein!",
  }).min(3, {
    message: "Title ist zu kurz!"
  }),
});