import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <ul className="device-main">
            <li className="visor">
                <img width="21px" height="21px" src="/images/lens.png" alt="lens"/>
            </li>
            <li className="apps-list">
                    <div className="calculator-link">
                        <Link to="/calculator">
                            <button className="to-calculator" onClick={() => {}}></button>
                        </Link>
                        <p>Calculator</p>
                    </div>
            </li>
        </ul>
    );
};

export default Home;