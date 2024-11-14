package com.commercial_website.Mappers;

import com.commercial_website.DTOs.UserDTO;
import com.commercial_website.Entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User mapToEntity(UserDTO dto);

    @Mapping(source = "order.orderId", target = "orderId")
    UserDTO mapToDTO(User user);
}
