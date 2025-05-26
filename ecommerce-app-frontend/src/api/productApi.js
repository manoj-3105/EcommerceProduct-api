import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api/products'; // Adjust if needed

const productApi = {
  async getAllProducts() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getProductById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async createProduct(product) {
    try {
      const response = await axios.post(API_BASE_URL, product);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateProduct(id, product) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, product);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteProduct(id) {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
      throw error;
    }
  },
};

export default productApi;