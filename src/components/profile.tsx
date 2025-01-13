import Image from "next/image";

function Profile() {
  return (
    <div className="rounded-[15px] bg-card-bg">
      <div className="bg-profile-bg flex items-center gap-[19px] rounded-[15px] px-[29px] pb-[31px] pt-8">
        {/* Image */}
        <div className="relative h-[70px] w-[70px] rounded-full border-[3px]">
          <Image
            src="/images/image-jeremy.png"
            alt="Jeremy"
            fill
            sizes="70px"
          />
        </div>
        {/* Info */}
        <div>
          <h2 className="text-subtitle text-[0.9375rem] font-normal leading-[1.2]">
            Report for
          </h2>
          <h1 className="mt-1 text-[1.5rem] font-light leading-[1.166667]">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between p-6 text-muted">
        <button className="px-2 text-[1.125rem] leading-[1.166667]">
          Daily
        </button>
        <button className="active px-2 text-[1.125rem] leading-[1.166667]">
          Weekly
        </button>
        <button className="px-2 text-[1.125rem] leading-[1.166667]">
          Monthly
        </button>
      </div>
    </div>
  );
}

export default Profile;
