import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productApi from "../api/productApi";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await productApi.getAllProducts();
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await productApi.deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No Products Available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                {product.productName}
              </Link>{" "}
              – ${product.price} – Qty: {product.quantity}
              <button onClick={() => handleDelete(product.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
