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
export default Holidays
// import React from "react";
// // import { render } from "react-dom";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";


// moment.locale("en-GB");
// const localizer = momentLocalizer(moment);

// const myEventsList = [{
//     start: new Date(), end: new Date(), title: "special event"
// }
// ];

// const Holidays = ({ data }) => {
 
//   return (
//     <div>
//       {/* {data.map((data) => (
//     <div> holiday working</div>
       
//       ))} */}
//         <Calendar
//         localizer={localizer}
//         events={myEventsList}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
      
//     </div>
//   );
// };
// export default Holidays;

// import React, {useState} from 'react';

// export default class Holidays extends React.Component {
//     state = {
//         loading: true
//     };

//     async componentDidMount() {
//         const url = 'https://calendarific.com/api/v2/holidays?&api_key=84a6aca91a8ceffcb74f71c64b58bf46e3b02136&country=PK&year=2021';
//         const response = await fetch(url); 
//         const data = await response.json();
//         console.log(data)
//     }

//     render() {
//         return(
//             <div>

//             </div>
//         );
//     }
// }
