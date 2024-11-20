import { TextInput, PasswordInput, Button } from "@mantine/core";
import { Container } from "@mantine/core";
import { useState } from "react";
import { useRouteContext } from "@tanstack/react-router";
import styles from "./LoginForm.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createRoute, RouterProvider, useRouteContext } from "@tanstack/react-router";
import { createBrowserRouter } from "@tanstack/router";

export default function LoginForm() {
  const context = useRouteContext({ from: "/login" });
  const [name] = useState("");

  const containerProps = {
    bg: "var(--mantine-color-blue-light)",
    mt: "md",
  };

  async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(document.querySelector("#login-form"));
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(context.supabase);

    const { data, error } = await context.supabase.auth.signInWithPassword({
      email,
      password,
    });

    // 1. Gemme info på brugeren
    const userInfo = {
      name,
      email,
    };

    context.setUserInfo(userInfo);

    // 2. Siden ændrer sig
    // Redirecter til /index
    context.navigate("/booking");
  }

  return (
    <div>
      <Container className={styles.container} {...containerProps}>
        <button variant="transparent" onClick={() => context.navigate("/")}> <i className="fas fa-chevron-left"></i> Tilbage</button>
        <h1>Log ind</h1>
        <form onSubmit={handleLogin} id="login-form">
          <TextInput 
          label="Mail" 
          description="Skriv din skolemail" 
          placeholder="Mail" 
          name="email" 
          required
          size="lg" 
          />

          <PasswordInput
            label="Password"
            description="Skriv dit password"
            placeholder="Password"
            name="password"
            required
            size="lg"
            className="narrow-textarea"
          />
          <Button onClick={handleLogin}>Log ind</Button>
        </form>
      </Container>
    </div>
  );
}