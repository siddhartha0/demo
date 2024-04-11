import { FaArrowRightArrowLeft } from "react-icons/fa6";
import ShowData from "./components/ShowData";
import { useEffect, useRef, useState } from "react";
import Departure from "./pages/Departure";
import Destination from "./pages/Destination";
import Cabin from "./components/Cabin";
import UseCalender from "./components/UseCalender";
import DepartureTime from "./pages/DepartureTime";
import ReturnTime from "./pages/ReturnTime";

function App() {
  const [showOption, setOption] = useState<boolean>(false);
  const [showDestinationOption, setDestinationOption] =
    useState<boolean>(false);
  const [departaureDetail, setDepartureDetail] = useState<string>("");
  const [destinationDetail, setDestinationDetail] = useState<string>("");
  const [adultNumber, setadultNumber] = useState<number>(1);
  const [active, setActive] = useState<boolean>(false);
  const [childrenNumber, setChildrenNumber] = useState<number>(0);
  const [showCabin, setShowCabin] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [departTime, setDepartTime] = useState<string>("");
  const [showCalender, setShowCalender] = useState(false);

  const ref = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowCabin(false);
        setOption(false);
        setDestinationOption(false);
        setShowCalender(false);
      }
    });
  }, []);

  const returnDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDay()
  );

  return (
    <div className="flex flex-col  bg-dark min-w-screen min-h-[150vh] relative ">
      <div
        className="lg:mt-20  p-8 lg:gap-3 relative grid grid-rows-3 grid-cols-2  lg:flex lg:flex-row gap-3 md:flex-wrap "
        id="second"
      >
        <Departure
          setOption={setOption}
          departaureDetail={departaureDetail}
          setDepartureDetail={setDepartureDetail}
        />

        {showOption && (
          <div className="absolute top-28 left-8 lg:top-32">
            <ShowData
              setOption={setOption}
              departureDetail={departaureDetail}
              setDepartureDetail={setDepartureDetail}
              ref={ref}
            />
          </div>
        )}
        <div className="flex bg-white rounded-full justify-center place-items-center  w-10 h-10 top-[90px] right-10 absolute lg:left-[250px] border-secondary  border-2 lg:top-14">
          <FaArrowRightArrowLeft
            className={`text-xl rotate-90 lg:rotate-0  text-black ${
              active ? " lg:rotate-180" : "-rotate-90 lg:rotate-0"
            } duration-1000 transition-all`}
            onClick={() => {
              setDestinationDetail(departaureDetail);
              setDepartureDetail(destinationDetail);
              setActive((prev) => !prev);
            }}
          />
        </div>
        <Destination
          destinationDetail={destinationDetail}
          setDestinationDetail={setDestinationDetail}
          setDestinationOption={setDestinationOption}
        />
        {showDestinationOption && (
          <div className="absolute top-48 left-8 lg:top-32 lg:left-[278px]">
            <ShowData
              setOption={setDestinationOption}
              departureDetail={destinationDetail}
              setDepartureDetail={setDestinationDetail}
              ref={ref}
            />
          </div>
        )}

        <DepartureTime
          setShowCalender={setShowCalender}
          departTime={departTime}
          date={date}
        />
        {showCalender && (
          <div
            className="absolute top-3/4 lg:top-36 lg:right-28 gap-2 flex   lg:flex-row"
            ref={ref}
          >
            <UseCalender
              date={departTime ?? ""}
              onChange={(value) => setDepartTime(value.toString())}
              ref={ref}
              defaultValue={new Date()}
            />

            <UseCalender
              date={date ?? ""}
              onChange={(value) => setDate(value.toString())}
              ref={ref}
              defaultValue={returnDate}
            />
          </div>
        )}
        <ReturnTime setShowCalender={setShowCalender} date={date} />
        <div
          className="bg-white flex  lg:max-w-60  flex-col p-2 lg:p-4  rounded-r-lg"
          onClick={() => setShowCabin((prev) => !prev)}
        >
          <label className="text-black text-sm font-semibold text-opacity-65">
            Travellers and cabin class
          </label>
          <span className="bg-white text-opacity-55 text-black mt-3 outline-none">
            {`${adultNumber + childrenNumber}  ${
              adultNumber + childrenNumber > 1 ? "passengers" : "passenger "
            }`}
          </span>
        </div>
        {showCabin && (
          <div className="absolute top-3/4 right-0 lg:top-36 lg:right-5">
            <Cabin
              adultNumber={adultNumber}
              setadultNumber={setadultNumber}
              childrenNumber={childrenNumber}
              setChildrenNumber={setChildrenNumber}
              ref={ref}
            />
          </div>
        )}
        <button className="  bg-secondary p-6 col-span-2 rounded-lg text-white uppercase">
          search
        </button>
      </div>
    </div>
  );
}

export default App;
