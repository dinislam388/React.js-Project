// import { createContext } from "react";
// import ContextValue from "./ContextValue";

//  const MyContext = createContext()

// const Context = () => {
//     const MyValue = 'Din Islam'
//     return (
//         <div>

//             <MyContext.Provider value={MyValue}>
//               <ContextValue/>  
//             </MyContext.Provider>

//         </div>
//     );
// };

// export default Context;


// =============> Chat GPT <================

import { createContext } from "react";

const MyContext = createContext();

const Context = () => {
    const MyValue = 'Din Islam';
    return (
        <MyContext.Provider value={MyValue}>
            {/* Import ContextValue here to avoid circular dependency */}
            <ContextValue />
        </MyContext.Provider>
    );
};

export default Context;
