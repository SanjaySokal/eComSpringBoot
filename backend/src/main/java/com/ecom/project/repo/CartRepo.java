package com.ecom.project.repo;

import com.ecom.project.entity.Cart;
import com.ecom.project.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepo extends JpaRepository<Cart, Long> {
}
