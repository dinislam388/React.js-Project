import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date())
    const buttonRef = useRef()
    const buttonRef2 = useRef()

    const tick = () => {
        setDate(new Date())
    };
useEffect(()=>{
    let time;
   
    setInterval(time=()=>{
        const previouisTime=buttonRef.current;
        
        console.log(previouisTime)
        buttonRef2.current.innerText=previouisTime;

    },1000)
    
},[])

    useEffect(() => {
      buttonRef.current.innerText = setInterval(tick, 1000)
    
      return () => {
        clearInterval(buttonRef.current)
      };
    }, [])
    
    return (
        <div>
            <p ref={buttonRef}></p>
            <p ref={buttonRef2}></p>
            <button type="button" onClick={() => clearInterval(buttonRef.current)}>Stop</button>
        </div>
    );
};

export default Clock;