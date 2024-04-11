import React from "react";

interface props {
  setDestinationOption: React.Dispatch<React.SetStateAction<boolean>>;
  destinationDetail: string;
  setDestinationDetail: React.Dispatch<React.SetStateAction<string>>;
}

const Destination = ({
  setDestinationDetail,

  destinationDetail,
  setDestinationOption,
}: props) => {
  return (
    <div
      className="bg-white -2 grid col-span-2  lg:max-w-60  p-2  flex-col   lg:p-4 "
      onClick={() => {
        setDestinationOption(true);
      }}
    >
      <label className="text-black text-sm font-semibold text-opacity-65 ">
        To
      </label>
      <input
        type="text"
        className="bg-white text-opacity-55 text-black mt-3 outline-none text-md"
        placeholder="Country"
        value={destinationDetail}
        onChange={(e) => setDestinationDetail(e.target.value)}
      />
    </div>
  );
};
export default Destination;
