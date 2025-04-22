import React, { useEffect } from 'react'
import { useState } from 'react'

const UserForm = ({ addUser, updateUser, editingUser, setEditingUser }) => {

    const [user, setUser] = useState({ name: '', email: '' })

    useEffect(() => {

        if (editingUser) {
            setUser(editingUser)
        } else {
            setUser({ name: '', email: '' })
        }


    }, [editingUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUser) {
            updateUser(user)
            setEditingUser(null)
        } else {
            addUser(user)
        }
        setUser({ name: '', email: '' })
        console.log(user)
    
}
return (
   <form onSubmit={handleSubmit}>
       <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="Name" />
       <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />

       <button className='bg-green-800 p-2 rounded-md' type="submit">{editingUser ? 'Update' : 'Add'}</button>

       {editingUser && <button onClick={() => setEditingUser(null)}>Cancel</button>}

   </form>
)
}

export default UserForm
