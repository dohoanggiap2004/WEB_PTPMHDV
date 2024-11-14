package com.commercial_website.Services.Auth;

import com.commercial_website.DTOs.AuthDTO.JwtAuthResponse;
import com.commercial_website.DTOs.AuthDTO.LoginDTO;
import com.commercial_website.DTOs.AuthDTO.RegisterDTO;

public interface AuthService {
    String register(RegisterDTO dto);
    JwtAuthResponse login(LoginDTO dto);
}
