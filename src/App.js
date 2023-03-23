import React from 'react';
import "./styles.scss"
import AppProvider from "./AppContext";
import Device from "./components/Device";

function App() {
  return (
    <AppProvider>
        <Device />
    </AppProvider>
  );
}

export default App;
