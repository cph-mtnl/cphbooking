import { Stepper, Button, Group } from '@mantine/core';
import { useState } from 'react';
import NewCalendar from '../components/NewCalendar';
import Schedule from '../components/Schedule';
import Dropdown from '../components/Dropdown'; 
import StartDropdown from '../components/StartDropdown'; 
import EndDropdown from '../components/EndDropdown'; 

function StepTwo(){
    return (
    <div style={{display: "flex"}}>
    <div style={{width: "40%", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", }}>
    <NewCalendar date={datePicked} setDate={setDatePicked}/>
    {/* <NumberInput /> */}
    <Dropdown/>
    <StartDropdown/>
    <EndDropdown/>
    </div>
     
      <div style={{width: "60%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Stepper/>
        <Schedule value={bookings} />
      </div>
    </div>
  )
}

export default StepTwo;