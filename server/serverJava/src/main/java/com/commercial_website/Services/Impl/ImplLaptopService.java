package com.commercial_website.Services.Impl;

import com.commercial_website.DTOs.LaptopDTO;
import com.commercial_website.DTOs.TopSellingBrandDTO;
import com.commercial_website.Entities.Laptop;
import com.commercial_website.Exception.ResourceNotFoundException;
import com.commercial_website.Mappers.LaptopMapper;
import com.commercial_website.Repositories.BrandRepository;
import com.commercial_website.Repositories.DiscountRepository;
import com.commercial_website.Repositories.LapOrderRepository;
import com.commercial_website.Repositories.LaptopRepository;
import com.commercial_website.Services.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ImplLaptopService implements LaptopService {

    @Autowired
    BrandRepository brdRepo;

    @Autowired
    DiscountRepository disRepo;

    @Autowired
    LaptopRepository repo;

    @Autowired
    LapOrderRepository  lapOrderRepo;

    @Autowired
    LaptopMapper laptopMapper;

    @Override
    public LaptopDTO createLaptop(LaptopDTO lapDTO) {
        Laptop laptop = laptopMapper.mapToEntity(lapDTO);
        Laptop saved = repo.save(laptop);
        return laptopMapper.mapToDTO(saved);
    }

    @Override
    public List<LaptopDTO> getAll() {
        return repo.findAll().stream()
                .map(laptopMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public LaptopDTO getLaptop_byID(Long id) {
        Laptop laptop = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laptop not found"));
        return laptopMapper.mapToDTO(laptop);
    }

    @Override
    public List<LaptopDTO> searchLaptops(String model, String ram, String gpu, String processor, String storage, Integer price, Double sz, String brandName) {
        List<LaptopDTO> laptops = new LinkedList<>();
        if (model != null && !model.isEmpty()) {
            laptops = repo.findByModelContaining(model).stream()
                    .map(laptopMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (gpu != null && !gpu.isEmpty()) {
            laptops = repo.findByGpuContaining(gpu).stream()
                    .map(laptopMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (processor != null && !processor.isEmpty()) {
            laptops = repo.findByProcessorContaining(processor).stream()
                    .map(laptopMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (storage != null && !storage.isEmpty()) {
            laptops = repo.findByStorageContaining(storage).stream()
                    .map(laptopMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (ram != null && !ram.isEmpty()) {
            laptops = repo.findByRamContaining(ram).stream()
                    .map(laptopMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (price != null) {
            laptops = repo.findByPrice(price).stream()
                    .map(laptopMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (sz != null) {
            laptops = repo.findByScreenSizeGreaterThan(sz).stream()
                    .map(laptopMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (brandName != null && !brandName.isEmpty()) {
            laptops = repo.findByBrand_BrandNameContaining(brandName).stream()
                    .map(laptopMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        return laptops;
    }

    @Override
    public void deleteLaptop(Long id) {
        repo.deleteById(id);
    }

    @Override
    public LaptopDTO updateLaptop(Long id, LaptopDTO lapDTO) {
        // Fetch the laptop entity or throw an exception if it doesn't exist
        Laptop laptop = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laptop not found"));

        // Update fields from LaptopDTO to Laptop entity
        laptop.setModel(lapDTO.getModel());
        laptop.setPrice(lapDTO.getPrice());
        laptop.setStockQuantity(lapDTO.getStockQuantity());
        laptop.setDescription(lapDTO.getDescription());
        laptop.setCreatedAt(lapDTO.getCreatedAt());
        laptop.setProcessor(lapDTO.getProcessor());
        laptop.setRam(lapDTO.getRam());
        laptop.setStorage(lapDTO.getStorage());
        laptop.setGpu(lapDTO.getGpu());
        laptop.setScreenSize(lapDTO.getScreenSize());
        laptop.setBattery(lapDTO.getBattery());
        laptop.setWeight(lapDTO.getWeight());
        laptop.setOs(lapDTO.getOs());
        laptop.setImage(lapDTO.getImage());

        // Map referenced entities (Brand, Discount, Order) if they are present in DTO
        if (lapDTO.getBrandName() != null) {
            laptop.setBrand(brdRepo.findByBrandName(lapDTO.getBrandName()));
        }
        if (lapDTO.getDiscount() != null) {
            laptop.setDiscount(lapDTO.getDiscount());
        }

        // Save the updated entity
        Laptop savedLaptop = repo.save(laptop);

        // Convert back to DTO for return
        return laptopMapper.mapToDTO(savedLaptop);
    }

    @Override
    public List<TopSellingBrandDTO> getTopSellingBrands() {
        List<Object[]> results = lapOrderRepo.findTopSellingBrands();
        List<TopSellingBrandDTO> response = new ArrayList<>();

        // Giới hạn số lượng thương hiệu hiển thị
        int maxBrands = 4;
        long otherTotalSold = 0;
        int counter = 0;

        // Lặp qua các kết quả và thêm vào danh sách
        for (Object[] row : results) {
            String brandName = (String) row[0];
            Long totalSold = ((Number) row[1]).longValue();

            if (counter < maxBrands) {
                // Thêm các thương hiệu đầu tiên vào danh sách
                response.add(new TopSellingBrandDTO(brandName, totalSold));
            } else {
                // Cộng dồn số lượng bán của các thương hiệu còn lại vào nhóm "Other"
                otherTotalSold += totalSold;
            }
            counter++;
        }

        // Nếu có thương hiệu còn lại, gộp chúng vào nhóm "Other"
        if (counter > maxBrands) {
            response.add(new TopSellingBrandDTO("Other", otherTotalSold));
        }

        return response;
    }


    @Override
    public Page<LaptopDTO> getLaptopsByBrand(Long brandId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Order.asc("price")));
        Page<Laptop> laptopPage = repo.findByBrand_BrandId(brandId, pageable);
        return laptopPage.map(laptopMapper::mapToDTO);
    }


}
