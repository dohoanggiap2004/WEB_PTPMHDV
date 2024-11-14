package com.commercial_website.Controllers;

import com.commercial_website.DTOs.InstallmentPlansDTO;
import com.commercial_website.Services.InstallmentPlansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/installments")
public class InstallmentPlansController {
    @Autowired
    private InstallmentPlansService installmentPlansService;

    @GetMapping
    public ResponseEntity<List<InstallmentPlansDTO>> getAllInstallmentPlans() {
        return ResponseEntity.ok(installmentPlansService.getAllInstallmentPlans());
    }

    @GetMapping("{id}")
    public ResponseEntity<InstallmentPlansDTO> getInstallmentPlanById(@RequestBody Long id) {
        InstallmentPlansDTO getIP = installmentPlansService.getInstallmentPlans(id);
        return ResponseEntity.ok(getIP);
    }

    @PostMapping()
    public ResponseEntity<InstallmentPlansDTO> createInstallmentPlan(@RequestBody InstallmentPlansDTO plans) {
        return ResponseEntity.ok(installmentPlansService.createInstallmentPlans(plans));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteInstallmentPlan(@PathVariable Long id) {
        installmentPlansService.deleteInstallmentPlans(id);
        return ResponseEntity.ok("Installment plans deleted");
    }

    @GetMapping("/search")
    public ResponseEntity<List<InstallmentPlansDTO>> searchInstallmentPlans(@RequestParam String company) {
        return ResponseEntity.ok(installmentPlansService.searchInstallmentPlans(company));
    }

    @PutMapping("{id}")
    public ResponseEntity<InstallmentPlansDTO> updateInstallmentPlan(@PathVariable Long id, @RequestBody InstallmentPlansDTO plans) {
        return ResponseEntity.ok(installmentPlansService.updateInstallmentPlans(id, plans));
    }
}
