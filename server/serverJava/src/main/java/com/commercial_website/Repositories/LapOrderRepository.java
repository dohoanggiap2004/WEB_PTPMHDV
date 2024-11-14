package com.commercial_website.Repositories;

import com.commercial_website.Entities.LaptopOrder;
import com.commercial_website.Entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface LapOrderRepository extends JpaRepository<LaptopOrder, Long> {
    @Query("SELECT b.brandName, SUM(lo.quantity) AS totalSold " +
            "FROM LaptopOrder lo " +
            "JOIN lo.laptop l " +
            "JOIN l.brand b " +
            "GROUP BY b.brandName " +
            "ORDER BY totalSold DESC")
    List<Object[]> findTopSellingBrands();

    LaptopOrder findByOrder_OrderId(Long orderId);
}
