import React from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addToCart } from '../../redux/cartSlice' 
// import { addToCart } from '../../redux/cartSlice'

const ProductList = () => {
    const products = [
        {
          id: 1,
          name: 'T-shirt',
          price: 20,
          image: 'https://images.unsplash.com/photo-1585386959984-a41552284a15?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 2,
          name: 'Jeans',
          price: 40,
          image: 'https://images.unsplash.com/photo-1583000122319-9f4a306d5aa0?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 3,
          name: 'Sneakers',
          price: 60,
          image: 'https://images.unsplash.com/photo-1603808033192-082d6919d672?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 4,
          name: 'Hat',
          price: 15,
          image: 'https://images.unsplash.com/photo-1620521383264-61e2cf08f399?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 5,
          name: 'Shoes',
          price: 80,
          image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 6,
          name: 'Hoodie',
          price: 35,
          image: 'https://images.unsplash.com/photo-1602810311617-d7e3c4f98e05?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 7,
          name: 'Backpack',
          price: 45,
          image: 'https://images.unsplash.com/photo-1585386959983-2a50424eec5d?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 8,
          name: 'Watch',
          price: 120,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 9,
          name: 'Sunglasses',
          price: 50,
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 10,
          name: 'Jacket',
          price: 90,
          image: 'https://images.unsplash.com/photo-1618354691212-5ad45bf50a40?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 11,
          name: 'Scarf',
          price: 25,
          image: 'https://images.unsplash.com/photo-1617692854696-5cf7e51c6cb0?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 12,
          name: 'Wallet',
          price: 30,
          image: 'https://images.unsplash.com/photo-1589906690533-580d17a07b29?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 13,
          name: 'Cap',
          price: 18,
          image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 14,
          name: 'Bracelet',
          price: 22,
          image: 'https://images.unsplash.com/photo-1603201667141-0f4d5f7186d1?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 15,
          name: 'Belt',
          price: 28,
          image: 'https://images.unsplash.com/photo-1555529669-e69f0c0d1a7e?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 16,
          name: 'Beanie',
          price: 12,
          image: 'https://images.unsplash.com/photo-1600180758890-806f1ecb3dc4?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 17,
          name: 'Dress Shirt',
          price: 48,
          image: 'https://images.unsplash.com/photo-1600185365109-79dc994a24e8?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 18,
          name: 'Gloves',
          price: 20,
          image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7ed1da?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 19,
          name: 'Running Shorts',
          price: 32,
          image: 'https://images.unsplash.com/photo-1622436790396-cd33b1a781e9?auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 20,
          name: 'Sweatpants',
          price: 38,
          image: 'https://images.unsplash.com/photo-1627932290305-c0d9f712b0b5?auto=format&fit=crop&w=600&q=80'
        }
      ];
      
    const dispatch = useDispatch()
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />

                        <p className="text-gray-700">${product.price}</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                            onClick={() => dispatch(addToCart(product))}
                        >Add to Cart</button>
                    </div>
                ))}
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
          

        </div>
    )
}

export default ProductList
