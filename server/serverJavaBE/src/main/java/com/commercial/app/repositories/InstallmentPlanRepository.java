package com.commercial.app.repositories;

import com.commercial.app.domain.dtos.response.InstallmentResponseDto;
import com.commercial.app.domain.entites.InstallmentPlan;
import com.commercial.app.domain.entites.Laptop;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface InstallmentPlanRepository extends JpaRepository<InstallmentPlan, String>, JpaSpecificationExecutor<InstallmentPlan> {
}
