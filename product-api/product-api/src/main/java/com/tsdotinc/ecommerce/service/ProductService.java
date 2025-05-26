package com.tsdotinc.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tsdotinc.ecommerce.model.Product;
import com.tsdotinc.ecommerce.repository.ProductRepository;

@Service
public class ProductService{
	
	@Autowired
	private ProductRepository productRepository;
	
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
	
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	public Product getProductById(Long id) {
		return productRepository.findById(id).orElse(null);
	}
	public Product updateProduct(Long id, Product updatedProduct) {
		Product existing = productRepository.findById(id).orElse(null);
		if(existing == null) return null;
		
		existing.setProductName(updatedProduct.getProductName());
		existing.setCategory(updatedProduct.getCategory());
		existing.setDescription(updatedProduct.getDescription());
		existing.setPrice(updatedProduct.getPrice());
		existing.setQuantity(updatedProduct.getQuantity());
		
		return productRepository.save(existing);
	}
	public void deleteProduct(Long id) {
		productRepository.deleteById(id);
	}
}