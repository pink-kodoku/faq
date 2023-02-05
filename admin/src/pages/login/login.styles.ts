import {styled, Typography} from "@mui/material";

export const LoginForm = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
}));

export const LoginTitle = styled(Typography)(({theme}) => ({
  marginBottom: 10,
}));
