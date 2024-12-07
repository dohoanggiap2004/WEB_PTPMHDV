package com.commercial.app.services.impl;

import com.commercial.app.domain.dtos.request.UserRequestDto;
import com.commercial.app.domain.dtos.response.UserResponseDto;
import com.commercial.app.domain.entites.User;
import com.commercial.app.domain.mapper.UserMapper;
import com.commercial.app.repositories.UserRepository;
import com.commercial.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ImplUserService implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Override
    public UserRequestDto createUser(UserRequestDto userDTO) {

        User user = userMapper.mapToDomain(userDTO);
        // Lưu người dùng vào cơ sở dữ liệu
        User savedUser = userRepository.save(user);

        // Chuyển đổi từ User entity sang UserRequestDto và trả về
        return userMapper.mapToDto(savedUser);
    }

    @Override
    public List<UserResponseDto> getAllUsers() {
        // Lấy tất cả người dùng từ cơ sở dữ liệu
        List<User> users = userRepository.findAll();

        // Chuyển đổi danh sách User thành UserRequestDto
        return users.stream()
                .map(userMapper::mapToResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<UserResponseDto> getUserById(String userId) {
        // Tìm người dùng theo ID
        Optional<User> user = userRepository.findById(userId);

        // Chuyển đổi thành UserRequestDto nếu có
        return user.map(userMapper::mapToResponseDto);
    }

    @Override
    public UserRequestDto updateUser(String userId, UserRequestDto userDTO) {
        // Tìm người dùng theo ID
        Optional<User> userOpt = userRepository.findById(userId);

        if (userOpt.isPresent()) {
            User user = userOpt.get();

            // Cập nhật các trường thông tin người dùng
            user.setUsername(userDTO.getUsername());
//            user.setPassword(userDTO.getPassword());
            user.setEmail(userDTO.getEmail());
            user.setPhone(userDTO.getPhone());
            user.setFullname(userDTO.getFullname());
            user.setDateOfBirth(userDTO.getDateOfBirth());
            user.setWard(userDTO.getWard());
            user.setDistrict(userDTO.getDistrict());
            user.setProvince(userDTO.getProvince());
            user.setRole(userDTO.getRole());

            // Lưu lại thông tin đã cập nhật
            User updatedUser = userRepository.save(user);

            return userMapper.mapToDto(updatedUser);
        } else {
            // Nếu không tìm thấy người dùng, ném exception hoặc trả về null tùy yêu cầu
            throw new RuntimeException("User not found");
        }
    }

    @Override
    public void deleteUser(String userId) {
        // Tìm người dùng theo ID và xóa
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isPresent()) {
            userRepository.delete(userOpt.get());
        } else {
            throw new RuntimeException("User not found");
        }
    }

    @Override
    public List<UserResponseDto> getAllUsersByElements(String addressDetail, String ward, String district, String province, String fullname) {
        List<UserResponseDto> userDTOSet = new LinkedList<>();
        if (addressDetail != null && !addressDetail.isEmpty()) {
            userDTOSet = userRepository.findByAddressDetailContaining(addressDetail)
                    .stream().map(userMapper::mapToResponseDto)
                    .collect(Collectors.toList());
        }
        if (ward != null && !ward.isEmpty()) {
            userDTOSet = userRepository.findByWardContaining(ward)
                    .stream().map(userMapper::mapToResponseDto)
                    .collect(Collectors.toList());
        }
        if (district != null && !district.isEmpty()) {
            userDTOSet = userRepository.findByDistrictContaining(district)
                    .stream().map(userMapper::mapToResponseDto)
                    .collect(Collectors.toList());
        }
        if (province != null && !province.isEmpty()) {
            userDTOSet = userRepository.findByProvinceContaining(province)
                    .stream().map(userMapper::mapToResponseDto)
                    .collect(Collectors.toList());
        }
        if (fullname != null && !fullname.isEmpty()) {
            userDTOSet = userRepository.findByFullnameContaining(fullname)
                    .stream().map(userMapper::mapToResponseDto)
                    .collect(Collectors.toList());
        }
        return userDTOSet;
    }


}
