package com.commercial_website.Mappers;

import com.commercial_website.DTOs.DiscountDTO;
import com.commercial_website.Entities.Discount;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DiscountMapper {
    Discount mapToEntity(DiscountDTO dto);
    DiscountDTO mapToDTO(Discount discount);
}
