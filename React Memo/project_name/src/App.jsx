// =======================> 3 <==============================
import { useState, useMemo } from "react";
// =======================> 3 <==============================
// import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  // const increment = () => {
  //       setCount((c) => c + 1);
  //     };

// =======================> 3 <==============================
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState([]);
  // const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };
// =======================> 3 <==============================

//   return (
//     <>
//       {/* <todos todos={todos} /> */}
      
//        <hr />
       
//        <div>   
//          Count: {count}
//         <button onClick={increment}>+</button>
//        </div>
//     </>
//   )
// }


// =======================> 3 <==============================
// return (
//   <div>
//     <div>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//     <hr />
//     <div>
//       Count: {count}
//       <button onClick={increment}>+</button>
//       <h2>Expensive Calculation</h2>
//       {calculation}
//     </div>
//   </div>
// );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// =======================> 3 <==============================

};

export default App



// import { useState } from "react";
// // import ReactDOM from "react-dom/client";
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo 1", "todo 2"]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <>
//       <todos todos={todos} />
//       <hr />
//       <div>
        
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);