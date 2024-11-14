package com.commercial_website.Services;

import com.commercial_website.DTOs.DiscountDTO;

import java.util.List;
import java.util.Set;

public interface DiscountService {
    DiscountDTO createDiscount(DiscountDTO disDTO);
    List<DiscountDTO> getAll();
    DiscountDTO findDiscountById(Long id);
    void deleteDiscount(Long id);
}
