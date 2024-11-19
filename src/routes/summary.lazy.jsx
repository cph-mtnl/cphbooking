import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/summary')({
  component: summary,
})

function Summary() {
  const context = useRouteContext({ from: '/summary' })
  console.log(context)

  return <div>Hello from About!</div>
}
