package com.commercial_website.Mappers;

import com.commercial_website.DTOs.UserDTO;
import com.commercial_website.Entities.Order;
import com.commercial_website.Entities.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-13T14:43:52+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 18.0.2.1 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User mapToEntity(UserDTO dto) {
        if ( dto == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( dto.getUserId() );
        user.setUsername( dto.getUsername() );
        user.setPassword( dto.getPassword() );
        user.setEmail( dto.getEmail() );
        user.setPhone( dto.getPhone() );
        user.setCreatedAt( dto.getCreatedAt() );
        user.setUpdatedAt( dto.getUpdatedAt() );
        user.setFullname( dto.getFullname() );
        user.setDateOfBirth( dto.getDateOfBirth() );
        user.setAddressDetail( dto.getAddressDetail() );
        user.setWard( dto.getWard() );
        user.setDistrict( dto.getDistrict() );
        user.setProvince( dto.getProvince() );

        return user;
    }

    @Override
    public UserDTO mapToDTO(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTO userDTO = new UserDTO();

        userDTO.setOrderId( userOrderOrderId( user ) );
        userDTO.setUserId( user.getUserId() );
        userDTO.setUsername( user.getUsername() );
        userDTO.setPassword( user.getPassword() );
        userDTO.setEmail( user.getEmail() );
        userDTO.setPhone( user.getPhone() );
        userDTO.setCreatedAt( user.getCreatedAt() );
        userDTO.setUpdatedAt( user.getUpdatedAt() );
        userDTO.setFullname( user.getFullname() );
        userDTO.setDateOfBirth( user.getDateOfBirth() );
        userDTO.setAddressDetail( user.getAddressDetail() );
        userDTO.setWard( user.getWard() );
        userDTO.setDistrict( user.getDistrict() );
        userDTO.setProvince( user.getProvince() );

        return userDTO;
    }

    private Long userOrderOrderId(User user) {
        if ( user == null ) {
            return null;
        }
        Order order = user.getOrder();
        if ( order == null ) {
            return null;
        }
        Long orderId = order.getOrderId();
        if ( orderId == null ) {
            return null;
        }
        return orderId;
    }
}
