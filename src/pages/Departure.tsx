import React from "react";

interface props {
  setOption: React.Dispatch<React.SetStateAction<boolean>>;

  departaureDetail: string;
  setDepartureDetail: React.Dispatch<React.SetStateAction<string>>;
}

const Departure = ({
  setOption,
  departaureDetail,
  setDepartureDetail,
}: props) => {
  return (
    <div
      className="bg-white grid col-span-2   lg:max-w-60  p-2 rounded-l-lg lg:p-4 "
      onClick={() => {
        setOption(true);
      }}
    >
      <label className="text-black text-sm font-semibold text-opacity-65">
        From
      </label>
      <input
        type="text"
        placeholder="Brisbane"
        className="bg-white text-opacity-55 text-black text-md outline-none mt-3"
        value={departaureDetail}
        onChange={(e) => {
          setDepartureDetail(e.target.value);
        }}
      />
    </div>
  );
};

export default Departure;
