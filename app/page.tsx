import RoomCard from "@/components/RoomCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import {getRooms, getRoomsBySearch} from "@/data-access/rooms";

import { Room } from "@/drizzle/schema";
import Link from "next/link";


const Home = async ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {
  const rooms = search ? await getRoomsBySearch(search) : await getRooms();
  return (
    <main className="min-h-screen    p-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Find Dev Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <div className="mb-12">
        <SearchBar />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {rooms?.map((room: Room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </main>
  );
};

export default Home;
