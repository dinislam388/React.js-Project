const User = ({user, handleDeleteUser}) => {
    const {id, name, username} = user
    

    const deleteUser = (id) => {
        handleDeleteUser(id);
      }
    return (
        <div className="user">
            <h1>{id}</h1>
            <h2>Name: {name}</h2>
            <h4>UserName: {username}</h4>
            <button onClick={() => {deleteUser(id)}} >Delete</button>
        </div>
    );
};

export default User;