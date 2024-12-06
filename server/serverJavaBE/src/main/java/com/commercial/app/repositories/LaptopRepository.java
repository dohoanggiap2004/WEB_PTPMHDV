package com.commercial.app.repositories;

import com.commercial.app.domain.entites.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaptopRepository extends JpaRepository<Laptop, String> {
    Laptop findFirstByModelContaining(String model);
}
