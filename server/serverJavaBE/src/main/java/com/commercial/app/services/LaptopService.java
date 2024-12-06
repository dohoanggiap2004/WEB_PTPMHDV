package com.commercial.app.services;

import com.commercial.app.domain.dtos.request.LaptopCreateRequestDto;
import com.commercial.app.domain.dtos.request.LaptopUpdateRequestDto;
import com.commercial.app.domain.dtos.response.LaptopResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface LaptopService {
    LaptopCreateRequestDto createLaptop(LaptopCreateRequestDto laptopCreateRequestDto);
    List<LaptopResponseDto> getAllLaptops();
    Page<LaptopResponseDto> getAllLaptops(int page, int size);
    LaptopUpdateRequestDto updateLaptop(String laptopId, LaptopUpdateRequestDto laptopUpdateRequestDto, String brandName);
    void deleteLaptop(String laptopId);
    void deleteAllLaptops();

    List<Map<String, Object>> getTopSellingBrands();
}
