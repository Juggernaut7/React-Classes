import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Todo from './pages/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <nav className="mb-6 flex justify-center">
        <Link
          to="/todo"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
        >
          View Todo Page
        </Link>
        <Link
          to="/products"
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
        >
          View Products Page
        </Link>
      </nav>

      <main className="max-w-2xl mx-auto">
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
