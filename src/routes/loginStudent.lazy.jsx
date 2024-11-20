import { createLazyFileRoute, useRouteContext} from '@tanstack/react-router'
import LoginForm from '../components/LoginForm'

export const Route = createLazyFileRoute('/loginStudent')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div>{context.userInfo.name ?? 'No name'}</div>
      <LoginForm />
    </div>
  )
}
