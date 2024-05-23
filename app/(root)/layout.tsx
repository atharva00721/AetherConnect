import React, { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arther Connet",
  description: "Arther Connet A Video Call App",
  icons: {
    icon: '/public/images/aether.png',
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
