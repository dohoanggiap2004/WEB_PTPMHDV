package com.commercial_website.Controllers.Auth;

import com.commercial_website.DTOs.AuthDTO.JwtAuthResponse;
import com.commercial_website.DTOs.AuthDTO.LoginDTO;
import com.commercial_website.DTOs.AuthDTO.RegisterDTO;
import com.commercial_website.Services.Auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO dto){
        String response = authService.register(dto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDTO dto){
        JwtAuthResponse jwtAuthResponse = authService.login(dto);
        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.CREATED);
    }
}
