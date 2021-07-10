import React from "react";
import Router from "./routes/Router";
import { GlobalStyle } from './GlobalStyle.js'

function App() {
    return (
      <>
        <GlobalStyle />
        <Router />;
      </>
    )
  }

export default App;
