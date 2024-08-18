package com.ecom.project.services;

import com.ecom.project.entity.Cart;

import java.util.List;

public interface CartService {
    List<Cart> getAll();
    Cart getOne(long id);
    boolean delete(long id);
    boolean delete(Cart cart);
    boolean addUpdate(Cart cart);
}
