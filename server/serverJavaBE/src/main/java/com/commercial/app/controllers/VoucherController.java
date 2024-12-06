package com.commercial.app.controllers;


import com.commercial.app.domain.dtos.response.VoucherResponseDto;
import com.commercial.app.services.VoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vouchers")
public class VoucherController {

    @Autowired
    private VoucherService voucherService;

    @Autowired
    public VoucherController(VoucherService voucherService) {
        this.voucherService = voucherService;
    }

    @GetMapping
    public ResponseEntity<List<VoucherResponseDto>> getAllVouchers() {
        return ResponseEntity.ok(voucherService.getAllVouchers());
    }

    @GetMapping("{voucherCode}")
    public ResponseEntity<VoucherResponseDto> getVoucherByCode(@PathVariable String voucherCode) {
        VoucherResponseDto voucherDTO = voucherService.getVoucherByCode(voucherCode);
        return ResponseEntity.ok(voucherDTO);
    }

    @PostMapping
    public ResponseEntity<VoucherResponseDto> createVoucher(@RequestBody VoucherResponseDto voucherDTO) {
        VoucherResponseDto createdVoucher = voucherService.createVoucher(voucherDTO);
        return ResponseEntity.status(201).body(createdVoucher);
    }

    @DeleteMapping("{voucherId}")
    public ResponseEntity<String> deleteVoucher(@PathVariable Long voucherId) {
        voucherService.deleteVoucher(voucherId);
        return ResponseEntity.status(200).body("Voucher deleted");
    }
}