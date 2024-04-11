import { forwardRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface props {
  date: string;
  onChange: (value: any) => void;
  defaultValue: Date;
}

const UseCalender = forwardRef<HTMLDivElement, props>(
  ({ date, onChange, defaultValue }, ref) => {
    console.log(new Date());
    return (
      <div ref={ref}>
        <Calendar
          value={date}
          className="w-60 lg:w-96 p-6 rounded-lg"
          onChange={onChange}
          defaultValue={defaultValue || new Date()}
        />
      </div>
    );
  }
);

export default UseCalender;
