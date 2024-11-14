package com.commercial_website.Repositories;

import com.commercial_website.Entities.InstallmentPlans;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface InstallmentPlansRepository extends JpaRepository<InstallmentPlans, Long> {
    List<InstallmentPlans> findByCompanyContaining(String company);
}
