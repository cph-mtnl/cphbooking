import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../components/ButtonStyles.css'
import { Button } from '@mantine/core'
import { Link, useNavigate, useRouteContext } from "@tanstack/react-router";


export const Route = createLazyFileRoute('/_layout/bookingConfirm')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate({from: "/bookingConfirm"}); 

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <i
        style={{ fontSize: '250px', color: '#6eb47e' }}
        className="fa-solid fa-circle-check"
      ></i>
      <p style={{ fontSize: '40px' }}>Booking bekræftet!</p>
      <Link to={"/myBookings"}>
        <Button
          size="lg"
          className="whiteBtn"
          
          // onClick={() => context.navigate('/_layout/myBookings')}
        >
          Gå til mine bookinger
        </Button>
      </Link>
      
    </div>
  )
}