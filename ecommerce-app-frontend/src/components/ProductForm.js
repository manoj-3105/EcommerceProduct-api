import { useState } from "react";
import productApi from '../api/productApi';

function ProductForm() {
  const [productData, setProductData] = useState({
    productName: '',
    category: '',
    description: '',
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...productData,
        price: parseFloat(productData.price),
        quantity: parseInt(productData.quantity, 10),
      };
      console.log("Data to send:", dataToSend);
      await productApi.createProduct(dataToSend);

      setProductData({
        productName: '',
        category: '',
        description: '',
        price: 0,
        quantity: 0,
      });
      window.location.reload();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div>
      <h2> Add a New Product </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;