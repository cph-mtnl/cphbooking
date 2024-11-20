import { TextInput, PasswordInput, Button } from "@mantine/core";
import { Container } from "@mantine/core";
import { useState } from "react";
import { useRouteContext } from "@tanstack/react-router";
import styles from "./LoginForm.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../components/ButtonStyles.css';


export default function LoginForm() {
  const context = useRouteContext({ from: "/loginStudent" });
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
 


  async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(document.querySelector("#login-form"));
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === '' || email.indexOf("@") === -1) {
      setEmailError("Forkert email")
    }

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
      <Container className={styles.container}>
        <Button size="lg" className='transparentBtn' onClick={() => context.navigate("/")}> <i className="fas fa-chevron-left"></i> Tilbage</Button>
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
          {emailError && <span class="error">Forkert email</span>}

          <PasswordInput
            label="Password"
            description="Skriv dit password"
            placeholder="Password"
            name="password"
            required
            error="Invalid name"

            size="lg"
            className="narrow-textarea"
          />
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <Button size="lg" className='greenBtn' onClick={handleLogin}>Log ind</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}