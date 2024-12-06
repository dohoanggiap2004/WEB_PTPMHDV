package com.commercial.app.services.impl;

import com.commercial.app.domain.dtos.response.BrandResponseDto;
import com.commercial.app.domain.entites.Brand;
import com.commercial.app.domain.mapper.BrandMapper;
import com.commercial.app.repositories.BrandRepository;
import com.commercial.app.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ImplBrandService implements BrandService {
    @Autowired
    private BrandRepository brandRepository;

    @Autowired
    private BrandMapper brandMapper;

    @Override
    public List<BrandResponseDto> getAllBrands() {
        return brandRepository.findAll().stream()
                .map(brandMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<Object[]> getLaptopCountByManufacturer() {
        // Lấy dữ liệu từ repository
        List<Object[]> list = brandRepository.countLaptopsByManufacturer();
        Map<String, Integer> resultMap = new LinkedHashMap<>();

        // Duyệt qua từng mục trong danh sách và gộp các hãng có số lượng dưới 30
        for (Object[] entry : list) {
            String manufacturer = (String) entry[0]; // Lấy tên hãng từ vị trí 0
            Long count = (Long) entry[1]; // Lấy số lượng laptop từ vị trí 1 (kiểu Long)

            // Nếu số lượng laptop dưới 30, gộp vào "Hãng khác"
            if (count < 30) {
                resultMap.put("Hãng khác", resultMap.getOrDefault("Hãng khác", 0) + count.intValue()); // Sử dụng count.intValue() để chuyển Long thành int
            } else {
                resultMap.put(manufacturer, count.intValue()); // Chuyển Long thành int
            }
        }

        // Chuyển Map thành danh sách Object[] để trả về
        List<Object[]> resultList = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : resultMap.entrySet()) {
            resultList.add(new Object[]{entry.getKey(), entry.getValue()});
        }

        return resultList;
    }

}
