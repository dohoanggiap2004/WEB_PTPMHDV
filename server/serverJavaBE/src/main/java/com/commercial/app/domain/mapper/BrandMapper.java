package com.commercial.app.domain.mapper;

import com.commercial.app.domain.dtos.response.BrandResponseDto;
import com.commercial.app.domain.entites.Brand;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BrandMapper {
    BrandResponseDto mapToDto(Brand brand);
    Brand mapToModel(BrandResponseDto brandResponseDto);
}
