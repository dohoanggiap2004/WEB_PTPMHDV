package com.commercial.app.services;

import com.commercial.app.domain.dtos.request.OrderRequestDto;
import com.commercial.app.domain.dtos.response.OrderResponseDto;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    // Tạo đơn hàng mới
    OrderResponseDto createOrder(OrderRequestDto orderRequestDto);

    // Lấy danh sách tất cả đơn hàng
    List<OrderResponseDto> getAllOrders();

    // Lấy thông tin đơn hàng theo ID
    Optional<OrderResponseDto> getOrderById(Long orderId);

    // Cập nhật thông tin đơn hàng
    OrderResponseDto updateOrder(Long orderId, OrderRequestDto orderRequestDto);

    // Xóa đơn hàng theo ID
    void deleteOrder(Long orderId);
}
