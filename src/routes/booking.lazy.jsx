import { createLazyFileRoute } from '@tanstack/react-router';
import NewCalendar from '../components/NewCalendar';
import Stepper from '../components/Stepper';
import NumberInput from '../components/NumberInput';

export const Route = createLazyFileRoute('/booking')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
    <NewCalendar />
    <Stepper/>
    <NumberInput />
    </div>
  )
}
