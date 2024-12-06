package com.commercial.app.services.impl;

import com.commercial.app.domain.dtos.request.LaptopCreateRequestDto;
import com.commercial.app.domain.dtos.request.LaptopUpdateRequestDto;
import com.commercial.app.domain.dtos.response.LaptopResponseDto;
import com.commercial.app.domain.entites.Laptop;
import com.commercial.app.domain.mapper.LaptopMapper;
import com.commercial.app.repositories.LaptopRepository;
import com.commercial.app.repositories.OrderLaptopRepository;
import com.commercial.app.services.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ImplLaptopService implements LaptopService {
    @Autowired
    LaptopRepository laptopRepository;

    @Autowired
    LaptopMapper laptopMapper;
    @Autowired
    private OrderLaptopRepository orderLaptopRepository;

    @Override
    public LaptopCreateRequestDto createLaptop(LaptopCreateRequestDto laptopCreateRequestDto) {
        Laptop laptop = laptopMapper.mapToDomain(laptopCreateRequestDto);
        Laptop persistedLaptop = laptopRepository.save(laptop);
        return laptopMapper.mapToCreateRequestDto(persistedLaptop);
    }

    @Override
    public List<LaptopResponseDto> getAllLaptops() {
        return laptopRepository.findAll().stream()
                .map(laptopMapper::mapToResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public Page<LaptopResponseDto> getAllLaptops(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("manufacturer").ascending());
        return laptopRepository.findAll(pageable)
                .map(laptopMapper::mapToResponseDto);
    }

    @Override
    public LaptopUpdateRequestDto updateLaptop(String laptopId ,LaptopUpdateRequestDto laptopUpdateRequestDto) {
        Laptop laptop = laptopRepository.findById(laptopId)
                .orElseThrow(() -> new RuntimeException("Laptop not found"));
        Laptop updated = laptopRepository.save(convertToDomain(laptop, laptopUpdateRequestDto));
        return laptopMapper.mapToUpdateRequestDto(updated);
    }

    @Override
    public void deleteLaptop(String laptopId) {
        laptopRepository.deleteById(laptopId);
    }

    @Override
    public void deleteAllLaptops() {
        laptopRepository.deleteAll();
    }

    @Override
    public Page<LaptopResponseDto> searchLaptops(String keyword, int page, int size) {
        Specification<Laptop> spec = approximateSearch(keyword);
        Pageable pageable = PageRequest.of(page, size, Sort.by("manufacturer").ascending());
        Page<Laptop> laptops = laptopRepository.findAll(spec, pageable);
        return laptops.map(laptopMapper::mapToResponseDto);
    }

    public Specification<Laptop> approximateSearch(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword.toLowerCase() + "%";

            return criteriaBuilder.or(
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("model")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("battery")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("description")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("cpu")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("ram")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("os")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("vga")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("webcam")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("storage")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("frameRate")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("resolution")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("screenSize")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("manufacturer")), searchPattern)
            );
        };
    }

    @Override
    public List<Map<String, Object>> getTopSellingBrands() {
        List<Object[]> results = orderLaptopRepository.findTopSellingBrands();
        List<Map<String, Object>> response = new ArrayList<>();

        // Constants for processing
        int maxBrands = 4; // Limit for individual brands
        long otherTotalSold = 0; // Counter for "Other" group
        int counter = 0;

        // Loop through query results
        for (Object[] result : results) {
            String brandName = (String) result[0];
            Long totalSold = ((Number) result[1]).longValue();

            if (counter < maxBrands) {
                // Add top brands directly to the response
                Map<String, Object> brandData = new HashMap<>();
                brandData.put("brand_name", brandName);
                brandData.put("total_sold", totalSold);
                response.add(brandData);
            } else {
                // Sum up total sales for "Other"
                otherTotalSold += totalSold;
            }
            counter++;
        }

        // If there are remaining brands, add the "Other" category
        if (otherTotalSold > 0) {
            Map<String, Object> otherData = new HashMap<>();
            otherData.put("brand_name", "Other");
            otherData.put("total_sold", otherTotalSold);
            response.add(otherData);
        }

        return response;
    }


    private Laptop convertToDomain(Laptop laptop ,LaptopUpdateRequestDto laptopUpdateRequestDto) {
        laptop.setModel(laptopUpdateRequestDto.getModel());
        laptop.setPrice(laptopUpdateRequestDto.getPrice());
        laptop.setManufacturer(laptopUpdateRequestDto.getManufacturer());
        laptop.setStockAvailable(laptopUpdateRequestDto.getStockAvailable());
        laptop.setDescription(laptopUpdateRequestDto.getDescription());
        laptop.setImage(laptopUpdateRequestDto.getImage());
        laptop.setCpu(laptopUpdateRequestDto.getCpu());
        laptop.setRam(laptopUpdateRequestDto.getRam());
        laptop.setOs(laptopUpdateRequestDto.getOs());
        laptop.setWeight(laptopUpdateRequestDto.getWeight());
        laptop.setBattery(laptopUpdateRequestDto.getBattery());
        laptop.setStorage(laptopUpdateRequestDto.getStorage());
        laptop.setScreenSize(laptopUpdateRequestDto.getScreenSize());
        return laptop;
    }
}
