type CardProps = {
  backgroundImage: string;
  backgroundColor: string;
  activity: string;
  hours: number;
  lastHours: number;
  period: string;
};

export default function Card({
  backgroundImage,
  backgroundColor,
  activity,
  hours,
  lastHours,
  period,
}: CardProps) {
  const style = {
    backgroundColor: `var(--${backgroundColor})`,
    backgroundImage: `url('/images/${backgroundImage}.svg')`,
  };

  return (
    <div
      className={
        "flex items-end overflow-hidden rounded-[15px] bg-[right_17px_top_-11px] bg-no-repeat pt-[38px]"
      }
      style={style}
    >
      <div className="w-full rounded-[15px] bg-card-bg px-[1.5rem] py-[1.75rem] xl:px-[1.875rem] xl:py-[1.8125rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.125rem] font-medium leading-[1.166667]">
            {activity}
          </h2>
          <div className="flex cursor-pointer gap-[3px]">
            <span className="block h-[5px] w-[5px] rounded-full bg-dot"></span>
            <span className="block h-[5px] w-[5px] rounded-full bg-dot"></span>
            <span className="block h-[5px] w-[5px] rounded-full bg-dot"></span>
          </div>
        </div>
        <div className="mt-[6px] flex items-center justify-between xl:mt-6 xl:flex-col xl:items-start">
          <p className="text-[2rem] font-light leading-[1.1875] xl:text-[3.5rem] xl:leading-[1.179]">
            {period === "daily"
              ? (hours / 7).toFixed(1)
              : period === "monthly"
                ? ((hours / 7) * 30).toFixed(1)
                : hours}
            hrs
          </p>
          <p className="relative top-[5px] text-[0.9735rem] leading-[2.5] text-subtitle xl:top-0">
            Last Week - {lastHours}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
