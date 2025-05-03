import axios from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        const getProducts = async () => { 
            setLoading(true);
            try {
                const res = await axios.get('https://dummyjson.com/products?limit=10&skip=10&select=id,title,price,images,description');
                if (res?.data?.products?.length) {
                    setProducts(res.data.products);
                }
            } catch (error) {
                console.error('Fetch Products Error:', error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []); 

    const addProduct = async (product) => {
        setLoading(true);
        try {
            const response = await axios.post('https://dummyjson.com/products/add', product);
            const newProduct = response?.data;
            if (newProduct) {
                setProducts((prev) => [...prev, newProduct]);
            }
        } catch (error) {
            console.error('Add Product Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const editProduct = async (product) => {
        setLoading(true);
        try {
            const res = await axios.put(`https://dummyjson.com/products/${product?.id}`, product);
            const editedProduct = res.data;
            const mappedProducts = products.map((item) => 
                item.id === editedProduct?.id ? editedProduct : item
            );
            setProducts(mappedProducts);
        } catch (error) {
            console.error('Edit Product Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            const res = await axios.delete(`https://dummyjson.com/products/${id}`);
            const deletedProduct = res?.data;
            if (deletedProduct?.isDeleted || res.status === 200) {
                setProducts((prev) => prev.filter((item) => item.id !== id));
            }
        } catch (error) {
            console.error('Delete Product Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
            loading,
            setLoading,
            addProduct,
            editProduct,
            deleteProduct,
            editing,
            setEditing,
            deleteId,
            setDeleteId
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);
