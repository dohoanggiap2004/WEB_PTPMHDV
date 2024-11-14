package com.commercial_website.Repositories;

import com.commercial_website.Entities.Role;
import com.commercial_website.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByFullname(String fullname);

    Boolean existsByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    Boolean existsByUsername(String username);

    @Query(value = "SELECT DISTINCT u.* FROM users u " +
            "JOIN user_role ur ON u.userId = ur.userId " +
            "JOIN role r ON ur.roleId = r.roleId " +
            "WHERE r.roleName = :roleName", nativeQuery = true)
    List<User> findUsersByRoleNameNative(@Param("roleName") String roleName);


    List<User> findByFullnameContaining(String fullname);

    List<User> findByWardContaining(String ward);

    List<User> findByDistrictContaining(String district);

    List<User> findByProvinceContaining(String province);

    List<User> findByAddressDetailContaining(String addressDetail);

}
