import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import getRooms from "@/data-access/rooms";

import { Room } from "@/drizzle/schema";
import Link from "next/link";


const Home = async() => {

const rooms = await getRooms()
  return (
    <div className="min-h-screen    p-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Find Dev Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      {rooms.map((room: Room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default Home;
