package com.commercial_website.Services;

import com.commercial_website.DTOs.UserDTO;

import java.util.List;
import java.util.Set;

public interface UserService {
    UserDTO createUser(UserDTO userDTO);
    List<UserDTO> getAllUsers();
    UserDTO getUserById(Long id);
    UserDTO updateUser(Long id, UserDTO userDTO);
    void deleteUser(Long id);
    List<UserDTO> getUsersByRole(String role);
    List<UserDTO> getAllUsersByElements(String addressDetail, String ward, String district, String province, String fullname); ;
}
