package com.commercial_website.Mappers;

import com.commercial_website.DTOs.LaptopOrderDTO;
import com.commercial_website.Entities.LaptopOrder;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LapOrderMapper {
    LaptopOrder mapToEntity(LaptopOrderDTO laptopOrderDTO);

    @Mapping(source = "laptop.laptopId", target = "laptopId")
    @Mapping(source = "order.orderId", target = "orderId")
    LaptopOrderDTO mapToDTO(LaptopOrder laptopOrder);
}
