import React, { forwardRef } from "react";
import { SlCalender } from "react-icons/sl";

interface props {
  setShowCalender: React.Dispatch<React.SetStateAction<boolean>>;
  departTime: string;
  date: string;
}

const DepartureTime = forwardRef<HTMLDivElement, props>(
  ({ setShowCalender, departTime, date }) => {
    return (
      <div
        className="bg-white place-items-center lg:place-items-start  flex lg:min-w-52  gap-3 lg:gap-0 lg:flex-col p-2  lg:p-4 "
        onClick={() => setShowCalender(true)}
      >
        <label className="hidden lg:flex  text-black text-sm font-semibold text-opacity-65">
          Depart
        </label>

        <SlCalender className="lg:hidden" />

        <div className="bg-white text-opacity-55  text-black lg:mt-3 capitalize outline-none">
          <span className="hidden lg:flex">
            {departTime ? departTime.slice(0, 15) : "add date"}
          </span>
          <span className="lg:hidden">
            {departTime ? departTime.slice(3, 10) : "add date"}
          </span>

          <span className=" lg:hidden">
            {date ? `- ${date.slice(3, 10)}` : ""}
          </span>
        </div>
      </div>
    );
  }
);

export default DepartureTime;
