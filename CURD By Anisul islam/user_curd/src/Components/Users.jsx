import { useContext } from "react";
import User from "./User";
import { usersCotext } from "../Context/UserContext";

const Users = ({ handleDeleteUser }) => {
    const {users, setUsers} = useContext(usersCotext)
    // console.log(users);
    return (
        <div className="users">
            {
                users.map((user)=> <User key={user.id}  user={user} handleDeleteUser={handleDeleteUser}/>)
            }
        </div >
    );
};

export default Users;