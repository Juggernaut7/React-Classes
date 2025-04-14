import React, { useState, useEffect } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo, handleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // 🛠 Fix: Sync editText with updated todo.text when todo changes
  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  const handleSave = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className='bg-white p-4 border border-gray-300 rounded shadow flex justify-between items-center mb-2'>
      {isEditing ? (
        <div className='flex-1 mr-2'>
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className='border border-gray-300 rounded px-2 py-1 w-full text-black'
          />
        </div>
      ) : (
        <div className='flex items-center flex-1 mr-2'>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => handleComplete(todo.id)}
            className='mr-2'
          />
          <span className={todo.completed ? 'line-through text-gray-400' : 'text-black'}>
            {todo.text}
          </span>
        </div>
      )}

      <div className='flex items-center space-x-2'>
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className='bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600'
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
