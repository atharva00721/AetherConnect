import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { LayoutList, Users2Icon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";

type CallLayout = "speaker-left" | "speaker-right" | "grid";

const MeetingRoom = () => {
  const { useCallCallingState } = useCallStateHooks();
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const [Layout, setLayout] = useState<CallLayout>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  const callingState = useCallCallingState();
  const router = useRouter();

  if(callingState !== CallingState.JOINED) return
  <Loader />

  const CallLayout = () => {
    switch (Layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center justify-center mx-1">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
        <div className="mb-3 fixed bottom-0 flex w-full items-center justify-center flex-wrap">
          <CallControls onLeave={() => router.push('/')}/>
          <DropdownMenu>
            <div className="flex items-center mx-3">
              <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 hover:bg-[#4c535b]">
                <Button>
                  <LayoutList size={20} />
                </Button>
              </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent className="border-dark-1 bg-dark-1">
              <DropdownMenuLabel>Layouts</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["Grid", "Speaker Right", "Speaker Left"].map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem
                    className="hover:bg-dark-2"
                    onClick={() =>
                      setLayout(
                        item === "Grid"
                          ? "grid"
                          : item === "Speaker Right"
                          ? "speaker-right"
                          : "speaker-left"
                      )
                    }
                  >
                    {item}
                  </DropdownMenuItem>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <CallStatsButton />
          <Button
            onClick={(e) => setShowParticipants((prev) => !prev)}
            className="cursor-pointer rounded-2xl bg-[#19232d] mx-3 px-4 hover:bg-[#4c535b]"
          >
            <Users2Icon size={20} />
          </Button>
          {!isPersonalRoom && <EndCallButton />}
        </div>
        {/* <h1 className="text-2xl font-bold">Meeting Room</h1>
        <p className="text-gray-500">This is the meeting room</p> */}
      </div>
    </section>
  );
};

export default MeetingRoom;
