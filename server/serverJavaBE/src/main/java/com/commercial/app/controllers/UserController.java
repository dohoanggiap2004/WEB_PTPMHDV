package com.commercial.app.controllers;

import com.commercial.app.domain.dtos.request.UserRequestDto;
import com.commercial.app.domain.dtos.response.UserResponseDto;
import com.commercial.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Tạo mới người dùng
    @PostMapping
    public ResponseEntity<UserRequestDto> createUser(@RequestBody UserRequestDto userRequestDto) {
        UserRequestDto createdUser = userService.createUser(userRequestDto);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    // Lấy tất cả người dùng
    @GetMapping
    public ResponseEntity<List<UserResponseDto>> getAllUsers() {
        List<UserResponseDto> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Lấy người dùng theo ID
    @GetMapping("/{userId}")
    public ResponseEntity<UserResponseDto> getUserById(@PathVariable String userId) {
        Optional<UserResponseDto> user = userService.getUserById(userId);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Cập nhật thông tin người dùng
    @PutMapping("/{userId}")
    public ResponseEntity<UserRequestDto> updateUser(@PathVariable String userId, @RequestBody UserRequestDto userRequestDto) {
        try {
            UserRequestDto updatedUser = userService.updateUser(userId, userRequestDto);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Xóa người dùng theo ID
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable String userId) {
        try {
            userService.deleteUser(userId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Tìm kiếm người dùng theo các yếu tố
    @GetMapping("/search")
    public ResponseEntity<List<UserResponseDto>> searchUsers(
            @RequestParam(required = false) String addressDetail,
            @RequestParam(required = false) String ward,
            @RequestParam(required = false) String district,
            @RequestParam(required = false) String province,
            @RequestParam(required = false) String fullname) {
        List<UserResponseDto> users = userService.getAllUsersByElements(addressDetail, ward, district, province, fullname);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
