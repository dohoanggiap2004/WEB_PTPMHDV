package com.commercial.app.domain.mapper;

import com.commercial.app.domain.dtos.request.InstallmentRequestDto;
import com.commercial.app.domain.dtos.response.InstallmentResponseDto;
import com.commercial.app.domain.entites.InstallmentPlan;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface InstallmentMapper {

    InstallmentMapper INSTANCE = Mappers.getMapper(InstallmentMapper.class);

    // Convert Installment entity to InstallmentResponseDto
    InstallmentResponseDto toInstallmentResponseDto(InstallmentPlan installment);

    // Convert InstallmentRequestDto to Installment entity
    InstallmentPlan toInstallment(InstallmentRequestDto installmentRequestDto);

    // Convert Installment entity to InstallmentRequestDto
    InstallmentRequestDto toInstallmentRequestDto(InstallmentPlan installment);

    void updateInstallmentFromDto(InstallmentRequestDto installmentRequestDto, @MappingTarget InstallmentPlan installment);
}
