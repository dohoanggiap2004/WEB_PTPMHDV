package com.commercial_website.Repositories;

import com.commercial_website.Entities.Laptop;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LaptopRepository extends JpaRepository<Laptop, Long> {
    List<Laptop> findByModelContaining(String model);

    List<Laptop> findByGpuContaining(String gpu);

    List<Laptop> findByPrice(int price);

    List<Laptop> findByRamContaining(String ram);

    List<Laptop> findByScreenSizeGreaterThan(double screen_size);

    List<Laptop> findByStorageContaining(String storage);

    List<Laptop> findByProcessorContaining(String processor);

    List<Laptop> findByBrand_BrandNameContaining(String brand);

    Page<Laptop> findByBrand_BrandId(Long brandId, Pageable pageable);
}
