package com.commercial.app.repositories;

import com.commercial.app.domain.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, String> {
    List<User> findByFullnameContaining(String fullname);

    List<User> findByWardContaining(String ward);

    List<User> findByDistrictContaining(String district);

    List<User> findByProvinceContaining(String province);

    List<User> findByAddressDetailContaining(String addressDetail);
}
