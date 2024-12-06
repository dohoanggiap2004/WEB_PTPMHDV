package com.commercial.app.repositories;

import com.commercial.app.domain.entites.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
