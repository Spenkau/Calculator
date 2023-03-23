import React from 'react';
import {Link} from "react-router-dom";

const Calculator = () => {
    return (
        <div className="calculator">
            <Link to="/">
                <button className="to-home"></button>
            </Link>

        </div>
    );
};

export default Calculator;