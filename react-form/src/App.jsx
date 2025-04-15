import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem('todos')) || [];
    setTodo(storedTodo);
  }, []);

  const saveToLocalStorage = (item) => {
    localStorage.setItem('todos', JSON.stringify(item));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setIsLoading(true);
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
        completed: false
      };
      const updatedTodos = [...todos, newTodo];
      setTodo(updatedTodos);
      saveToLocalStorage(updatedTodos);
      setInputValue('');
      setIsLoading(false);
      
    }
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodo(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodo(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodo(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 items-center justify-center text-white px-4 py-10">
      <h1 className="text-4xl font-extrabold tracking-wide mb-6">My Todo List</h1>

      <form className="mb-6 flex gap-2 w-full max-w-md" onSubmit={handleAddTodo}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a todo item..."
          className="flex-1 px-4 py-2 rounded-lg border-none outline-none text-gray-900 placeholder-gray-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-amber-300 to-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-200"
        >
          {isLoading ? 'Adding...' : 'Add Todo'}
        </button>
      </form>

      <Todo
        todos={todos}
        deleteTodo={deleteTodo}
        handleComplete={handleComplete}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
