package com.commercial.app.domain.mapper;

import com.commercial.app.domain.dtos.request.UserRequestDto;
import com.commercial.app.domain.dtos.response.UserResponseDto;
import com.commercial.app.domain.entites.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User mapToDomain(UserRequestDto userRequestDto);
    UserRequestDto mapToDto(User user);
    UserResponseDto mapToResponseDto(User user);
}
