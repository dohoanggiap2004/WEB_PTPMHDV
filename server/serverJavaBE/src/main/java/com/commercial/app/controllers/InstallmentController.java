package com.commercial.app.controllers;

import com.commercial.app.domain.dtos.request.InstallmentRequestDto;
import com.commercial.app.domain.dtos.response.InstallmentResponseDto;
import com.commercial.app.services.InstallmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/installments")
public class InstallmentController {

    @Autowired
    private InstallmentService installmentService;

    // Tạo mới một khoản trả góp
    @PostMapping
    public ResponseEntity<InstallmentResponseDto> createInstallment(@RequestBody InstallmentRequestDto installmentRequestDto) {
        InstallmentResponseDto createdInstallment = installmentService.createInstallment(installmentRequestDto);
        return new ResponseEntity<>(createdInstallment, HttpStatus.CREATED);
    }

    // Lấy tất cả các khoản trả góp
    @GetMapping
    public ResponseEntity<List<InstallmentResponseDto>> getAllInstallments() {
        List<InstallmentResponseDto> installments = installmentService.getAllInstallments();
        return new ResponseEntity<>(installments, HttpStatus.OK);
    }

    // Lấy thông tin khoản trả góp theo ID
    @GetMapping("/{installmentId}")
    public ResponseEntity<InstallmentResponseDto> getInstallmentById(@PathVariable String installmentId) {
        Optional<InstallmentResponseDto> installment = installmentService.getInstallmentById(installmentId);
        return installment.map(response -> new ResponseEntity<>(response, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Cập nhật thông tin khoản trả góp
    @PutMapping("/{installmentId}")
    public ResponseEntity<InstallmentResponseDto> updateInstallment(
            @PathVariable String installmentId,
            @RequestBody InstallmentRequestDto installmentRequestDto) {
        InstallmentResponseDto updatedInstallment = installmentService.updateInstallment(installmentId, installmentRequestDto);
        return new ResponseEntity<>(updatedInstallment, HttpStatus.OK);
    }

    // Xóa khoản trả góp theo ID
    @DeleteMapping("/{installmentId}")
    public ResponseEntity<Void> deleteInstallment(@PathVariable String installmentId) {
        installmentService.deleteInstallment(installmentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search")
    public ResponseEntity<List<InstallmentResponseDto>> searchInstallments(@RequestParam String keyword) {
        List<InstallmentResponseDto> installments = installmentService.searchInstallments(keyword);
        return new ResponseEntity<>(installments, HttpStatus.OK);
    }

    @PostMapping("/list")
    public ResponseEntity<?> getListInstallments(@RequestBody List<InstallmentRequestDto> installmentRequestDtos) {
        return ResponseEntity.ok(installmentService.addListInstallments(installmentRequestDtos));
    }

    @GetMapping("/recommended")
    public ResponseEntity<List<InstallmentResponseDto>> getRecommendedInstallments() {
        List<InstallmentResponseDto> installments = installmentService.getRecommendedInstallments();
        return new ResponseEntity<>(installments, HttpStatus.OK);
    }

    @GetMapping("/filter")
    public ResponseEntity<List<InstallmentResponseDto>> filterInstallments(@RequestParam String laptopId,
                                                                           @RequestParam String downPayment,
                                                                           @RequestParam String term){
        return new ResponseEntity<>(installmentService.getInstallmentByLaptop(laptopId, downPayment, term), HttpStatus.OK);
    }
}
