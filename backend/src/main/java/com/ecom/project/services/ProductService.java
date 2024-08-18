package com.ecom.project.services;

import com.ecom.project.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAll();
    Product getOne(long id);
    boolean delete(long id);
    boolean addUpdate(Product product);
}
