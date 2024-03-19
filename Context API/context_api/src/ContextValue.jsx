// import { useContext } from "react";
// // import MyContext from './Context'
// import MyContext from "./Context";

// const ContextValue = () => {
//     const value = useContext(MyContext)
//     console.log(value);
//     return (
//         <div>
//             <h1>{value}</h1>
//             <h1>This</h1>
//         </div>
//     );
// };

// export default ContextValue;

//========================

import { useContext } from "react";
import MyContext from "./Context"; // Import correct context

const ContextValue = () => {
    const value = useContext(MyContext);
    console.log(value);
    return (
        <div>
            <h1>{value}</h1>
            <h1>This</h1>
        </div>
    );
};

export default ContextValue;
