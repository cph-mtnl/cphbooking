import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import FrontPageNavbar from '../components/FrontPageNavbar'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const context = useRouteContext({ from: '/' })
  console.log(context)

  return (
    <div>
      <FrontPageNavbar />
    </div>
  )
}
