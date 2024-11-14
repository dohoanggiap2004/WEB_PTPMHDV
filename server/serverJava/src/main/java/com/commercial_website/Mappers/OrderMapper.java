package com.commercial_website.Mappers;

import com.commercial_website.DTOs.OrderDTO;
import com.commercial_website.Entities.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    Order mapToEntity(OrderDTO dto);

    @Mapping(source = "user.fullname", target = "userName")
    OrderDTO mapToDTO(Order order);
}
