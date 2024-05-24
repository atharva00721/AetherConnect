"use client";

import MeetingTypeList from "@/components/meetingTypeList";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Home = () => {
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
          <h2 className="glassmorphism max-w-[80px] rounded-lg py-2 text-center text-base text-[#f1f1f1] font-bold">
            {dayOfWeek}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold lg:text-7xl uppercase">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
