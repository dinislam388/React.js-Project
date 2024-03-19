import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = ()=> {
        setCount(value => value +1)
    }
    const decrement = ()=> {
        count > 0 && setCount(value => value-1)
        // setCount(value => value -1)
    }
    return (
        <div>
            <h1 className='count'>{count}</h1>
            <button className='btni' onClick={increment}>+</button>
            <button className='btnd' onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;