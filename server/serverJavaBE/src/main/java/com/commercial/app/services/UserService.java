package com.commercial.app.services;
import com.commercial.app.domain.dtos.request.UserRequestDto;
import com.commercial.app.domain.dtos.response.UserResponseDto;

import java.util.List;
import java.util.Optional;

public interface UserService {

    // Tạo mới một người dùng
    UserRequestDto createUser(UserRequestDto userDTO);

    // Lấy tất cả người dùng
    List<UserResponseDto> getAllUsers();

    // Lấy thông tin người dùng theo ID
    Optional<UserResponseDto> getUserById(String userId);  // Trả về Optional để xử lý trường hợp không tìm thấy người dùng

    // Cập nhật thông tin người dùng
    UserRequestDto updateUser(String userId, UserRequestDto userDTO);

    // Xóa người dùng theo ID
    void deleteUser(String userId);

    // Tìm kiếm người dùng theo các yếu tố như địa chỉ, quận, phường, tên đầy đủ
    List<UserResponseDto> getAllUsersByElements(String addressDetail, String ward, String district, String province, String fullname);
}

