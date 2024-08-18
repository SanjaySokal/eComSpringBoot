package com.ecom.project.rest;

import com.ecom.project.entity.Product;
import com.ecom.project.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin("http://localhost:3000/")
public class ProductRest {
    @Autowired
    ProductService service;

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getProducts() {
        List<Product> products = service.getAll();
        if (products.isEmpty()) {
            return new ResponseEntity<>(List.of(new Product()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Boolean> addProduct(@RequestParam("name") String name,
                                              @RequestParam("price") int price,
                                              @RequestParam("image") MultipartFile image) {
        Product product = new Product();
        product.setName(name);
        product.setPrice(price);
        try {
            product.setImage(image.getBytes());
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        boolean res = service.addUpdate(product);
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getProductImage(@PathVariable long id) {
        Product product = service.getOne(id);
        if (product == null || product.getImage() == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(product.getImage());
    }

    @GetMapping("/delete/{id}")
    public boolean delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
