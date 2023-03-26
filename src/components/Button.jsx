import React from 'react';


const Button = ({value, display, setDisplay, digits, result}) => {

    const changeValue = () => {
        if (value === "C") {
            setDisplay("");
            result.current = null;
        } else if (digits.includes(value) || value === "(" || value === ")") {
            setDisplay(display + value)
        } else {
            setDisplay(display.endsWith('- ') && value === '-' ? display.replace('- ', '+ ') : display + ` ${value} `)
        }
    }


    return (
        <button className="functional-btn" onClick={changeValue}>
            {value}
        </button>
    );
};

export default Button;
