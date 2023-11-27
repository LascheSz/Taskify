import { z } from "zod";

export const CreateBoard = z.object({
    title: z.string({
        required_error: "Bitte gibt ein Titel an!",
        invalid_type_error: "Bitte gibt ein Titel an!",
    }).min(3, {
        message: "Titel ist zu kurz!"
    }),
});