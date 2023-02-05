import React, {useState} from 'react';
import {Button, Container, TextField} from "@mui/material";
import {LoginForm, LoginTitle} from "./login.styles";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    console.log("Войти")
  }

  return (
    <Container>
      <LoginForm>
        <LoginTitle variant='h3'>Добро пожаловать :)</LoginTitle>
        <TextField
          sx={{width: '400px', mb: 1}}
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
        <TextField
          sx={{width: '400px', mb: 1}}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='пароль'
        />
        <Button
          size="large"
          sx={{width: '400px'}}
          variant='contained'
          onClick={logIn}>Войти</Button>
      </LoginForm>
    </Container>
  );
};