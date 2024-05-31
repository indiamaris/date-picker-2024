import { useState } from 'react';
// import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, setSeconds } from 'date-fns';
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import Datepicker from '../node_modules/react-tailwindcss-datepicker/dist/components/Datepicker.d';
export const MaterialUi = () => {
  const [dataForm, setDataForm] = useState({
      dateFrom: new Date(),
      dateTo: new Date(),
      selected: -1
    })

  const handleFiler = () => alert(JSON.stringify(dataForm))
  const date = [dayjs('2022-04-17T15:30'), dayjs('2022-04-21T18:30')]
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
  };
    let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card elevation={16} >
        
        <CardContent >
         
          <br />
 <Grid container spacing={4} m={2.5} >
          <Grid direction='row' container spacing={2} >
            <Grid item xs={12} sm={12} xl={5} lg={3}>
              <DatePicker
                disableFuture
                label='Date From'
                value={dataForm.dateFrom}
                onChange={(newValue) => {
                  setDataForm({ ...dataForm, dateFrom: newValue })
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={12} xl={5} lg={3}>
              <DatePicker
                disableFuture
                label='Date To'
                minDate={dataForm.dateFrom}
                value={dataForm.dateTo}
                onChange={(newValue) => {
                  setDataForm({ ...dataForm, dateTo: newValue })
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              </Grid>
            
              </Grid>
                 <Grid direction='row' container spacing={2} my={.5}>
          <Grid item xs={12} sm={12} xl={10} lg={3} ps-2>
              <Button
                variant='contained'
                fullWidth
                onClick={handleFiler}
              >
          Filter
                </Button>
              
              </Grid>
              <Grid item xs={12} sm={12} xl={10} lg={3} ps-2>
             
               </Grid>
                </Grid>
                 
          </Grid>
           <h7> *This library justo offer Date Time Range in pro (paid) version</h7>
        </CardContent>
      </Card>

  </LocalizationProvider>
 
  );
};