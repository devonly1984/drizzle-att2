import { Room, room } from "@/drizzle/schema";
import { unstable_noStore } from "next/cache";
import { db } from "@/drizzle/client";
import { eq } from "drizzle-orm";
const getRooms = async () => {
  unstable_noStore();
  const rooms: Room[] = (await db?.query?.room.findMany()) || [];
  return rooms;
};
export const getRoom=async(roomId:string)=>{

 return await db.query.room.findFirst({
   where: eq(room.id, roomId),
 });
 

}
export default getRooms;

