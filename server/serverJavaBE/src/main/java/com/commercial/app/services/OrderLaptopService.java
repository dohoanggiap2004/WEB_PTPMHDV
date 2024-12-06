package com.commercial.app.services;

import com.commercial.app.domain.dtos.request.OrderLaptopRequestDto;

public interface OrderLaptopService {
    OrderLaptopRequestDto createOrderLaptop(OrderLaptopRequestDto orderLaptopRequestDto);
    void createSampleLaptopOrders();
}
