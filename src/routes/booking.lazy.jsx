import { createLazyFileRoute } from '@tanstack/react-router';
import NewCalendar from '../components/NewCalendar';

export const Route = createLazyFileRoute('/booking')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
    <NewCalendar />
    </div>
  )
}
