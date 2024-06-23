import TagsList from "@/components/TagsList";
import { DevFinderVideo } from "@/components/VideoPlayer";

import { getRoom } from "@/data-access/rooms";
import { splitTags } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

const RoomPage = async ({
  params: { roomId },
}: {
  params: { roomId: string };
}) => {
  const room = await getRoom(roomId);
  if (!room) {
    throw new Error("Unable to return the room at this time");
  }

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
          <DevFinderVideo room={room} />
        </div>
      </div>
      <div className=" col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>
          {room?.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2 self-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon /> Git Hub Project
            </Link>
          )}
          <p className="text-base text-gray-600">{room?.description}</p>

          <TagsList tags={splitTags(room?.tags)} />
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
