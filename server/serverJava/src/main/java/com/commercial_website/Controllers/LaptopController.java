package com.commercial_website.Controllers;

import com.commercial_website.DTOs.LaptopDTO;
import com.commercial_website.DTOs.TopSellingBrandDTO;
import com.commercial_website.Services.LaptopService;
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
    LaptopService lapSer;

    @GetMapping("/request-page")
    public Page<LaptopDTO> getLaptops(
            @RequestParam Long brandId,
            @RequestParam int page,
            @RequestParam int size) {
        return lapSer.getLaptopsByBrand(brandId, page, size);
    }
    @GetMapping
    public ResponseEntity<List<LaptopDTO>> getAlls() {
        return ResponseEntity.ok(lapSer.getAll());
    }

    @PostMapping
    public ResponseEntity<LaptopDTO> createLaptop(@RequestBody LaptopDTO lapDTO) {
        LaptopDTO save = lapSer.createLaptop(lapDTO);
        return new ResponseEntity<>(save, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<LaptopDTO> getByID(@PathVariable Long id) {
        return ResponseEntity.ok(lapSer.getLaptop_byID(id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<LaptopDTO>> getByElement(@RequestParam(required = false) String model,
                                                        @RequestParam(required = false) String ram,
                                                        @RequestParam(required = false) String gpu,
                                                        @RequestParam(required = false) String processor,
                                                        @RequestParam(required = false) String storage,
                                                        @RequestParam(required = false) Integer price,
                                                        @RequestParam(required = false) Double screenSize,
                                                        @RequestParam(required = false) String brandName) {

        return ResponseEntity.ok(lapSer.searchLaptops(model, ram, gpu, processor, storage, price, screenSize, brandName));
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLaptop(@PathVariable Long id) {
        lapSer.deleteLaptop(id);
        return new ResponseEntity<>("Laptop deleted", HttpStatus.OK);
    }
    @PutMapping("{id}")
    public ResponseEntity<LaptopDTO> updateLaptop(@PathVariable Long id, @RequestBody LaptopDTO lapDTO) {
        LaptopDTO save = lapSer.updateLaptop(id, lapDTO);
        return new ResponseEntity<>(save, HttpStatus.OK);
    }

    @GetMapping("/analytics")
    public ResponseEntity<?> getLaptopAnalytics() {
        List<TopSellingBrandDTO> response = lapSer.getTopSellingBrands();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}