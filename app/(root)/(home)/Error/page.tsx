import { WobbleCard } from "@/components/ui/wobble-card";
import { useRouter } from "next/router";
import React from "react";




export default function Meetingnotfound() {
    return (
      <div className="flex flex-col h-screen w-full justify-center items-center ">
        <WobbleCard
          containerClassName={"bg-orange-500 w-full xl:max-w-[600px]"}
          className="flex flex-col justify-between  min-h-[260px] rounded-[14px] cursor-pointer px-4 py-8"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold">Error: Meeting Not Found</h1>
            <p className="text-md font-semibold">We're sorry, but the requested meeting could not be found. Please check the URL or contact support for assistance.</p>
          </div>
        </WobbleCard>
        
      </div>
    );
  }
