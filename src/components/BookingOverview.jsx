import { useEffect, useState } from 'react';
import { createLazyFileRoute, Link, useRouteContext } from '@tanstack/react-router';
import { createClient } from "@supabase/supabase-js";
import { Button, Container } from '@mantine/core';
import styles from './BookingOverviewStyles.module.css';
import dayjs from 'dayjs';
import '../components/ButtonStyles.css';


const SUPABASE_URL = 'https://czvtumfwyoalvjjriqjd.supabase.co';
const PUBLIC_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dnR1bWZ3eW9hbHZqanJpcWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NzAsImV4cCI6MjA0NzA3ODg3MH0.NEY9zyupKwJFon_TWRWVrlTM8Yd_UXAjB-YhbeAIelE'; // Replace with your actual key
const supabase = createClient(SUPABASE_URL, PUBLIC_ANON_KEY);

export default function BookingOverview() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // const userEmail = "user-email@example.com"; // Replace with context or auth state

  useEffect(() => {
    viewBookings();
  }, []);

  // async function fetchBookings() {
  //   setLoading(true);
  //   try {
  //     const { data, error } = await supabase
  //       .from('bookings')
  //       .select('*')
  //       .eq('email', userEmail);

  //     if (error) throw error;
  //     setBookings(data);
  //   } catch (error) {
  //     console.error('Error fetching bookings:', error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function viewBookings() {
    setLoading(true);
    const data = await fetch(
      `${SUPABASE_URL}/rest/v1/bookings`,
      {
        headers: {
          apikey: PUBLIC_ANON_KEY,
          Authorization: `Bearer ${PUBLIC_ANON_KEY}`,
        },
      }
    ).then((response) => response.json());

    console.log(data); 
      setBookings(data);
      setLoading(false);
  }

  async function deleteBooking(bookingId) {
    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

      if (error) throw error;
      // Refresh bookings after deletion
      viewBookings();
    } catch (error) {
      console.error('Error deleting booking:', error.message);
    }
  }

  return (
    <Container className={styles.container}>
      <h1>Mine aktuelle bookinger</h1>
      {loading ? (
        <p>Henter data...</p>
      ) : (
        <div>
          {bookings.map((booking) => (
            <div key={booking.id} className={styles.bookingCard}>
              <div>
                <p><b>Dato:</b> {booking.booking_date}</p>
                <p><b>Lokale:</b> {booking.selectedRoom}</p>
                <p><b>Tidsrum:</b> {booking.startTime} - {booking.endTime}</p>
                <p><b>Email:</b> {booking.email}</p>
              </div>
              <Button 
                className="deleteButton" 
                onClick={() => deleteBooking(booking.id)}
              >
                Slet booking
              </Button>
            </div>
          ))}
        </div>
      )}

        <Link to="/booking">
        <div style={{textAlign: "center", padding: "30px 0"}}>
        <Button className="greenBtn">Opret ny booking</Button>
        </div>
        </Link>
    </Container> 
  );  
}

