package com.commercial_website.Mappers;

import com.commercial_website.DTOs.LaptopDTO;
import com.commercial_website.Entities.Laptop;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface LaptopMapper {
    Laptop mapToEntity(LaptopDTO dto);

    @Mapping(source = "brand.brandName", target = "brandName")
    LaptopDTO mapToDTO(Laptop laptop);
}
