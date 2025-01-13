import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className='max-w-[375px] px-6 mx-auto mt-[81px]'>
      <div className='grid grid-cols-1'>
        <Profile />
      </div>
    </div>
  );
}
