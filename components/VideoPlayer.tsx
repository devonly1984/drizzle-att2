"use client"
import { generateToken } from '@/actions';
import { Room } from '@/drizzle/schema';
import {
    Call,
    CallControls,
    CallParticipantsList,
    SpeakerLayout,
    StreamCall,
    StreamTheme,
    StreamVideo,
    StreamVideoClient,
 } from '@stream-io/video-react-sdk';
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
  
  

  
 
const DevFinderVideo = ({ room }: { room: Room }) => {
  const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const session = useSession();
  const router = useRouter()
  useEffect(() => {
    if (!session.data) {
      return;
    }
    if (!room) return;
    const userId = session.data.user.id;
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
        name: session.data.user.name ?? "Unknown",
        image: session.data.user.image ?? undefined,
      },
      tokenProvider: () => generateToken(),
    });

    const call = client.call("default", room.id);
    call.join({ create: true });
    setClient(client);
    setCall(call);
    return () => {
      call
        .leave()
        .then(() => client.disconnectUser())
        .catch((error) => console.log(error));
      
    };
  }, [session, room]);

  return (
    client &&
    call && (
      <StreamVideo client={client}>
        <StreamTheme>
          <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls
              onLeave={() => {
                router.push("/");
              }}
            />
            <CallParticipantsList onClose={() => {}} />
          </StreamCall>
        </StreamTheme>
      </StreamVideo>
    )
  );
};
export default DevFinderVideo;