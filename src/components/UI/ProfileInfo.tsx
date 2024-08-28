import { Link } from "react-router-dom";
import arrow from '/arrowProfileFIelds.svg'

function ProfileInfo() {
  return (
  <Link to={'/profile_edit'} 
  className="h-24 flex w-full active:bg-zinc-400 justify-start gap-3 rounded-xl items-center bg-white p-2 text-zinc-400 shadow-lg">
      <div  className="w-20 h-20 border-[2px] border-[#1b0b0bde] rounded-full">
                <img src="/defaultProfile.png" className="object-cover rounded-full h-full w-full"></img>
            </div>
      <div className="flex h-full flex-col items-start justify-center">
        <h1 className="font-bold text-[#1b0b0bde]">Steve Bill</h1>
        <p>@tg_username</p>
        <p>+79998657723</p>
      </div>
      <div className="h-22 flex flex-grow justify-end items-center">
        <img src={arrow} className='pr-4'></img>
      </div>
  </Link>
  );
}

export default ProfileInfo;
