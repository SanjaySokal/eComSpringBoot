package com.ecom.project.rest;

import com.ecom.project.entity.Cart;
import com.ecom.project.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin("http://localhost:3000/")
public class CartRest {
    @Autowired
    CartService service;

    @GetMapping("/all")
    public ResponseEntity<List<Cart>> allCart() {
        List<Cart> data = service.getAll();
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Boolean> addCart(@RequestBody Cart cart) {
        boolean result = service.addUpdate(cart);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<Boolean> deleteCart(@PathVariable Long id) {
        boolean result = service.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
