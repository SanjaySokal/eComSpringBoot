package com.ecom.project.services;

import com.ecom.project.entity.Order;
import com.ecom.project.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderImpl implements OrderService {
    @Autowired
    OrderRepo repo;

    @Override
    public List<Order> getAll() {
        return repo.findAll();
    }

    @Override
    public Order getOne(long id) {
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
    public boolean addUpdate(Order order) {
        repo.save(order);
        return true;
    }
}
