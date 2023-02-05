import React from 'react';
import {Container} from "@mui/material";
import {Header} from "../header";

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

