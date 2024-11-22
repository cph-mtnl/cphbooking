import { createLazyFileRoute } from '@tanstack/react-router'
import LoginFormTeacher from '../components/LoginFormTeacher'

export const Route = createLazyFileRoute('/loginTeacher')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      {/* <div>{context.userInfo.name ?? 'No name'}</div> */}
      <LoginFormTeacher />
    </div>
  )
}
