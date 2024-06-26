"use clinet";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const EndCallButton = () => {
  const { toast } = useToast();
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;
  return (
    <Button
      className="cursor-pointer rounded-2xl px-4 hover:bg-red-400 bg-red-500 max-mini:mt-5"
      onClick={async () => {
        await call.endCall();
        router.push("/");
        toast({
          title: "Call Ended For Every One",
        });
      }}
    >
      End Call For Every One
    </Button>
  );
};

export default EndCallButton;
