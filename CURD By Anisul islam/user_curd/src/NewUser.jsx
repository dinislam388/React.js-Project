import { useState } from "react";

const NewUser = ({handleAddNewUser}) => {
    const [username, setUsername] = useState('')

    // submitForm 
    const submitForm = (e) => {
        e.preventDefault();
        const newUserAdd = { id: new Date().getTime().toString(), username: username

        }
        handleAddNewUser(newUserAdd);
        setUsername('')
    }


    return (
        <>
           <div>
                <h1>Registation New Students</h1>
            </div> 
            <form onSubmit={submitForm}>
                <input type="text" name="username" 
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                placeholder="type username"
                required/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default NewUser;