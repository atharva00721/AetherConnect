import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";

interface PermissionCardProps {
  title: string;
  iconUrl?: string;
}

const Alert = ({ title, iconUrl }: PermissionCardProps) => {
  const route = useRouter();
  return (
    <section className="flex-center h-screen w-full">
      <Card className="w-full max-w-[520px] border-none bg-dark-1 p-6 py-9 text-white">
        <CardContent>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3.5">
              {iconUrl && (
                <div className="flex-center">
                  <Image src={iconUrl} width={72} height={72} alt="icon" />
                </div>
              )}
              <p className="text-center text-xl font-semibold">{title}</p>
            </div>

            <Button className="bg-blue-1" onClick={() => route.push("/")}>
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Alert;
