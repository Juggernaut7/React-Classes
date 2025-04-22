import React from 'react'

const UserList = ({users, deleteUsers, setEditingUser}) => {
  return (
    <div>
        <h2>Users</h2>
        {users.map((user) => (
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button onClick={() => deleteUsers(user.id)}>Delete</button>
                <button onClick={() => setEditingUser(user)}>Edit</button>
            </div>
        ))}
      
    </div>
  )
}

export default UserList
