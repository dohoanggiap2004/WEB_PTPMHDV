package com.commercial_website.Mappers;

import com.commercial_website.DTOs.BrandDTO;
import com.commercial_website.Entities.Brand;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BrandMapper {
    Brand mapToEntity(BrandDTO dto);
    BrandDTO mapToDTO(Brand brand);
}
