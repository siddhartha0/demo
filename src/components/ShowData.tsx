import { forwardRef, useEffect, useState } from "react";
import data from "../Data.json";
import { FaPlaneDeparture } from "react-icons/fa6";

interface props {
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
  departureDetail: string;
  setDepartureDetail: React.Dispatch<React.SetStateAction<string>>;
}

type optionType = {
  country: string;
  code: string;
  city: string;
};

const ShowData = forwardRef<HTMLDivElement, props>(
  ({ setOption, departureDetail, setDepartureDetail }, ref) => {
    const [optionList, setOptionList] = useState<optionType[]>(data);
    useEffect(() => {
      const getData = data.filter(
        (detail) =>
          detail.city
            .toLowerCase()
            .startsWith(departureDetail.toLowerCase().trim()) ||
          detail.country
            .toLowerCase()
            .includes(departureDetail.toLowerCase().trim()) ||
          detail.code
            .toLowerCase()
            .includes(departureDetail.toLowerCase().trim())
      );

      console.log(getData);
      setOptionList(getData);
    }, [departureDetail]);

    const selectPlace = (detail: string) => {
      setOption(false);
      setDepartureDetail(detail);
    };

    return (
      <div
        className="flex flex-col bg-white   max-h-96 overflow-scroll gap-5 p-8 rounded-lg"
        ref={ref}
        style={optionList.length <= 0 ? { display: "none" } : {}}
      >
        {optionList.map((detail) => (
          <div
            className="flex gap-3 place-item-center cursor-pointer"
            onClick={() => selectPlace(detail.city)}
          >
            <div className="flex place-items-center">
              <FaPlaneDeparture className="" />
            </div>

            <div className="flex flex-col">
              <div className="flex font-semibold gap-2 text-black text-opacity-85">
                <article className="capitalize">{detail.city}</article>
                <span className="uppercase">({detail.code})</span>
              </div>
              <div>
                <article className="capitalize text-black text-opacity-85">
                  {detail.country}
                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

export default ShowData;
