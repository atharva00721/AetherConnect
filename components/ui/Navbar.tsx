import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Logo from '../../public/images/aether.png';


const Navbar = () => {
  return (
    <nav className="justify-between items-center hidden fixed z-50 w-full glassmorphism2 px-6 py-4 lg:px-10 max-lg:flex">
      <Link href={"/"} className="flex items-center gap-1">
        {/* <Image
          src={Logo}
          width={50}
          height={50}
          alt="Aether Logo"
          className="max-sm:size-10 text-white"
        /> */}
        <p className="text-[26px] font-extrabold max-sm:text-[18px] uppercase">
          Aether Connect
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
