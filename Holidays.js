import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const Holidays = ({ data }) => {  
  const myEventsList = data.response.holidays.map(response => ({
    start: new Date(response.date.iso),
    end: new Date(response.date.iso),
    title: response.name
  }))
  return (
    <div>
        <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      
    </div>
  );
};
export default Holidays;
