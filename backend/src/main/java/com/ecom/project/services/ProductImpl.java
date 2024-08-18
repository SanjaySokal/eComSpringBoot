package com.ecom.project.services;

import com.ecom.project.entity.Product;
import com.ecom.project.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductImpl implements ProductService {
    @Autowired
    ProductRepo repo;

    @Override
    public List<Product> getAll() {
        return repo.findAll();
    }

    @Override
    public Product getOne(long id) {
        return repo.findById(id).get();
    }

    @Override
    public boolean delete(long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public boolean addUpdate(Product product) {
        repo.save(product);
        return true;
    }
}
