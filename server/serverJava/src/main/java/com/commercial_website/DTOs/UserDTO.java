package com.commercial_website.DTOs;
import com.commercial_website.Entities.Order;
import com.commercial_website.Entities.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long userId;

    private String username;

    private String password;

    private String email;

    private String phone;

    private Timestamp createdAt;

    private Timestamp updatedAt;

    private String fullname;

    private String dateOfBirth;

    private String addressDetail;

    private String ward;

    private String district;

    private String province;

    private Long orderId;

}
