import { useReducer } from "react";
import { initialState, reducer } from "../UseReducer/reducer";
import { GlobalContext } from "../Context/Context";

const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            
            <GlobalContext.Provider value={{state, dispatch}}>
                { children }
            </GlobalContext.Provider>

        </div>
    );
};

export default TaskProvider;
