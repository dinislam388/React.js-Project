import TodoApp from "./Components/TodoApp/TodoApp"

function App() {

  return (
    <>
      <TodoApp/>
    </>
  )
}

export default App



{/* <li id="1">
  <hr className="mt-2"/>
  <div className="my-4 flex justify-between px-1">
      <div className="flex items-center gap-2"> 
          <span onClick="tick(1)" className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
              <i id="checked1" className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"></i>
          </span>
          <p className="md:max-w-[375px] truncate max-w-[280px] ">
              <strike id="strike1" className="text-gray-600 text-sm no-underline ">Task One</strike>
          </p>
      </div> 
      <span onClick="trash(1)" className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
          <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
      </span>
      <span onClick="trash(1)" className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
          <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
      </span>
  </div>
</li> */}
