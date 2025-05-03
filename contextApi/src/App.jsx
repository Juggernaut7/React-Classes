import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Products from './components/Products'
import EditProduct from './components/EditProduct'


const App = () => {
  return (
    <div className='min-h-screen bg-gray'>
      <nav className='bg-blue-600 p-4 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/' className='text-2xl'>Peoducts App</Link>
          <Link to='/add' className='bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 '>Add Product</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />

      </Routes>

    </div>
  )
}

export default App
