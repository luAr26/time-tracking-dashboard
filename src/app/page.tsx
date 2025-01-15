"use client";
import Card from "@/components/card";
import Profile from "@/components/profile";
import { timeSpent } from "@/data/data";
import { useState } from "react";

export default function Home() {
  const [period, setPeriod] = useState("weekly");
  return (
    <div className="mx-auto mt-[81px] max-w-[375px] px-6 sm:max-w-[640px] lg:max-w-[1024px] xl:mt-[253px] xl:max-w-[1148px]">
      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 sm:grid-rows-6 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-2">
        <Profile setPeriod={setPeriod} period={period} />
        {timeSpent.map((item) => (
          <Card key={item.activity} {...item} period={period} />
        ))}
      </div>
    </div>
  );
}
