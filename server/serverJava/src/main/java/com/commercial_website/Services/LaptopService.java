package com.commercial_website.Services;

import com.commercial_website.DTOs.LaptopDTO;
import com.commercial_website.DTOs.TopSellingBrandDTO;
import com.commercial_website.Entities.Laptop;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface LaptopService {
    LaptopDTO createLaptop(LaptopDTO lapDTO);
    List<LaptopDTO> getAll();
    LaptopDTO getLaptop_byID(Long id);
    List<LaptopDTO> searchLaptops(String model, String ram, String gpu, String processor, String storage, Integer price, Double sz, String brandName);
    void deleteLaptop(Long id);
    LaptopDTO updateLaptop(Long id ,LaptopDTO lapDTO);

    List<TopSellingBrandDTO> getTopSellingBrands();

    Page<LaptopDTO> getLaptopsByBrand(Long brandId, int page, int size);
}
