package com.commercial_website.Services.Impl;

import com.commercial_website.DTOs.OrderDTO;
import com.commercial_website.Entities.LaptopOrder;
import com.commercial_website.Entities.Order;
import com.commercial_website.Entities.User;
import com.commercial_website.Mappers.OrderMapper;
import com.commercial_website.Repositories.LapOrderRepository;
import com.commercial_website.Repositories.OrderRepository;
import com.commercial_website.Repositories.UserRepository;
import com.commercial_website.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ImplOrderService implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LapOrderRepository lapOrderRepository;

    @Autowired
    OrderMapper orderMapper;

    @Override
    public OrderDTO createOrder(OrderDTO orderDTO) {
        Order order = orderMapper.mapToEntity(orderDTO);
        User user = userRepository.findByFullname(orderDTO.getUserName());
        order.setUser(user);
//        LaptopOrder  laptopOrder = lapOrderRepository.findByOrder_OrderId(order.getOrderId());
//        order.setTotalPayment(laptopOrder.getTotalPrice());
        Order savedOrder = orderRepository.save(order);
        return orderMapper.mapToDTO(savedOrder);
    }

    @Override
    public List<OrderDTO> getAllOrders() {
        return orderRepository.findAll().stream()
                .map(orderMapper::mapToDTO)
                .collect(Collectors.toList());
    }
}
