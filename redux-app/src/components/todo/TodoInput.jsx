import React, { useState } from 'react';
import { addTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
