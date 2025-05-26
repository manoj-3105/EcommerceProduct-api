package com.tsdotinc.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tsdotinc.ecommerce.model.Product;
import com.tsdotinc.ecommerce.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")

public class ProductController{
	
	@Autowired
	private ProductService productService;
	
	@PostMapping
	public ResponseEntity<Product> addProduct(@RequestBody Product product){
		 System.out.println("Incoming Product Data: " + product);
		Product created = productService.addProduct(product);
		return new ResponseEntity<>(created, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Product>> getAllProducts(){
		return new ResponseEntity<>(productService.getAllProducts(),HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable Long id){
		return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
	}
	@PutMapping("/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product){
		Product updated = productService.updateProduct(id,product);
		return new ResponseEntity<>(updated, HttpStatus.OK);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Product> deleteProduct(@PathVariable Long id){
		productService.deleteProduct(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}