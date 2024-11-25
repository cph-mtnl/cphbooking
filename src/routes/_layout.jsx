import { createFileRoute, Outlet } from '@tanstack/react-router'
import NavBar from '../components/NavBar'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
