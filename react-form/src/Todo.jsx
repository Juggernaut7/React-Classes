import React from 'react';
import TodoItem from './TodoItem';


const Todo = ({ todos, deleteTodo, handleComplete, updateTodo }) => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Todos</h2>

      {todos.length === 0 ? (
        <p className="text-gray-200 text-center">No todo items found.</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              handleComplete={handleComplete}
              updateTodo={updateTodo}
              
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
