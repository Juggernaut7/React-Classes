import React from 'react'
import ProductList from '../components/cart/ProductList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from '../components/cart/Cart'

const ProductPage = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center'>Products</h1>
        <ProductList />
        <Cart />
        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default ProductPage
