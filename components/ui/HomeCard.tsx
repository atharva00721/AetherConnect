"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { WobbleCard } from "./wobble-card";

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <section className={cn("")} onClick={handleClick}>
      <WobbleCard
        containerClassName={cn(
          "",
          className
        )}
        className="flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer px-4 py-8"
      >
        <div className="flex-center glassmorphism size-12 rounded-[10px]">
          <Image src={img} alt="meeting" width={27} height={27} />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm font-normal">{description}</p>
        </div>
      </WobbleCard>
    </section>
  );
};

export default HomeCard;
{
  /* <div className="flex-center glassmorphism size-12 rounded-[10px]">
  <Image src={img} alt="meeting" width={27} height={27} />
</div>

<div className="flex flex-col gap-2">
  <h1 className="text-2xl font-bold">{title}</h1>
  <p className="text-lg font-normal">{description}</p>
</div> */
}
