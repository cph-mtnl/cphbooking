import { createLazyFileRoute } from '@tanstack/react-router'
import NewCalendar from '../components/NewCalendar'
import Stepper from '../components/Stepper'
import NumberInput from '../components/NumberInput'
import Schedule from '../components/Schedule'
import { useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import StartDropdown from '../components/StartDropdown'
import EndDropdown from '../components/EndDropdown'
import dayjs from 'dayjs'
import { combineSchedules } from '../chatgpt-utils/combine-schedule'
import { calculateBooking } from '../chatgpt-utils/calculate-booking'
import { Button } from '@mantine/core'

export const Route = createLazyFileRoute('/_layout/booking')({
  component: RouteComponent,
})

const SUPABASE_URL = 'https://czvtumfwyoalvjjriqjd.supabase.co'
const PUBLIC_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dnR1bWZ3eW9hbHZqanJpcWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NzAsImV4cCI6MjA0NzA3ODg3MH0.NEY9zyupKwJFon_TWRWVrlTM8Yd_UXAjB-YhbeAIelE'

function RouteComponent() {
  // const context = useRouteContext({ from: "/booking" });
  const [datePicked, setDatePicked] = useState(dayjs())
  const [bookings, setBookings] = useState({})
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [selectedRoom, setSelectedRoom] = useState('')

  useEffect(() => {
    getBookings()
  }, [datePicked])

  async function getBookings() {
    const pickedDateFormatted = dayjs(datePicked).format('YYYY-MM-DD')
    // henter data fra supabase
    const data = await fetch(
      `${SUPABASE_URL}/rest/v1/bookings?booking_date=eq."${pickedDateFormatted}"`,
      {
        headers: {
          apikey: PUBLIC_ANON_KEY,
          Authorization: 'Bearer ' + PUBLIC_ANON_KEY,
        },
      },
    ).then((response) => response.json())

    if (data.length == 0) {
      setBookings({
        'Lokale 2.13': [],
        'Lokale 2.88': [],
        'Lokale 3.05': [],
        'Lokale 3.08': [],
        'Lokale 3.14': [],
      })
    } else {
      setBookings(combineSchedules(data))
    }
  }


  async function makeBooking() {
    console.log("Makebooking funktionen er kaldt");
  
    const data = calculateBooking(selectedRoom, startTime, endTime);
    console.log("Udregnet booking data:", data);
  
    try {
      // Step 2: Tjek for eksisterende bookinger
      const existingBookingsResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/bookings?booking_date=eq.${dayjs(datePicked).format("YYYY-MM-DD")}&select=*`,
        {
          method: "GET",
          headers: {
            apikey: PUBLIC_ANON_KEY,
            Authorization: `Bearer ${PUBLIC_ANON_KEY}`,
          },
        }
      );
  
      if (!existingBookingsResponse.ok) {
        throw new Error(`Fejl ved hentning af eksisterende bookinger: ${existingBookingsResponse.status}`);
      }
  
      const existingBookings = await existingBookingsResponse.json();
      console.log("Eksisterende bookinger:", existingBookings);
  
      const isConflict = existingBookings.some((booking) => {
        const existingSchedule = booking.schedule[selectedRoom] || [];
        return data[selectedRoom].some((time) => existingSchedule.includes(time));
      });
  
      if (isConflict) {
        console.error("Fejl: Tidsrum er allerede booket!");
        alert("Fejl: Tidsrum er allerede booket. Prøv igen med et andet tidsrum.");
        return;
      }
  
      // Step 4: Gem den nye booking i databasen
      const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings`, {
        method: "POST",
        headers: {
          apikey: PUBLIC_ANON_KEY,
          Authorization: `Bearer ${PUBLIC_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          booking_date: dayjs(datePicked).format("YYYY-MM-DD"),
          schedule: data,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Fejl ved oprettelse af booking: ${response.status}`);
      }
  
      // Check responsens indhold
      const responseBody = await response.text(); // Læs teksten fra responsen
      const result = responseBody ? JSON.parse(responseBody) : {}; // Parse kun hvis ikke tom
  
    } catch (error) {
      console.error("Fejl:", error);
      alert(`Fejl: ${error.message}`);
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
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <NewCalendar date={datePicked} setDate={setDatePicked} />
        {/* <NumberInput /> */}
        <Dropdown
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
        <StartDropdown startTime={startTime} setStartTime={setStartTime} />
        <EndDropdown endTime={endTime} setEndTime={setEndTime} />
        <Button onClick={makeBooking}>Test af make booking</Button>
      </div>
      <div
        style={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stepper />
        <Schedule value={bookings} />
      </div>
    </div>
  )
}
