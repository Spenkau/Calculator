import React from 'react';
import "./styles.scss"

function App() {
  return (
      <div className="wrapper">
          <div className="device">
              <ul className="device-display">
                  <li className="visor">
                      <img width="21px" height="21px" src="/images/lens.png" alt="lens"/>
                  </li>
                  <li className="apps-list">
                      <div className="calculator">
                        <button className="to-calculator"></button>
                        <p>Calculator</p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  );
}

export default App;
