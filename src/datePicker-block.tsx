import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, setSeconds } from 'date-fns';
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import dayjs from 'dayjs';
// import { es } from 'date-fns/locale/es';
// registerLocale('es', es)

export const DatepickerBlock = () => {
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
  return (<>
    <div className='d-flex align-items-around justify-content-around w-75 '>
     
      <div>        Start Date :
        <br />
        <DatePicker
          className={'fs-2'}
          onChange={(date) => setEndDate(date)}
          selected={new Date(endDate)}
      inline
      filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          // showTimeInput
          locale="pt-BR"
            
          
        /></div>
      <div>        End Date :
        <br />
        <DatePicker
          onChange={(date) => setEndDate(date)}
          selected={new Date(endDate)}
      inline
      filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          
          // showTimeInput

          
    /></div>
    </div>
  
   
    </>
  );
};