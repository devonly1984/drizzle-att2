import { Room, room } from "@/drizzle/schema";
import { unstable_noStore } from "next/cache";
import { db } from "@/drizzle/client";
import { eq,like } from "drizzle-orm";
export const getRooms = async () => {
  unstable_noStore();
  const rooms: Room[] = (await db?.query?.room.findMany()) || [];
  return rooms;
};
export const getRoom=async(roomId:string)=>{

 return await db.query.room.findFirst({
   where: eq(room.id, roomId),
 });
 

}
export const getRoomsBySearch = async(search:string)=>{
  try {
    const where = search ? like(room.tags, `%${search}%`) : undefined;
    const roomsBySearch = await db.query.room.findMany({
      where: where,
    });
    return roomsBySearch;
  } catch (error) {
    console.log(error);
  }

}


