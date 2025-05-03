import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      toast.success('Todo added!');
    },

    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        toast.info(`Todo marked as ${todo.completed ? 'completed' : 'incomplete'}`);
      }
    },

    deleteTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      toast.error(`Deleted: "${todo?.text}"`);
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
