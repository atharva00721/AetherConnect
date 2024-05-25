"use client";
import { Checkbox } from "@nextui-org/checkbox";
import CallList from "@/components/CallList";
import MeetingTypeList from "@/components/meetingTypeList";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";
import Clock from "react-live-clock";

const Home = () => {
  const router = useRouter();
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(
    now
  );
  let day = now.getDay();
  const getDayOfWeek = (day: number): string => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[day];
  };

  const dayOfWeek = getDayOfWeek(day);
  return (
    <section className="flex size-full flex-col gap-10 my-0">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-lg:px-5 max-lg:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[80px] rounded-lg py-2 text-center text-base text-sky-1 font-bold">
            {dayOfWeek}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold lg:text-7xl uppercase">
              <Clock
                format={"h:mm"}
                ticking={true}
              />
            </h1>
            <p className="text-lg font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
      <div className="bg-dark-3 px-4 py-5 w-full rounded-[20px] ">
        <div className="flex justify-between gap-5">
          <h2 className="text-3xl font-extrabold uppercase">
            Upcoming Meetings
          </h2>
          <Button
            onClick={() => router.push("/upcoming")}
            className="bg-blue-1 rounded-lg"
          >
            See All
          </Button>
        </div>
        <hr className="my-5 border-[2px] rounded-lg " />
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold lg:text-2xl uppercase"></h1>
          <p className="text-lg font-medium text-sky-1">
            <CallList type="upcoming" limit={2} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
