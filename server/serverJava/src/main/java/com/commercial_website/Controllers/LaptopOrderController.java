package com.commercial_website.Controllers;

import com.commercial_website.DTOs.LaptopOrderDTO;
import com.commercial_website.Entities.LaptopOrder;
import com.commercial_website.Services.LaptopOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/laptopOrders")
public class LaptopOrderController {
    @Autowired
    LaptopOrderService laptopOrderService;

    @GetMapping
    public ResponseEntity<List<LaptopOrderDTO>> getAlls() {
        return ResponseEntity.ok(laptopOrderService.getAll());
    }

    @PostMapping
    public ResponseEntity<LaptopOrderDTO> postMethodName(@RequestBody LaptopOrderDTO dto) {
        LaptopOrderDTO laptopOrderDTO = laptopOrderService.createOrder(dto);
        return new ResponseEntity<>(laptopOrderDTO, HttpStatus.CREATED);
    }
}
