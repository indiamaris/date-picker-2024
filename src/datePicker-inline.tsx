import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, setSeconds,addDays } from 'date-fns';
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import '@fortawesome/fontawesome-free/css/all.min.css';

import dayjs from 'dayjs';
// import { es } from 'date-fns/locale/es';
// registerLocale('es', es)

export const DatepickerInline = () => {
  const date = new Date()
    const time = new Date()
  
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9),
  );
    const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 0), 9),
  );
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

    let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
    };
    const getDayClassName = (date) => {
    const day = date.getDate();
    return day % 2 === 0 ? "even-day" : "odd-day"; // Example: Apply different styles for even and odd days
    };
      const getDayClassNamed = () => {
    
    return(' text-primary p-1')
  };

  return (<>
    <div className='d-flex align-items-around justify-content-around w-100 '>
     
      <div className='w-100 '>        Start Date :
        <br />
          <div className='w-25 bg-info '>  
      <DatePicker
          timeClassName={handleColor}
               icon={    <i className="fa fa-calendar"></i>}
          onChange={(dateS) => setStartDate(dateS)}
          selected={new Date(startDate)}
 
      filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          // showTimeInput
          locale="pt-BR"
          todayButton="Hoje"
            // dayClassName={getDayClassNamed}
            // weekClassName={getDayClassNamed}
            // monthClassName={getDayClassNamed}
            // react-datepicker={'bg-danger'}
            
                // isClearable
          
        >
          {/* <button className='btn btn-sm btn-primary rounded-pill w-100'> Filter
          </button> */}
            </DatePicker></div>

      </div>
      <div>        End Date :
        <br />
   <DatePicker
          timeClassName={handleColor}
               icon={    <i className="fa fa-calendar"></i>}
          onChange={(dateS) => setStartDate(dateS)}
          selected={new Date(startDate)}
 
      filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          // showTimeInput
          locale="pt-BR"
          todayButton="Hoje"
            dayClassName={getDayClassNamed}
            weekClassName={getDayClassNamed}
            monthClassName={getDayClassNamed}
            react-datepicker={'bg-danger'}
            
                // isClearable
          
        />
    </div>
  
       </div>
    </>
  );
};