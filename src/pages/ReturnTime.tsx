import React from "react";

interface props {
  setShowCalender: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
}

function ReturnTime({ setShowCalender, date }: props) {
  return (
    <div
      className="bg-white lg:flex hidden  md:max-w-60 lg:max-w-60  flex-col p-2  lg:p-4 min-w-52"
      onClick={() => setShowCalender(true)}
    >
      <label className="text-black text-sm font-semibold text-opacity-65 capitalize">
        return
      </label>
      <span className="bg-white capitalize text-opacity-55 text-black mt-3 outline-none">
        {date ? date.slice(0, 15) : "add Date"}
      </span>
    </div>
  );
}

export default ReturnTime;
