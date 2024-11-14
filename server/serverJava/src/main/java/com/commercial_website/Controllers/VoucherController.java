package com.commercial_website.Controllers;

import com.commercial_website.DTOs.VoucherDTO;
import com.commercial_website.Services.VoucherService;
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
    public ResponseEntity<List<VoucherDTO>> getAllVouchers() {
        return ResponseEntity.ok(voucherService.getAllVouchers());
    }

    @GetMapping("{voucherCode}")
    public ResponseEntity<VoucherDTO> getVoucherByCode(@PathVariable String voucherCode) {
        VoucherDTO voucherDTO = voucherService.getVoucherByCode(voucherCode);
        return ResponseEntity.ok(voucherDTO);
    }

    @PostMapping
    public ResponseEntity<VoucherDTO> createVoucher(@RequestBody VoucherDTO voucherDTO) {
        VoucherDTO createdVoucher = voucherService.createVoucher(voucherDTO);
        return ResponseEntity.status(201).body(createdVoucher);
    }

    @DeleteMapping("{voucherId}")
    public ResponseEntity<String> deleteVoucher(@PathVariable Long voucherId) {
        voucherService.deleteVoucher(voucherId);
        return ResponseEntity.status(200).body("Voucher deleted");
    }
}
