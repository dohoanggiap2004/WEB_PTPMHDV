package com.commercial.app.controllers;

import com.commercial.app.domain.dtos.request.OrderLaptopRequestDto;
import com.commercial.app.services.OrderLaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/laptops_orders")
public class OrderLaptopController {
    @Autowired
    private OrderLaptopService orderLaptopService;

    @PostMapping
    public ResponseEntity<OrderLaptopRequestDto> createOrderLaptop(@RequestBody OrderLaptopRequestDto orderLaptopRequestDto) {
        return ResponseEntity.ok(orderLaptopService.createOrderLaptop(orderLaptopRequestDto));
    }
}
