import React from 'react';
import {Link} from "react-router-dom";

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

export default Home;