
import { WobbleCard } from "@/components/ui/wobble-card";

export default function NotFoundCatchAll() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center ">
      <WobbleCard
        containerClassName={"bg-orange-500 w-full xl:max-w-[600px]"}
        className="flex flex-col justify-between  min-h-[260px] rounded-[14px] cursor-pointer px-4 py-8"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
          <p className="text-md font-semibold">Oops! The page you are looking for does not exist.</p>
        </div>
      </WobbleCard>
      
    </div>
  );
}
