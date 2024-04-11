import React, { forwardRef } from "react";

interface props {
  adultNumber: number;
  setadultNumber: React.Dispatch<React.SetStateAction<number>>;
  childrenNumber: number;
  setChildrenNumber: React.Dispatch<React.SetStateAction<number>>;
  ref: any;
}

const Cabin = forwardRef<HTMLDivElement, props>(
  ({ adultNumber, setadultNumber, childrenNumber, setChildrenNumber }, ref) => {
    return (
      <div
        className="bg-white min-w-96 min-h-96  flex flex-col p-4 rounded-lg gap-10 overflow-scroll"
        ref={ref}
      >
        <header className="text-black font-semibold text-opacity-75 text-xl">
          Cabin Class
        </header>

        <div className="flex justify-between align-middle">
          <div>
            <article className="text-black font-semibold capitalize text-opacity-75 text-md">
              adults
            </article>
            <span className="text-black text-opacity-35 font-semibold capitalize text-sm">
              aged 16+
            </span>
          </div>

          <div className="flex place-items-center gap-2">
            <button
              className="bg-secondary p-3 rounded-lg text-white"
              style={
                adultNumber <= 1
                  ? {
                      cursor: "not-allowed",
                      pointerEvents: "none",
                      opacity: 0.5,
                    }
                  : {}
              }
              onClick={() => setadultNumber((prev) => prev - 1)}
            >
              -
            </button>
            <span>{adultNumber}</span>
            <button
              className="bg-secondary p-3 rounded-lg text-white"
              onClick={() => {
                setadultNumber((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-between align-middle">
          <div>
            <article className="text-black font-semibold capitalize text-opacity-75 text-md">
              Children
            </article>
            <span className="text-black text-opacity-35 font-semibold capitalize text-sm">
              aged 0 to 15
            </span>
          </div>

          <div className="flex place-items-center gap-2">
            <button
              className="bg-secondary p-3 rounded-lg text-white"
              style={
                childrenNumber <= 0
                  ? {
                      cursor: "not-allowed",
                      pointerEvents: "none",
                      opacity: 0.5,
                    }
                  : {}
              }
              onClick={() => setChildrenNumber((prev) => prev - 1)}
            >
              -
            </button>
            <span>{childrenNumber}</span>
            <button
              className="bg-secondary p-3 rounded-lg text-white"
              onClick={() => setChildrenNumber((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default Cabin;
