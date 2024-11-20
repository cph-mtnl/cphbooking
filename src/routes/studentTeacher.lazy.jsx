import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import {Container} from 'postcss/lib/container'
import '../components/LoginForm.module.css'
import '../components/ButtonStyles.css'
import { useRouteContext } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/studentTeacher')({
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext(); // Ensure useRouteContext is used to get context

  return (
    <Container>
      <h1>BOOK LOKALE</h1>
      <h3>Log ind som</h3>
      <button className='greenBtn' onClick={() => context.navigate('/loginTeacher')}>Underviser</button>
      <button className='greenBtn' onClick={() => context.navigate('/loginStudent')}>Studerende</button>
    </Container>
  )
}