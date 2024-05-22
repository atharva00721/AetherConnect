import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import type { Metadata } from "next";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Arther Connet",
  description: "Arther Connet A Video Call App",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          layout: {
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#ffffff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
          userProfile: {
            baseTheme: [dark],
          },
          signIn: {
            baseTheme: [dark],
          },
          signUp: {
            baseTheme: [dark],
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2 text-[#f1f1f1]`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
