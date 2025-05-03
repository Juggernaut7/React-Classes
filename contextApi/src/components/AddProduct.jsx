import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { addProduct, loading } = useProduct();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    images: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Defensive check
    if (!product.title.trim() || !product.price) {
      alert('Title and Price are required!');
      return;
    }

    await addProduct({
      ...product,
      price: Number(product.price),
      images: [product.images],
    });

    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Add Product</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          className="border border-gray-300 p-3 rounded-md w-full"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          className="border border-gray-300 p-3 rounded-md w-full"
          value={product.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          className="border border-gray-300 p-3 rounded-md w-full"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="images"
          placeholder="Image URL"
          className="border border-gray-300 p-3 rounded-md w-full"
          value={product.images}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
