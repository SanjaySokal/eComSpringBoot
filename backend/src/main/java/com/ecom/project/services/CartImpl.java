package com.ecom.project.services;

import com.ecom.project.entity.Cart;
import com.ecom.project.entity.Product;
import com.ecom.project.repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CartImpl implements CartService {
    @Autowired
    CartRepo repo;

    @Override
    public List<Cart> getAll() {
        return repo.findAll();
    }

    @Override
    public Cart getOne(long id) {
        Cart cart;
        if (repo.existsById(id)) {
            cart = repo.findById(id).get();
        } else {
            cart = null;
        }
        return cart;
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
    public boolean delete(Cart cart) {
        repo.delete(cart);
        return true;
    }

    @Override
    public boolean addUpdate(Cart cart) {
        repo.save(cart);
        return true;
    }
}
