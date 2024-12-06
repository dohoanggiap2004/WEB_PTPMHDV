package com.commercial.app.domain.mapper;


import com.commercial.app.domain.dtos.request.LaptopCreateRequestDto;
import com.commercial.app.domain.dtos.request.LaptopUpdateRequestDto;
import com.commercial.app.domain.dtos.response.LaptopResponseDto;
import com.commercial.app.domain.entites.Laptop;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LaptopMapper {
    @Mapping(source = "image", target = "image")
    LaptopResponseDto mapToResponseDto(Laptop laptop);
    @Mapping(source = "image", target = "image")
    LaptopCreateRequestDto mapToCreateRequestDto(Laptop laptop);
    @Mapping(source = "image", target = "image")
    Laptop mapToDomain(LaptopCreateRequestDto laptopCreateRequestDto);
    @Mapping(source = "image", target = "image")
    LaptopUpdateRequestDto mapToUpdateRequestDto(Laptop laptop);
}
