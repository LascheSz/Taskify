"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";

import { InputType, ReturnType } from "./types";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth();
  
    if (!userId || !orgId) {
      return {
        errors: "Nicht autorisiert",
      };
    }

    const { title, image } = data;

    const [
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName
      ] = image.split("|");

      console.log({
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName
});
    
      if (!imageId || !imageThumbUrl || !imageFullUrl || !imageUserName || !imageLinkHTML) {
        return {
          errors: "Fehlende Felder. Das Board konnte nicht erstellt werden."
        };
      }
    
      let board;
    
      try {
        board = await db.board.create({
          data: {
            title,
            orgId,
            imageId,
            imageThumbUrl,
            imageFullUrl,
            imageUserName,
            imageLinkHTML,
          }
        });
    } catch (error) {
        return { 
            errors: "Fehler beim Erstellen des Boards."
        }
    }
    revalidatePath(`/board/${board.id}`)
    return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);