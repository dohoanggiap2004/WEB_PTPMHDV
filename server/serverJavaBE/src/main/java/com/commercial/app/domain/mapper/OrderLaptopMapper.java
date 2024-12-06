package com.commercial.app.domain.mapper;

import com.commercial.app.domain.dtos.request.OrderLaptopRequestDto;
import com.commercial.app.domain.entites.OrderLaptop;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderLaptopMapper {
    OrderLaptop mapToDomain(OrderLaptopRequestDto orderLaptopRequestDto);
    @Mapping(source = "laptop.model", target = "model")
    OrderLaptopRequestDto mapToDto(OrderLaptop orderLaptop);
}
