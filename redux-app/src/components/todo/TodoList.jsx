import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/todoSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Todo List</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-3 rounded shadow mb-2"
          >
            <span
              className={`cursor-pointer text-lg transition ${
                todo.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>

            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 hover:text-red-700 transition text-xl"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default TodoList;
