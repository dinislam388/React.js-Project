import { useState } from "react";

const AddTask = () => {
    // handleInput Box 
    const [input, setInput] = useState("")
    const handleInputBox = (e) => {
        setInput(e.target.value)
    }
    // console.log(input);

    const addNewTask = {
        id: Date.now(),
        // Task: 
    }
    return (
        <>
           <div>
            <form onSubmit={handleInputBox}>
                <input type="text" 
                value={input}
                onChange={handleInputBox}
                placeholder="Add Your Task"
                />

                <button>Add Task</button>
            </form>
            </div> 
        </>
    );
};

export default AddTask;