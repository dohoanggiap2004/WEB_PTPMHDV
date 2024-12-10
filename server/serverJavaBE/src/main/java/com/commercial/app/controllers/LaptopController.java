package com.commercial.app.controllers;

import com.commercial.app.domain.dtos.request.LaptopCreateRequestDto;
import com.commercial.app.domain.dtos.request.LaptopUpdateRequestDto;
import com.commercial.app.domain.dtos.response.LaptopResponseDto;
import com.commercial.app.domain.entites.Laptop;
import com.commercial.app.services.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laptops")
public class LaptopController {
    @Autowired
    LaptopService laptopService;

    @GetMapping("/request-page")
    public ResponseEntity<Page<LaptopResponseDto>> getAllLaptops(@RequestParam int page,
                                                                 @RequestParam(defaultValue = "24") int size) {
        return ResponseEntity.ok(laptopService.getAllLaptops(page, size));
    }

    @GetMapping
    public ResponseEntity<List<LaptopResponseDto>> getAllLaptops() {
        return ResponseEntity.ok(laptopService.getAllLaptops());
    }
    @GetMapping("{laptopId}")
    public ResponseEntity<LaptopResponseDto> getLaptop(@PathVariable String laptopId) {
        return ResponseEntity.ok(laptopService.getLaptop(laptopId));
    }
    @PostMapping
    public ResponseEntity<?> addLaptop(@RequestBody LaptopCreateRequestDto laptop) {
        return ResponseEntity.ok(laptopService.createLaptop(laptop));
    }

    @PutMapping("{laptopId}")
    public ResponseEntity<?> updateLaptop(@PathVariable String laptopId ,@RequestBody LaptopUpdateRequestDto laptopUpdateRequestDto) {
        return  ResponseEntity.ok(laptopService.updateLaptop(laptopId, laptopUpdateRequestDto));
    }

    @DeleteMapping("{laptopId}")
    public ResponseEntity<?> deleteLaptop(@PathVariable String laptopId) {
        laptopService.deleteLaptop(laptopId);
        return ResponseEntity.ok("Deleted Laptop " + laptopId);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<LaptopResponseDto>> getAllLaptops(@RequestParam String keyword,
                                                                 @RequestParam int page,
                                                                 @RequestParam(defaultValue = "24") int size){

        return ResponseEntity.ok(laptopService.searchLaptops(keyword, page, size));
    }

    @DeleteMapping("/all")
    public ResponseEntity<?> deleteAllLaptops() {
        laptopService.deleteAllLaptops();
        return ResponseEntity.ok("Deleted all Laptops");
    }

    @GetMapping("/analytic")
    public ResponseEntity<?> getLaptopAnalytic() {
        return ResponseEntity.ok(laptopService.getTopSellingBrands());
    }
}
