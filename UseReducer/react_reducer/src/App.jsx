import { useReducer } from 'react'
const App = () => {
  const reducer = (state, action) => {
    const {type, payload} = action

//=====> Using If Condition <=====

  //   if (type == 'increment') {
  //     return {
  //       ...state, 
  //       counter1: state.counter1 + payload
  //     }
  //   }
  //   if (type == 'decrement') {
  //     return {
  //       ...state,
  //       counter2: state.counter2 - payload
  //     }
  //   }

//=====> Using switch Condition <===== (Best Practice)

  switch(type) {
    case 'increment':
      return {
        ...state,
        counter1: state.counter1 + payload,
      };
      case 'decrement': 
      return {
        ...state,
        counter2: state.counter2 + payload
      }
  }
  }

  


  const initialState = {
    counter1: 0,
    counter2: 0
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>useReducer </h1>
      <h1>{state.counter1}</h1>
      <button onClick={()=> dispatch(
        {type: "increment", payload: 1})}>Click</button>

      <h2>{state.counter2}</h2>
      <button onClick={()=> dispatch(
        {type: "decrement", payload: 1})}>Click</button>
    </div>
  );
};

export default App;







// ==============> Try to Only Increment {Me} <===================

// import { useReducer } from 'react'
// function App() {
//   const reducer = (state, action) => {
//     const {type, payload} = action

//     if (type == 'increment') {
//       return {
//         counter1: state.counter1 + payload
//       }
//     }
//   }

//   const initialValue = {
//     counter1: 0,
//     counter2: -2
//   }
//   const [state, dispatch] = useReducer(reducer, initialValue)

//   return (
//     <>
//       <div>
//         <h1>This is App</h1>
//         <h1>Count: {state.counter1}</h1>
//         <button onClick={() => dispatch({type: 'increment', payload: 1})}>Click</button>
//       </div>
//     </>
//   )
// }

// export default App




// =============> Zihad Bhai <======================


// import { useReducer } from "react";

// const reducer = (state, action) => {
//   const { type, payload } = action;
//   if (type == "increment") {
//     return {
//       ...state,
//       counter1: state.counter1 + payload,
//     };
//   }
//   // if (type == "dicrement") {
//   //   return {
//   //     ...state,
//   //     counter2: state.counter2 - payload,
//   //   };
//   // }
// };
// const initialState = {
//   counter1: 1,
//   counter2: 2,
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h1>Use Reducer</h1>
//       <h2>count is {state.counter1}</h2>
//       {/* <h2>count is {state.counter2}</h2> */}
//       <div>
//         <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
//           increment
//         </button>
//         {/* <button onClick={() => dispatch({ type: "dicrement", payload: 10 })}>
//           dicrement
//         </button> */}
//       </div>
//     </>
//   );
// }

// export default App;