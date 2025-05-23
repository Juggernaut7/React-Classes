
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import cartReducer from "./cartSlice";
import { toast } from "react-toastify";



export const store = configureStore(
    {
        reducer: {
            todos: todoReducer,
            cart: cartReducer,
        },
    })