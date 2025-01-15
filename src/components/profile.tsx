import { clsx } from "clsx";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type ProfileProps = {
  setPeriod: Dispatch<SetStateAction<string>>;
  period: string;
};

function Profile({ period, setPeriod }: ProfileProps) {
  return (
    <div className="rounded-[15px] bg-card-bg sm:row-start-1 sm:row-end-7 sm:place-self-start lg:row-end-4 lg:h-full xl:row-end-3">
      <div className="flex items-center gap-[19px] rounded-[15px] bg-profile-bg px-[29px] pb-[31px] pt-8 sm:flex-col sm:items-start sm:justify-start sm:pb-[80px]">
        {/* Image */}
        <div className="relative h-[70px] w-[70px] rounded-full border-[3px] sm:h-[85px] sm:w-[85px] sm:shadow-lg">
          <Image
            src="/images/image-jeremy.png"
            alt="Jeremy"
            fill
            sizes="85px"
            className="object-cover"
          />
        </div>
        {/* Info */}
        <div>
          <h2 className="text-[0.9375rem] font-normal leading-[1.2] text-subtitle sm:mt-[40px]">
            Report for
          </h2>
          <h1 className="mt-1 text-[1.5rem] font-light leading-[1.166667] sm:text-[2.5rem]">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between p-6 text-muted sm:flex-col sm:items-start sm:gap-[21px] sm:px-[29px] sm:py-[33px]">
        <button
          className={clsx("px-2 text-[1.125rem] leading-[1.166667]", {
            active: period === "daily",
          })}
          onClick={() => {
            setPeriod("daily");
          }}
        >
          Daily
        </button>
        <button
          className={clsx("px-2 text-[1.125rem] leading-[1.166667]", {
            active: period === "weekly",
          })}
          onClick={() => {
            setPeriod("weekly");
          }}
        >
          Weekly
        </button>
        <button
          className={clsx("px-2 text-[1.125rem] leading-[1.166667]", {
            active: period === "monthly",
          })}
          onClick={() => {
            setPeriod("monthly");
          }}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default Profile;
