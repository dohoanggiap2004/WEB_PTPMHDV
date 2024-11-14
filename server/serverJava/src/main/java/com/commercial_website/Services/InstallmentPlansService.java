package com.commercial_website.Services;

import com.commercial_website.DTOs.InstallmentPlansDTO;

import java.util.List;
import java.util.Set;

public interface InstallmentPlansService {
    InstallmentPlansDTO createInstallmentPlans(InstallmentPlansDTO installmentPlansDTO);
    InstallmentPlansDTO getInstallmentPlans(Long installmentPlanId);
    List<InstallmentPlansDTO> getAllInstallmentPlans();
    void deleteInstallmentPlans(Long installmentPlanId);
    List<InstallmentPlansDTO> searchInstallmentPlans(String companyName);
    InstallmentPlansDTO updateInstallmentPlans(Long id ,InstallmentPlansDTO installmentPlansDTO);
}