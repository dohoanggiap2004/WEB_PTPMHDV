package com.commercial.app.services.impl;

import com.commercial.app.domain.dtos.request.InstallmentRequestDto;
import com.commercial.app.domain.dtos.response.InstallmentResponseDto;
import com.commercial.app.domain.entites.InstallmentPlan;
import com.commercial.app.domain.entites.Laptop;
import com.commercial.app.domain.mapper.InstallmentMapper;
import com.commercial.app.repositories.InstallmentPlanRepository;
import com.commercial.app.services.InstallmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ImplInstallmentService implements InstallmentService {

    @Autowired
    private InstallmentPlanRepository installmentPlanRepository;

    @Autowired
    private InstallmentMapper installmentMapper;

    // Tạo mới một khoản trả góp
    @Override
    public InstallmentResponseDto createInstallment(InstallmentRequestDto installmentRequestDto) {
        InstallmentPlan installment = installmentMapper.toInstallment(installmentRequestDto);
        InstallmentPlan savedInstallment = installmentPlanRepository.save(installment);
        return installmentMapper.toInstallmentResponseDto(savedInstallment);
    }

    // Lấy tất cả các khoản trả góp
    @Override
    public List<InstallmentResponseDto> getAllInstallments() {
        return installmentPlanRepository.findAll().stream()
                .map(installmentMapper::toInstallmentResponseDto)
                .collect(Collectors.toList());
    }

    // Lấy thông tin khoản trả góp theo ID
    @Override
    public Optional<InstallmentResponseDto> getInstallmentById(String installmentId) {
        Optional<InstallmentPlan> installment = installmentPlanRepository.findById(installmentId);
        return installment.map(installmentMapper::toInstallmentResponseDto);
    }

    // Cập nhật thông tin khoản trả góp
    @Override
    public InstallmentResponseDto updateInstallment(String installmentId, InstallmentRequestDto installmentRequestDto) {
        Optional<InstallmentPlan> optionalInstallment = installmentPlanRepository.findById(installmentId);
        if (optionalInstallment.isPresent()) {
            InstallmentPlan installment = optionalInstallment.get();
            installmentMapper.updateInstallmentFromDto(installmentRequestDto, installment);
            InstallmentPlan updatedInstallment = installmentPlanRepository.save(installment);
            return installmentMapper.toInstallmentResponseDto(updatedInstallment);
        } else {
            throw new RuntimeException("Installment not found with id: " + installmentId);
        }
    }

    // Xóa khoản trả góp theo ID
    @Override
    public void deleteInstallment(String installmentId) {
        installmentPlanRepository.deleteById(installmentId);
    }

    @Override
    public List<InstallmentResponseDto> searchInstallments(String installmentName) {
        Specification<InstallmentPlan> specification = approximateSearch(installmentName);
        return installmentPlanRepository.findAll(specification).stream()
                .map(installmentMapper::toInstallmentResponseDto)
                .collect(Collectors.toList());
    }
    public Specification<InstallmentPlan> approximateSearch(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword.toLowerCase() + "%";

            return criteriaBuilder.or(
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("company")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("term")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("flatInterestRate")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("requiredDocuments")), searchPattern)

            );
        };
    }
}
