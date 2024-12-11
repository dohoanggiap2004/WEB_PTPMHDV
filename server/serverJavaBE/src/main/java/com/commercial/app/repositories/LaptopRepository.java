package com.commercial.app.repositories;

import com.commercial.app.domain.entites.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface LaptopRepository extends JpaRepository<Laptop, String>, JpaSpecificationExecutor<Laptop> {
    Laptop findFirstByModelContaining(String model);
    List<Laptop> findTop10ByManufacturerAndDescriptionAndResolution(String manufacturer, String description, String resolution);
}
