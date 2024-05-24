"use client";
import React from "react";
import { sidebarLinks } from "@/constants/";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6  text-white max-lg:hidden lg:w-[264px]">
      <p className="text-[26px] font-extrabold uppercase pb-20">
        Aether Connect
      </p>
      <div className="flex flex-1 flex-col gap-4">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-3 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="font-semibold text-lg">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton
            appearance={{
              variables: { fontSize: "14px" },
              elements: {
                userButtonBox: {
                  flexDirection: "row-reverse",
                },
              },
            }}
            showName
          />
        </SignedIn>
      </div>
    </section>
  );
};

export default Sidebar;
