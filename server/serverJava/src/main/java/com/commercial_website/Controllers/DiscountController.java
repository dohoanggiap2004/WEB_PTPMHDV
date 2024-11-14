package com.commercial_website.Controllers;

import com.commercial_website.DTOs.DiscountDTO;
import com.commercial_website.Services.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/discounts")
public class DiscountController {

    @Autowired
    DiscountService disSer;

    @GetMapping
    public ResponseEntity<List<DiscountDTO>> getAlls() {
        return ResponseEntity.ok(disSer.getAll());
    }

    @PostMapping
    public ResponseEntity<DiscountDTO> postMethodName(@RequestBody DiscountDTO disDTO) {
        DiscountDTO dis = disSer.createDiscount(disDTO);
        return new ResponseEntity<>(dis, HttpStatus.CREATED);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDiscount(@PathVariable Long id){
        disSer.deleteDiscount(id);
        return ResponseEntity.ok("Successfully");
    }

}
