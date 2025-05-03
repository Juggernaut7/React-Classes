import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice'

const Cart = () => {
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const total = cartItems.reduce((acc, item) => acc + item.price, 0)
  return (
    <div>
        <h1 className='text-3xl font-bold text-center'>Cart</h1>
        {cartItems.length === 0 && <p className='text-center text-gray-500'>Your cart is empty</p>}
        {cartItems.map(item => (
            <div key={item.id} className='border p-4 rounded shadow mb-4'>
                      {item.name} x {item.quantity} = ${item.price * item.quantity}
                      <button onClick={() => dispatch(removeFromCart(item))}
                        className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-4'
                        >
                        Remove from Cart
                      </button>
                    </div>
                ))}
                <h3 className="text-2xl font-bold mb-4">Total: ${total}</h3>
        
            
      
    </div>
  )
}

export default Cart
