package com.commercial.app.services.impl;

import com.commercial.app.domain.dtos.request.OrderRequestDto;
import com.commercial.app.domain.dtos.response.OrderResponseDto;
import com.commercial.app.domain.entites.Order;
import com.commercial.app.domain.mapper.OrderMapper;
import com.commercial.app.repositories.OrderRepository;
import com.commercial.app.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ImplOrderService implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public OrderResponseDto createOrder(OrderRequestDto orderRequestDto) {
        // Chuyển OrderRequestDto thành Order entity
        Order order = orderMapper.orderRequestDtoToOrder(orderRequestDto);
        // Lưu đơn hàng vào cơ sở dữ liệu
        Order savedOrder = orderRepository.save(order);
        // Chuyển đổi Order entity thành OrderResponseDto
        return orderMapper.orderToOrderResponseDto(savedOrder);
    }

    @Override
    public List<OrderResponseDto> getAllOrders() {
        // Lấy tất cả đơn hàng từ cơ sở dữ liệu
        List<Order> orders = orderRepository.findAll();
        // Chuyển đổi từ List<Order> thành List<OrderResponseDto>
        return orders.stream().map(orderMapper::orderToOrderResponseDto).collect(Collectors.toList());
    }

    @Override
    public Optional<OrderResponseDto> getOrderById(Long orderId) {
        // Tìm đơn hàng theo ID
        Optional<Order> order = orderRepository.findById(orderId);
        // Nếu tìm thấy, chuyển đổi thành OrderResponseDto
        return order.map(orderMapper::orderToOrderResponseDto);
    }

    @Override
    public OrderResponseDto updateOrder(Long orderId, OrderRequestDto orderRequestDto) {
        // Kiểm tra đơn hàng có tồn tại hay không
        Optional<Order> existingOrder = orderRepository.findById(orderId);
        if (existingOrder.isEmpty()) {
            throw new RuntimeException("Order not found with ID: " + orderId);
        }
        // Cập nhật thông tin đơn hàng
        Order orderToUpdate = existingOrder.get();
        orderMapper.updateOrderFromDto(orderRequestDto, orderToUpdate);
        // Lưu đơn hàng đã cập nhật
        Order updatedOrder = orderRepository.save(orderToUpdate);
        return orderMapper.orderToOrderResponseDto(updatedOrder);
    }

    @Override
    public void deleteOrder(Long orderId) {
        // Kiểm tra đơn hàng có tồn tại hay không
        Optional<Order> order = orderRepository.findById(orderId);
        if (order.isEmpty()) {
            throw new RuntimeException("Order not found with ID: " + orderId);
        }
        // Xóa đơn hàng
        orderRepository.delete(order.get());
    }
}
