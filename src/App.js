import React from 'react';
import "./styles.scss"
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Calculator from "./components/Calculator";

function App() {

  return (
      <div className="wrapper">
          <div className="device">
              <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route path="/calculator" element={<Calculator />}></Route>
              </Routes>
          </div>
      </div>
  );
}

export default App;
