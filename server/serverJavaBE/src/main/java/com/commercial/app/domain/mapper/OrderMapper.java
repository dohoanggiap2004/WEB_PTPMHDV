package com.commercial.app.domain.mapper;

import com.commercial.app.domain.dtos.request.OrderRequestDto;
import com.commercial.app.domain.dtos.response.OrderResponseDto;
import com.commercial.app.domain.entites.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "voucher.voucherId", target = "voucherId")
    OrderRequestDto orderToOrderRequestDto(Order order);

    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "voucherId", target = "voucher.voucherId")
    Order orderRequestDtoToOrder(OrderRequestDto orderRequestDto);

    OrderResponseDto orderToOrderResponseDto(Order order);

    void updateOrderFromDto(OrderRequestDto orderRequestDto, @MappingTarget Order order);
}
