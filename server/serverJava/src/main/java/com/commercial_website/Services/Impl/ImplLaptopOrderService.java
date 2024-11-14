package com.commercial_website.Services.Impl;

import com.commercial_website.DTOs.LaptopOrderDTO;
import com.commercial_website.Entities.Laptop;
import com.commercial_website.Entities.LaptopOrder;
import com.commercial_website.Exception.ResourceNotFoundException;
import com.commercial_website.Mappers.LapOrderMapper;
import com.commercial_website.Repositories.LapOrderRepository;
import com.commercial_website.Repositories.LaptopRepository;
import com.commercial_website.Repositories.OrderRepository;
import com.commercial_website.Services.LaptopOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ImplLaptopOrderService implements LaptopOrderService {
    @Autowired
    LapOrderRepository lapOrderRepository;

    @Autowired
    LaptopRepository laptopRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    LapOrderMapper mapper;

    @Override
    public LaptopOrderDTO createOrder(LaptopOrderDTO dto) {
        LaptopOrder laptopOrder = mapper.mapToEntity(dto);
        int quantity = laptopOrder.getQuantity();
        Laptop laptop = laptopRepository
                .findById(dto.getLaptopId()).orElseThrow(()-> new ResourceNotFoundException("Laptop not found"));
        laptopOrder.setTotalPrice(quantity * laptop.getPrice());
        laptopOrder.setLaptop(laptop);
        laptopOrder.setOrder(orderRepository.findByOrderId(dto.getOrderId()));
        LaptopOrder saved = lapOrderRepository.save(laptopOrder);
        return mapper.mapToDTO(saved);
    }

    @Override
    public List<LaptopOrderDTO> getAll() {
        return lapOrderRepository.findAll().stream()
                .map(mapper::mapToDTO)
                .collect(Collectors.toList());
    }
}
