package com.commercial_website.Controllers;

import com.commercial_website.DTOs.BrandDTO;
import com.commercial_website.Services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/brands")
public class BrandController {

    @Autowired
    BrandService brdSer;

    @GetMapping
    public ResponseEntity<List<BrandDTO>> getAlls() {
        return ResponseEntity.ok(brdSer.getAll());
    }

    @PostMapping
    public ResponseEntity<BrandDTO> createBrd(@RequestBody BrandDTO brand){
        BrandDTO brd = brdSer.createBrand(brand);
        return new ResponseEntity<>(brd, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<BrandDTO> getByID(@PathVariable Long id) {
        return ResponseEntity.ok(brdSer.getBrand_byID(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBrand(@PathVariable Long id) {
        brdSer.deleteBrand_byID(id);
        return new ResponseEntity<>("Deleted", HttpStatus.OK);
    }
}
