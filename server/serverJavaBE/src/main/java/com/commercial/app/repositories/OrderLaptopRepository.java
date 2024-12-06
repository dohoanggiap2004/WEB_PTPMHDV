package com.commercial.app.repositories;

import com.commercial.app.domain.entites.OrderLaptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderLaptopRepository extends JpaRepository<OrderLaptop, Long> {
    @Query(value = "SELECT l.manufacturer AS brand_name, SUM(ol.quantity) AS total_sold " +
            "FROM orders_laptops ol " +
            "JOIN laptops l ON ol.laptopId = l.laptopId " +
            "GROUP BY l.manufacturer " +
            "ORDER BY total_sold DESC", nativeQuery = true)
    List<Object[]> findTopSellingBrands();




}
