import './App.css'
import AddTask from './Components/AddTask'
import TaskProvider from './Components/TaskProvider'
import Tasks from './Components/Tasks'

function App() {

  return (
    <>
      <div>
        <h1>This is app</h1>
        <div>
          <TaskProvider>
            <div>
              <Tasks/>
              <AddTask/>
            </div>
          </TaskProvider>
        </div>
      </div>
    </>
  )
}

export default App




// 1. create context  
// 2. create useReducer with todo provider (Taskmanagment)
// 3. Recive UseReducer file Value Pass app js ({children}) initialState (Reducer)
// 4. check todos[ {id: 5, name: 'something'}] , map (Todos)  (Reducer)
//    state.todos.map((todo) => console.log())
//    AddTodo 
// 5. single Todo  (Add, Delete, Complite)
// 6. localStoreage














