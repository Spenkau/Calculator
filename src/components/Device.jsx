import React from 'react';
import {Link, Route, Routes} from "react-router-dom"
import Calculator from "./Calculator";

const Home = () => {
    return (
        <ul className="device-main">
            <li className="visor">
                <img width="21px" height="21px" src="/images/lens.png" alt="lens"/>
            </li>
            <li className="apps-list">
                <Link to="/calculator">
                    <div className="calculator-link">
                        <button className="to-calculator" onClick={() => {}}></button>
                        <p>Calculator</p>
                    </div>
                </Link>
            </li>
        </ul>
    );
};

const Device = () => {
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
};

export default Device;