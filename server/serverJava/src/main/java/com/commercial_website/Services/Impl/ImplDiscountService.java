package com.commercial_website.Services.Impl;

import com.commercial_website.DTOs.DiscountDTO;
import com.commercial_website.Entities.Discount;
import com.commercial_website.Exception.ResourceNotFoundException;
import com.commercial_website.Mappers.DiscountMapper;
import com.commercial_website.Repositories.DiscountRepository;
import com.commercial_website.Services.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ImplDiscountService implements DiscountService {

    @Autowired
    DiscountRepository repo;

    @Autowired
    DiscountMapper discountMapper;

    @Override
    public DiscountDTO createDiscount(DiscountDTO disDTO) {
        Discount disc =  discountMapper.mapToEntity(disDTO);
        Discount saved = repo.save(disc);
        return discountMapper.mapToDTO(saved);
    }

    @Override
    public List<DiscountDTO> getAll() {
        return repo.findAll().stream()
                .map(discountMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public DiscountDTO findDiscountById(Long id) {
        Discount discount = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Discount not found"));
        return discountMapper.mapToDTO(discount);
    }

    @Override
    public void deleteDiscount(Long id) {
        repo.deleteById(id);
    }

}