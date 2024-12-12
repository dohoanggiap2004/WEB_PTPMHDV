package com.commercial.app.services.impl;

import com.commercial.app.domain.dtos.request.InstallmentRequestDto;
import com.commercial.app.domain.dtos.response.InstallmentResponseDto;
import com.commercial.app.domain.entites.InstallmentPlan;
import com.commercial.app.domain.entites.Laptop;
import com.commercial.app.domain.mapper.InstallmentMapper;
import com.commercial.app.repositories.InstallmentPlanRepository;
import com.commercial.app.repositories.LaptopRepository;
import com.commercial.app.services.InstallmentService;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ImplInstallmentService implements InstallmentService {

    @Autowired
    private InstallmentPlanRepository installmentPlanRepository;

    @Autowired
    private InstallmentMapper installmentMapper;
    @Autowired
    private LaptopRepository laptopRepository;

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

    @Override
    public String addListInstallments(List<InstallmentRequestDto> installmentRequestDto) {
        for (InstallmentRequestDto installmentRequestDto1 : installmentRequestDto) {
            installmentPlanRepository.save(installmentMapper.toInstallment(installmentRequestDto1));
        }
        return "Done";
    }

    @Override
    public List<InstallmentResponseDto> getRecommendedInstallments() {
        Pageable pageable = PageRequest.of(0,6);
        return installmentPlanRepository.findInstallmentsWithZeroInterestOrderByDownPayment(pageable).stream()
                .map(installmentMapper::toInstallmentResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<InstallmentResponseDto> getInstallmentByLaptop(String laptopId, String downPayment, String term) {
        Laptop laptop = laptopRepository.findById(laptopId)
                .orElseThrow(() -> new RuntimeException("Laptop not found with id: " + laptopId));
        String dp = downPayment + "%";
        String t = term + " tháng";
        List<InstallmentPlan> installmentPlanList = installmentPlanRepository.findInstallmentPlans(dp, t);
        List<InstallmentResponseDto> list = new ArrayList<>();
        for (InstallmentPlan installmentPlan : installmentPlanList) {
            int laptopPrice = laptop.getPrice();  // Get the price from the laptop

            int downPaymentPercent = Integer.parseInt(downPayment);
            // Calculate downPayment based on the percent
            int downPaymentAmount = (laptopPrice * downPaymentPercent) / 100;

            // Calculate remaining loan amount (after downPayment)
            int remainingLoanAmount = laptopPrice - downPaymentAmount;

            double flatInterestRate = Double.parseDouble(installmentPlan.getFlatInterestRate().replace("%", "").trim());
            // Calculate the interest
            int months = Integer.parseInt(term);
            double totalInterest = remainingLoanAmount * flatInterestRate * months/ 1200;
            // Calculate totalPayment after downPayment
            int totalPayment = remainingLoanAmount + (int) totalInterest;

            int monthlyInstallment = totalPayment / months;

            installmentPlan.setInstallmentPrice(downPaymentAmount);
            installmentPlan.setMonthlyInstallment(monthlyInstallment);
            installmentPlan.setTotalPayment(totalPayment);

            list.add(installmentMapper.toInstallmentResponseDto(installmentPlan));
        }
        return list;
    }

    public Specification<InstallmentPlan> approximateSearch(String keyword) {
        return (Root<InstallmentPlan> root, CriteriaQuery<?> query, CriteriaBuilder cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            String searchPattern = "%" + keyword.toLowerCase() + "%";

            List<String> keywords = Arrays.asList(
                    "company", "term", "flatInterestRate", "requiredDocuments"
            );

            for (String field : keywords) {
                try {
                    predicates.add(cb.like(cb.lower(root.get(field)), searchPattern));
                } catch (IllegalArgumentException e) {
                    System.err.println("Field '" + field + "' does not exist or is incompatible: " + e.getMessage());
                }
            }
            return predicates.isEmpty() ? cb.conjunction() : cb.or(predicates.toArray(new Predicate[0]));
        };
    }
}
