"use server"

import { Room,  room } from "../drizzle/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const createRoom = async (roomData: Omit<Room, "id" | "userId">) => {
  const session = await getSession();

  try {
    if (!session) {
      throw new Error("You must be logged in to create rooms");
    }
    const response =await db?.insert(room).values({ ...roomData, userId: session.user.id });
    console.log("Server Action", response);
    revalidatePath("/");
    return response;
    
  } catch (error) {
    console.log(error);
  }
};
