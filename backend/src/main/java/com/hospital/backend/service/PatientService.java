package com.hospital.backend.service;

import com.hospital.backend.model.Role;
import com.hospital.backend.model.User;
import com.hospital.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientService {

    private final UserRepository userRepository;

    public List<User> getDoctors(String specialization){

        if(specialization == null || specialization.isEmpty()){

            return userRepository.findByRole(Role.DOCTOR);
        }

        return userRepository.findByRoleAndSpecialization(
                Role.DOCTOR,
                specialization
        );
    }

}