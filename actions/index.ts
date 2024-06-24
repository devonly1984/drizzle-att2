"use server"

import { Room,  room } from "../drizzle/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import {StreamChat} from 'stream-chat'
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
export const generateToken = async()=>{
  const session = await getSession();
  if (!session) {
    throw new Error("No Session Found");
  }
  const api_key = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
  const api_secret = process.env.GET_STREAM_SECRET_KEY!;

  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(session.user.id);
  return token;
}