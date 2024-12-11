package com.commercial.app.services;

import com.commercial.app.domain.dtos.request.LaptopCreateRequestDto;
import com.commercial.app.domain.dtos.request.LaptopUpdateRequestDto;
import com.commercial.app.domain.dtos.response.LaptopResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;
import java.util.Map;

public interface LaptopService {
    LaptopCreateRequestDto createLaptop(LaptopCreateRequestDto laptopCreateRequestDto);
    List<LaptopResponseDto> getAllLaptops();
    Page<LaptopResponseDto> getAllLaptops(int page, int size);
    LaptopUpdateRequestDto updateLaptop(String laptopId, LaptopUpdateRequestDto laptopUpdateRequestDto);
    void deleteLaptop(String laptopId);
    void deleteAllLaptops();
    LaptopResponseDto getLaptop(String laptopId);
    Page<LaptopResponseDto> searchLaptops(String keyword, int page, int size);

    List<Map<String, Object>> getTopSellingBrands();
    List<LaptopResponseDto> getRecommendedLaptops(String laptopId);
}
