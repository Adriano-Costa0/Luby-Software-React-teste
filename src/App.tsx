import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ContextLoginProvider } from "./contexts/LoginContext";
import Routes from "./routes/index";

import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <ContextLoginProvider>
        <Routes />
      </ContextLoginProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
