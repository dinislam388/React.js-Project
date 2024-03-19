import { useState } from "react";
import React from 'react';
import './Counter.css'

const Counter = () => {
    const [Count, setCount] = useState(0)

    const subhanallah = () => {
        Count < 33 && setCount(value => value +1)
    }
    const alhamdulillah = () => {
        Count < 33 && setCount(value => value +1)
    }
    const allahuakbar = () => {
        Count < 34 && setCount(value => value +1)
    }
    const decrement = () => {
        Count > 0 && setCount(value => value -1)
    }
    const reset = () => {
        setCount(0)
    }    
    return (
        <div className="bg">
            <h1 className='count'>{Count}</h1>
            <button className='subhanallah' onClick={subhanallah}>سبحان الله</button>
            <button className="alhamdulillahBtn" onClick={alhamdulillah}>الحمد لله</button>
            <button className="allahuakbarBtn" onClick={allahuakbar}>الله أكبر</button>
            {/* <button className='btnd' onClick={decrement}>-</button> */}
            <button className="resetBtn" onClick={reset}>اعاده تعيين <span>(Rest)</span></button>
        </div>
    );
};

export default Counter;