package com.commercial.app.repositories;

import com.commercial.app.domain.entites.InstallmentPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface InstallmentPlanRepository extends JpaRepository<InstallmentPlan, String> {
}
