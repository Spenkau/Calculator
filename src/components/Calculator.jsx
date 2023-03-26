import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "./Button";

const Calculator = () => {
    const result = useRef(null)
    const [display, setDisplay] = useState("")
    const btnValues = ["C", "*", "/", "(", "1", "2", "3", ")", "4", "5", "6", "+", "7", "8", "9", "-"]
    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


    const changePriority = () => {
        const res = display.split(' ')
        if (res.some(el => el === '/' || el === '*')) {
            for (let i = 0; i < res.length; i++) {
                switch (res[i]) {
                    case "*":
                        const mul = res[i - 1] * res[i + 1]
                        res.splice(i - 1, 3, mul.toString())
                        break;
                    case "/":
                        const div = `${res[i - 1] / res[i + 1]}`
                        res.splice(i - 1, 3, div)
                        break;
                }
            }
        }
        return res
    }

    const calculateResult = () => {
        const res = changePriority()
        while (res.length !== 1) {
            switch (res[1]) {
                case "+":
                    result.current = (+res[0] +  +res[2]);
                    break;
                case "-":
                    result.current = (+res[0] -  +res[2]);
                    break;
                case "*":
                    result.current = (+res[0] *  +res[2]);
                    break;
                case "/":
                    result.current = (+res[0] /  +res[2]);
                    break;
            }
            res.splice(0, 2)
            res.unshift(result.current)
        }
        setDisplay(result.current ? `${result.current}` : '')
    }

    return (
        <div className="calculator">
            <Link to="/">
                <button className="to-home"></button>
            </Link>
            <div className="content">
                <div className="result-display">
                    <input type="text" disabled={true} placeholder={"input"} value={display} />
                </div>
                <div className="buttons-panel">
                    {
                        btnValues.map((i, index) =>
                            <Button
                                value={i}
                                key={index}
                                display={display}
                                setDisplay={setDisplay}
                                digits={digits}
                                result={result}
                            />
                        )
                    }
                    <button className="get-result" onClick={calculateResult}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;