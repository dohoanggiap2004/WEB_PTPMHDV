package com.commercial.app.repositories;

import com.commercial.app.domain.entites.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BrandRepository extends JpaRepository<Brand, Long> {
    @Modifying
    @Query(value = "INSERT INTO brands (brandName) " +
            "SELECT DISTINCT manufacturer " +
            "FROM laptops " +
            "WHERE manufacturer IS NOT NULL " +
            "AND manufacturer NOT IN (SELECT brandName FROM brands)", nativeQuery = true)
    @Transactional
    void createBrand();

    @Query("SELECT l.manufacturer, COUNT(l) FROM Laptop l GROUP BY l.manufacturer")
    List<Object[]> countLaptopsByManufacturer();
}
