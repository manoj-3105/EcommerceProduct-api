import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import productApi from '../api/productApi';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [productData, setProductData] = useState({
    productName: '',
    category: '',
    description: '',
    price: 0,
    quantity: 0,
  });
  const navigate = useNavigate(); 
  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const productDetails = await productApi.getProductById(id);
      setProduct(productDetails);
      setProductData({
        productName: productDetails.productName,
        category: productDetails.category,
        description: productDetails.description,
        price: productDetails.price,
        quantity: productDetails.quantity,
      });
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await productApi.updateProduct(id, productData);
      setEditMode(false);
      fetchProductDetails(); // Refresh details
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await productApi.deleteProduct(id);
      navigate('/'); 
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h2>Product Details</h2>

      {editMode ? (
        <form onSubmit={handleUpdateSubmit}>
          <div>
            <label>Product Name:</label>
            <input type="text" name="productName" value={productData.productName} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Category:</label>
            <input type="text" name="category" value={productData.category} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Description:</label>
            <textarea name="description" value={productData.description} onChange={handleInputChange} />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" name="price" value={productData.price} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Quantity:</label>
            <input type="number" name="quantity" value={productData.quantity} onChange={handleInputChange} required />
          </div>
          <button type="submit">Update Product</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Product Name:</strong> {product.productName}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;