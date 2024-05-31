import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, setSeconds,addDays } from 'date-fns';
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import dayjs from 'dayjs';
// import { es } from 'date-fns/locale/es';
// registerLocale('es', es)

export const DatepickerPortalInline = () => {
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
  return (<>
    <div className='d-flex align-items-around justify-content-around w-75 '>
     
      <div>        Start Date :
        <br />
        <DatePicker
         timeClassName={handleColor}
          onChange={(date) => setStartDate(date)}
          selected={startDate}
      filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          withPortal
                portalId="root-portal-start"
          locale="pt-BR"
                todayButton="Hoje"
          
        /></div>
      <div>        End Date :
        <br />
        <DatePicker
          onChange={(dateE) => setEndDate(dateE)}
          selected={endDate}
      filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          withPortal
                portalId="root-portal"
          maxDate={[ new Date(), addDays(new Date(), -1) ]}
          todayButton="Hoje"
          
    /></div>
    </div>
  
   
    </>
  );
};