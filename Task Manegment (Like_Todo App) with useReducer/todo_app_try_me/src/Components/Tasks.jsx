import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import Task from "./Task";

const Tasks = () => {
    const {state} = useContext(GlobalContext)
    // console.log(state.todos);

    return (
        <div>
            {
                state.todos.map((task) => <Task key={task.id} task={task} />)
            }
        </div>
    );
};

export default Tasks;











// import { useContext } from "react";
// import { GlobalContext } from "../Context/Context";

// const Tasks = () => {
//     const { state } = useContext(GlobalContext);

//     return (
//         <div>
//             {
//                 state.todos.map((todo) => (
//                     <div key={todo.id}>
//                         <p>{todo.title}</p>
//                         {/* Add other properties you want to display */}
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };

// export default Tasks;
