import { createLazyFileRoute } from '@tanstack/react-router';
import NewCalendar from '../components/NewCalendar';
import Stepper from '../components/Stepper';

export const Route = createLazyFileRoute('/booking')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
    <NewCalendar />
    <Stepper/>
    </div>
  )
}
