import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import BookingOverview from '../components/BookingOverview'

export const Route = createLazyFileRoute('/_layout/myBookings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BookingOverview/>
  )
}
