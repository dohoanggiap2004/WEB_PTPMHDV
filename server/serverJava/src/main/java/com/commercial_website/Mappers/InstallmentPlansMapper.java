package com.commercial_website.Mappers;

import com.commercial_website.DTOs.InstallmentPlansDTO;
import com.commercial_website.Entities.InstallmentPlans;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface InstallmentPlansMapper {
    InstallmentPlans mapToEntity(InstallmentPlansDTO dto);
    InstallmentPlansDTO mapToDTO(InstallmentPlans installmentPlans);
}
