package com.tsdotinc.ecommerce.repository;

import com.tsdotinc.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
