package com.commercial.app.services;

import com.commercial.app.domain.dtos.response.BrandResponseDto;

import java.util.List;

public interface BrandService {
    List<BrandResponseDto> getAllBrands();

    List<Object[]> getLaptopCountByManufacturer();
}
