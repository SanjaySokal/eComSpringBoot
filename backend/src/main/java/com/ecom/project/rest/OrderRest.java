package com.ecom.project.rest;

import com.ecom.project.entity.Cart;
import com.ecom.project.entity.Order;
import com.ecom.project.services.CartImpl;
import com.ecom.project.services.OrderImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin("http://localhost:3000/")
public class OrderRest {
    @Autowired
    OrderImpl service;

    @Autowired
    CartImpl cart;

    @GetMapping("/all")
    public ResponseEntity<List<Order>> allOrders() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Boolean> addOrder(@RequestBody List<Order> order) {
        boolean result = service.addUpdate(order);
        for (Order orderIn : order) {
            cart.delete(orderIn.getId());
        }
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<Boolean> deleteOrder(@PathVariable Long id) {
        boolean result = service.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
