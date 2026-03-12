package com.hospital.backend.controller;

import com.hospital.backend.dto.LoginRequest;
import com.hospital.backend.dto.SignupRequest;
import com.hospital.backend.model.User;
import com.hospital.backend.repository.UserRepository;
import com.hospital.backend.service.AuthService;
import com.hospital.backend.util.JwtUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request){

        return authService.signup(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request){

        return authService.login(request);
    }

    @GetMapping("/me")
    public User getLoggedInUser(
            @RequestHeader("Authorization") String header){

        String token = header.substring(7);

        String email = jwtUtil.extractEmail(token);

        return userRepository.findByEmail(email)
                .orElseThrow();
    }
}