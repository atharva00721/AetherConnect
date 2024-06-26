import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import React, { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Arther Connet",
  description: "Arther Connet A Video Call App",
  icons: {
    icon: '/image/aether.png',
  }
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pt-8 pb-0 max-md:pb-14 sm:pb-14 max-lg:pt-28">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
