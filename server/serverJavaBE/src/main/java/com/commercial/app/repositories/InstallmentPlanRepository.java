package com.commercial.app.repositories;

import com.commercial.app.domain.dtos.response.InstallmentResponseDto;
import com.commercial.app.domain.entites.InstallmentPlan;
import com.commercial.app.domain.entites.Laptop;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InstallmentPlanRepository extends JpaRepository<InstallmentPlan, String>, JpaSpecificationExecutor<InstallmentPlan> {
    @Query("SELECT i FROM InstallmentPlan i WHERE i.flatInterestRate LIKE '0%' ORDER BY i.downPayment ASC")
    List<InstallmentPlan> findInstallmentsWithZeroInterestOrderByDownPayment(Pageable pageable);
    @Query("SELECT i FROM InstallmentPlan i WHERE i.downPayment LIKE :downPayment AND i.term LIKE :term")
    List<InstallmentPlan> findInstallmentPlans(@Param("downPayment") String downPayment, @Param("term") String term);

}
