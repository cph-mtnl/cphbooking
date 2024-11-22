import { createLazyFileRoute } from '@tanstack/react-router';
import NewCalendar from '../components/NewCalendar';
import Stepper from '../components/Stepper';
import NumberInput from '../components/NumberInput';
import Schedule from '../components/Schedule';
import { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown'; 
import StartDropdown from '../components/StartDropdown'; 
import EndDropdown from '../components/EndDropdown'; 
import dayjs from 'dayjs';
import { combineSchedules } from '../chatgpt-utils/combine-schedule';

export const Route = createLazyFileRoute('/booking')({
  component: RouteComponent,
})

const SUPABASE_URL = "https://czvtumfwyoalvjjriqjd.supabase.co";
const PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dnR1bWZ3eW9hbHZqanJpcWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NzAsImV4cCI6MjA0NzA3ODg3MH0.NEY9zyupKwJFon_TWRWVrlTM8Yd_UXAjB-YhbeAIelE";

function RouteComponent() {
  // const context = useRouteContext({ from: "/booking" });
  const [datePicked, setDatePicked] = useState(dayjs());
  const [bookings, setBookings] = useState({});

  useEffect(() => {
    getBookings();
  }, [datePicked]);

  async function getBookings(){
    const pickedDateFormatted = dayjs(datePicked).format("YYYY-MM-DD")
    // henter data fra supabase 
    const data = await fetch (`${SUPABASE_URL}/rest/v1/bookings?booking_date=eq."${pickedDateFormatted}"`, {
      headers:{
        apikey: PUBLIC_ANON_KEY, 
        Authorization: 'Bearer '+PUBLIC_ANON_KEY, 
      }
    }).then(response => response.json())

    if (data.length == 0) {
      setBookings({
            "Lokale 2.13": [],
            "Lokale 2.88": [],
            "Lokale 3.05": [],
            "Lokale 3.08": [],
            "Lokale 3.14": []
          })
    } else {
      setBookings(combineSchedules(data));
    }
  }

// gemmer data i supabase  
//   const createBooking = async(bookings) => {
//     const anonKey = ''
//     fetch('', {
//     method: 'POST',
//    body: JSON.stringify(bookingToDb),
//    headers:{
//     "Content-Type": "application/json",
//     'apikey': anonKey,
//     'Authorization': 'Bearer ${anonKey}',
//     'Prefer': 'return=representation'
//    }
//   }).then(response => response.json())
//   .then(createdBookings => {
//     setBookings([...bookings, createBooking[0]]);
//     handleCloseModal();  
//   })  
// }; 

/*
  const bookingToDb = {
    booking_date: dayjs(datePicked).format("YYYY-MM-DD"),
    schedule: {
      "Lokale 2.13": [],
      "Lokale 2.88": [],
      "Lokale 3.05": [],
      "Lokale 3.08": [],
      "Lokale 3.14": []
    }
  }

  const bookingToDb = {
    booking_date: dayjs(datePicked).format("YYYY-MM-DD"),
    schedule: {
      "Lokale 2.13": [9, 10, 11],
      "Lokale 2.88": [],
      "Lokale 3.05": [],
      "Lokale 3.08": [],
      "Lokale 3.14": []
    }
  }
*/


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