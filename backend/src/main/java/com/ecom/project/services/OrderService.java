package com.ecom.project.services;

import com.ecom.project.entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAll();
    Order getOne(long id);
    boolean delete(long id);
    boolean addUpdate(Order order);
}
