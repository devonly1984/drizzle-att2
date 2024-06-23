"use client"
import { Room } from '@/drizzle/schema';
import {
    Call,
    CallControls,
    SpeakerLayout,
    StreamCall,
    StreamTheme,
    StreamVideo,
    StreamVideoClient,
 } from '@stream-io/video-react-sdk';
import "@stream-io/video-react-sdk/dist/css/styles.css";

import { useSession } from 'next-auth/react';

import { useEffect, useState } from 'react';
  
  

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzFiOTcwNzMtYWIzNS00YjE4LTgxM2UtM2UzMTBjN2VkNTRjIn0.lGIzMP-v8-C3kl7GemiDX0qETnvL1TCfhrA4nRpo6zI";
 
   export const DevFinderVideo = ({room}:{room:Room}) => {
    const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
    const [client, setClient] = useState<StreamVideoClient | null>(null)
    const [call, setCall] = useState<Call | null>(null);
    const session = useSession();
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
          },
          token,
        });
    
  const call = client.call("default", room.id);
  call.join({ create: true });
  setClient(client);
  setCall(call);
  return ()=>{
    call.leave();
    client.disconnectUser();
  }
    }, [session,room]);


    return (
      client &&
      call && (
        <StreamVideo client={client}>
          <StreamTheme>
            <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls />
            </StreamCall>
          </StreamTheme>
        </StreamVideo>
      )
    );
  };