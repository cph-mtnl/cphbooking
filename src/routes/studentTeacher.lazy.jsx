import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Container } from "@mantine/core";
import '../components/ButtonStyles.css';
import styles from'../components/LoginForm.module.css';

export const Route = createLazyFileRoute('/studentTeacher')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className={styles.container}>
      <h1>BOOK LOKALE</h1>
      <h3>Log ind som</h3>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
      <button className='greenBtn' onClick={() => context.navigate("/loginTeacher")}>Underviser</button>
      <button className='greenBtn' onClick={() => context.navigate("/loginStudent")} >Studerende</button>
      </div>
    </Container>
  )
}
