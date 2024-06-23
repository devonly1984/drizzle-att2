import { Room } from "@/drizzle/schema";
import { unstable_noStore } from "next/cache";
import { db } from "@/drizzle/client";
const getRooms = async () => {
  unstable_noStore();
  const rooms: Room[] = (await db?.query?.room.findMany()) || [];
  return rooms;
};
export default getRooms;
