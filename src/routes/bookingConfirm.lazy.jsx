import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ButtonStyles from '../components/ButtonStyles.css';

export const Route = createLazyFileRoute('/bookingConfirm')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh"}}>

        <i style={{fontSize: "250px", color: "#6eb47e"}}className="fa-solid fa-circle-check"></i>
        <p style={{fontSize: "40px"}}>Booking bekræftet!</p>
        <button className='whiteBtn' onClick={() => context.navigate("/")}>Tilbage til forsiden</button>

    </div>
  )
  
}

