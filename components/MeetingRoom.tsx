import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
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
import { LayoutList, Users2Icon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";
import { CallControls } from "./ui/CallControls";
type CallLayout = "speaker-left" | "speaker-right" | "grid";

const MeetingRoom = () => {
  const { useCallCallingState } = useCallStateHooks();
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const [Layout, setLayout] = useState<CallLayout>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  const callingState = useCallCallingState();
  const router = useRouter();

  if (callingState !== CallingState.JOINED) return;
  <Loader />;

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
        <div className="glassmorphism2 md:mb-3 fixed bottom-0 flex  items-center justify-center flex-wrap px-10 py-2 max-md:px-1 max-md:max-w[200px] rounded-xl">
          <CallControls onLeave={() => router.push("/")} />
          <Dropdown>
            <div className="flex items-center mx-3">
              <DropdownTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 hover:bg-[#4c535b]">
                <Button>
                  <LayoutList size={20} />
                </Button>
              </DropdownTrigger>
            </div>

            <DropdownMenu className="border-dark-1 bg-dark-1 rounded-xl">
              <DropdownItem
                className="hover:bg-dark-2 rounded-lg"
                onClick={() => setLayout("grid")}
              >
                Grid
              </DropdownItem>

              <DropdownItem
                className="hover:bg-dark-2 rounded-lg"
                onClick={() => setLayout("speaker-right")}
              >
                Speaker Right
              </DropdownItem>

              <DropdownItem
                className="hover:bg-dark-2 rounded-lg"
                onClick={() => setLayout("speaker-left")}
              >
                Speaker Left
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
