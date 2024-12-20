package com.commercial.app.services;

import com.commercial.app.domain.dtos.request.InstallmentRequestDto;
import com.commercial.app.domain.dtos.response.InstallmentResponseDto;

import java.util.List;
import java.util.Optional;

public interface InstallmentService {

    // Tạo mới một khoản trả góp
    InstallmentResponseDto createInstallment(InstallmentRequestDto installmentRequestDto);

    // Lấy tất cả các khoản trả góp
    List<InstallmentResponseDto> getAllInstallments();

    // Lấy thông tin khoản trả góp theo ID
    Optional<InstallmentResponseDto> getInstallmentById(String installmentId);

    // Cập nhật thông tin khoản trả góp
    InstallmentResponseDto updateInstallment(String installmentId, InstallmentRequestDto installmentRequestDto);

    // Xóa khoản trả góp theo ID
    void deleteInstallment(String installmentId);

    List<InstallmentResponseDto> searchInstallments(String installmentName);

    String addListInstallments(List<InstallmentRequestDto> installmentRequestDto);

    List<InstallmentResponseDto> getRecommendedInstallments(String laptopId);

    List<InstallmentResponseDto> getInstallmentByLaptop(String laptopId, String term, String downPayment);


}
