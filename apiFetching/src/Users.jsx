import React, { useEffect } from 'react'
import UserForm from './UserForm';
import axios from 'axios';
import { useState } from 'react';
import UserList from './UserList';


const API_URL = import.meta.env.VITE_API_URL_USER;



const Users = () => {
const [users,setUsers] = useState([]);
const [editingUser,setEditingUser] = useState(null);
useEffect(() => {
    axios.get(API_URL).then((response) => {
        setUsers(response.data);
    });

}, []);
const addUser = (user) => {
    axios.post(API_URL, user).then((response) => {
        setUsers([...users, response.data]);

    });

};
const updateUser = (updatedUser) => {
    axios.put(`${API_URL}/${updatedUser.id}`, updatedUser).then((response) => {
        setUsers(users.map((user) => user.id === updatedUser.id ? updatedUser : user));
        setEditingUser(null);

    });

   
};
const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
        setUsers(users.filter((user) => user.id !== id));
    })

};
  return (
    <div>
        <h1 className='font-bold text-[30px]'>User Manager</h1>
        <UserForm
        addUser={addUser}
        updateUser={updateUser}
        deleteUser={deleteUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}

        />
        <UserList
        users={users}
        deleteUser={deleteUser}
        setEditingUser={setEditingUser}

        
        />
      
    </div>
  )
}

export default Users
