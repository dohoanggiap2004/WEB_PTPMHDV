package com.commercial_website.Services.Auth.Impl;

import com.commercial_website.DTOs.AuthDTO.JwtAuthResponse;
import com.commercial_website.DTOs.AuthDTO.LoginDTO;
import com.commercial_website.DTOs.AuthDTO.RegisterDTO;
import com.commercial_website.Entities.Role;
import com.commercial_website.Entities.User;
import com.commercial_website.Exception.APIException;
import com.commercial_website.Repositories.RoleRepository;
import com.commercial_website.Repositories.UserRepository;
import com.commercial_website.Security.JwtTokenProvider;
import com.commercial_website.Services.Auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ImplAuthService implements AuthService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Override
    public String register(RegisterDTO dto) {
        if(userRepository.existsByEmail(dto.getEmail())){
            throw new APIException(HttpStatus.BAD_REQUEST, "Email is already exists");
        }
        if(userRepository.existsByUsername(dto.getUsername())){
            throw new APIException(HttpStatus.BAD_REQUEST, "Username is already exists");
        }

        User user = new User();
        user.setFullname(dto.getFullname());
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));

        List<Role> roles = new LinkedList<>();
        Role userRole = roleRepository.findByRoleName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);

        userRepository.save(user);

        return "Successfully";
    }

    @Override
    public JwtAuthResponse login(LoginDTO dto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                dto.getUsernameOrEmail(),
                dto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.generateToken(authentication);

        Optional<User> user = userRepository.findByUsernameOrEmail(dto.getUsernameOrEmail(), dto.getUsernameOrEmail());
        String role = null;
        if(user.isPresent()){
            User loggedInUser = user.get();
            Optional<Role> optionalRole = loggedInUser.getRoles().stream().findFirst();

            if(optionalRole.isPresent()){
                Role userRole = optionalRole.get();
                role = userRole.getRoleName();
            }
        }

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setRole(role);
        jwtAuthResponse.setAccessToken(token);

        return jwtAuthResponse;
    }
}
