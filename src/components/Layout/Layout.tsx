import React from "react";
import { Container} from './styles';


export default function Layout ({children}:any) {
    return (
      <Container>
        {children}
      </Container>
    )
  }