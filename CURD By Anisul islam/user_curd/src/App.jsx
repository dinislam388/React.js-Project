import { useState } from "react"
import Users from "./Components/Users"
import './App.css'
import NewUser from "./NewUser"
import usersCotext from "./Context/UserContext"

function App() {
  const [users, setUsers] = useState([
    {id:1, name: 'MD Din Islam', username: 'dinislam388415'},
    {id:2, name: 'Towhid', username: 'towhid388415'},
    {id:3, name: 'Ysin', username: 'yasin388415'},
    {id:4, name: 'Shuvo', username: 'Shuvo388415'}
  ])

  // Delete user
  const handleDeleteUser = (id) => {
    const filterdUser = users.filter((user) => user.id !== id )    // console.log(id);
    setUsers(filterdUser)
  }

  const handleAddNewUser = (newUser)=> {
    console.log(newUser);
    setUsers((previesUser) => [...previesUser, newUser])

  }

  return (
    <>
    {/* <h1>UserInformation</h1> */}
    <usersCotext.provider value={{users, setUsers}}>
      <div>
          <NewUser handleAddNewUser=
          {handleAddNewUser} />
          <Users  handleDeleteUser=
          {handleDeleteUser}/>
        </div>
    </usersCotext.provider>
    </>
  )
}

export default App
