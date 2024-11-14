package com.commercial_website.Services.Impl;

import com.commercial_website.DTOs.BrandDTO;
import com.commercial_website.Entities.Brand;
import com.commercial_website.Exception.ResourceNotFoundException;
import com.commercial_website.Mappers.BrandMapper;
import com.commercial_website.Repositories.BrandRepository;
import com.commercial_website.Services.BrandService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ImplBrandService implements BrandService {

    @Autowired
    BrandRepository repo;
    @Autowired
    BrandMapper brandMapper;

    @Override
    public BrandDTO createBrand(BrandDTO brand) {
        Brand brd = brandMapper.mapToEntity(brand);
        Brand saved = repo.save(brd);
        return brandMapper.mapToDTO(saved);
    }

    @Override
    public List<BrandDTO> getAll() {
        return repo.findAll().stream()
                .map(brandMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BrandDTO getBrand_byID(Long id) {
        Brand getID = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found"));
        return brandMapper.mapToDTO(getID);
    }

    @Override
    public void deleteBrand_byID(Long id) {
        repo.deleteById(id);
    }

}

