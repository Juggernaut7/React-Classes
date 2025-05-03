import React from 'react';
import { useProduct } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import Confirm from './Confirm';

const Products = () => {
    const { products, loading, deleteId, deleteProduct, setDeleteId } = useProduct();

    const handleDeleteClick = (id) => {
        setDeleteId(id);
    };

    const confirmDelete = () => {
        if (deleteId) {
            deleteProduct(deleteId); // ✅ Use the currently selected ID
            setDeleteId(null);
        }
    };

    const cancelDelete = () => {
        setDeleteId(null);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-10">Products</h1>

            {loading && (
                <div className="text-center text-lg text-gray-500 animate-pulse">Loading products...</div>
            )}

            {!loading && products.length === 0 && (
                <div className="text-center text-lg text-gray-500">No products found</div>
            )}

            {!loading && products.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[450px]"
                        >
                            {product?.images?.[0] && (
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                            )}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <p className="text-gray-700 font-semibold mb-2">Price: ${product.price}</p>
                                {product.category && (
                                    <p className="text-sm text-gray-500">Category: {product.category}</p>
                                )}
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <Link
                                    to={`/edit/${product.id}`}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDeleteClick(product.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Confirm
                isOpen={!!deleteId}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
        </div>
    );
};

export default Products;
