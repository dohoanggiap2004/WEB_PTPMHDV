package com.commercial.app.domain.dtos.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRequestDto {
    private String username;
    private String password;
    private String address;
    private String email;
    private String phone;
    private Date createdAt;
    private Date updatedAt;
    private String fullname;
    private String dateOfBirth;
    private String addressDetail;
    private String ward;
    private String district;
    private String province;
    private String role;
}
