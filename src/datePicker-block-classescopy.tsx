import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, setSeconds } from 'date-fns';
import './inline.module.css'
export const DatepickerClasses = () => {
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
    
    <div className='d-flex align-items-around justify-content-around w-75 shadow border p-4 '>
    <div className=' '>
     
      <div>        <h6 className=''>Start Date : Fri May 31 2024 11:50:28</h6>
     
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
            
          
        /></div>  <br />
     

           <div className='text-center'> <br /> <button className='btn btn-md rounded-pill bg-primary text-white' onClick={() => alert('lets go party')}> Submit</button></div>
    </div></div>
  
   
    </>
  );
};