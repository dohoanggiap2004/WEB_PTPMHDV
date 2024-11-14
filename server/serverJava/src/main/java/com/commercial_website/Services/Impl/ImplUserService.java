package com.commercial_website.Services.Impl;

import com.commercial_website.DTOs.UserDTO;
import com.commercial_website.Entities.Order;
import com.commercial_website.Entities.User;
import com.commercial_website.Exception.ResourceNotFoundException;
import com.commercial_website.Mappers.UserMapper;
import com.commercial_website.Repositories.OrderRepository;
import com.commercial_website.Repositories.UserRepository;
import com.commercial_website.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ImplUserService implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    UserMapper userMapper;

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User user = userMapper.mapToEntity(userDTO);
        User savedUser = userRepository.save(user);
        return userMapper.mapToDTO(savedUser);
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("User not found"));
        return userMapper.mapToDTO(user);
    }

    @Override
    public UserDTO updateUser(Long id, UserDTO userDTO) {
        // Fetch the user entity or throw an exception if not found
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        // Update fields from UserDTO to User entity
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setEmail(userDTO.getEmail());
        user.setPhone(userDTO.getPhone());
        user.setCreatedAt(userDTO.getCreatedAt());
        user.setFullname(userDTO.getFullname());
        user.setDateOfBirth(userDTO.getDateOfBirth());
        user.setWard(userDTO.getWard());
        user.setAddressDetail(userDTO.getAddressDetail());
        user.setDistrict(userDTO.getDistrict());
        user.setProvince(userDTO.getProvince());

        // Map the order if it's present in the DTO
        if (userDTO.getOrderId() != null) {
            user.setOrder(orderRepository.findByOrderId(userDTO.getOrderId()));
        }

        // Save the updated entity
        User savedUser = userRepository.save(user);

        // Convert back to DTO and return
        return userMapper.mapToDTO(savedUser);
    }


    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<UserDTO> getUsersByRole(String role) {
        return userRepository.findUsersByRoleNameNative(role).stream()
                .map(userMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<UserDTO> getAllUsersByElements(String addressDetail, String ward, String district, String province, String fullname) {
        List<UserDTO> userDTOSet = new LinkedList<>();
        if (addressDetail != null && !addressDetail.isEmpty()) {
            userDTOSet = userRepository.findByAddressDetailContaining(addressDetail)
                    .stream().map(userMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (ward != null && !ward.isEmpty()) {
            userDTOSet = userRepository.findByWardContaining(ward)
                    .stream().map(userMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (district != null && !district.isEmpty()) {
            userDTOSet = userRepository.findByDistrictContaining(district)
                    .stream().map(userMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (province != null && !province.isEmpty()) {
            userDTOSet = userRepository.findByProvinceContaining(province)
                    .stream().map(userMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        if (fullname != null && !fullname.isEmpty()) {
            userDTOSet = userRepository.findByFullnameContaining(fullname)
                    .stream().map(userMapper::mapToDTO)
                    .collect(Collectors.toList());
        }
        return userDTOSet;
    }

}