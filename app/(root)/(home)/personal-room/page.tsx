"use client";
import { Camera, Copy } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useToast } from "@/components/ui/use-toast";

import React from "react";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl md:max-w-[300px]">
        {description}
      </h1>
    </div>
  );
};

const PersonalRoom = () => {
  const { toast } = useToast();
  const { user } = useUser();
  const meetingId = user?.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;
  const { call } = useGetCallById(meetingId!);
  const client = useStreamVideoClient();
  const router = useRouter();
  const startRoom = async () => {
    if (!user || !client) return;

    const newCall = client.call("default", meetingId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    router.push(`/meeting/${meetingId}?personal=true`);
  };
  return (
    <Card
      shadow="sm"
      className="flex size-full flex-col gap-10 bg-dark-1 px-3 py-2 rounded-lg max-md:max-w-[400px]"
    >
      <CardHeader className="flex gap-3">
        <div className="glassmorphism p-2 rounded-lg">
          <Camera color="white" size={48} />
        </div>
        <div className="flex flex-col">
          <p className="text-3xl font-bold">Personal Room</p>
          <p className="text-small text-default-500">{`${user?.username}'s Meeting Room`}</p>
        </div>
      </CardHeader>
      <hr />
      <CardBody className="flex w-full flex-col gap-8 xl:max-w-[900px] ">
        {/* <Table title="Topic" description={`${user?.username}'s Meeting Room`} /> */}
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invite Link" description={meetingLink!} />
      </CardBody>
      <CardFooter className="flex gap-5">
        <ButtonGroup className="">
          <Button className="bg-blue-1 rounded-l-lg" onClick={startRoom}>
            Start Meeting
          </Button>
          <Button
            className="bg-dark-3 rounded-r-lg"
            onClick={() => {
              navigator.clipboard.writeText(meetingLink);
              toast({
                title: "Link Copied",
              });
            }}
          >
            <Copy />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PersonalRoom;
