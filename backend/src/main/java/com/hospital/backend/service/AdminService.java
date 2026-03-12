package com.hospital.backend.service;

import com.hospital.backend.dto.DoctorRequest;
import com.hospital.backend.model.*;
import com.hospital.backend.repository.*;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final DepartmentRepository departmentRepository;
    private final AppointmentRepository appointmentRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public Department createDepartment(Department department) {

        return departmentRepository.save(department);

    }

    public List<Department> getDepartments() {

        return departmentRepository.findAll();

    }

    public Appointment cancelAppointment(String appointmentId) {

        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow();

        appointment.setStatus(AppointmentStatus.CANCELLED);

        return appointmentRepository.save(appointment);
    }

    public User createDoctor(DoctorRequest request) {

        User doctor = new User();

        doctor.setName(request.getName());
        doctor.setEmail(request.getEmail());
        doctor.setPassword(passwordEncoder.encode(request.getPassword()));
        doctor.setPhone(request.getPhone());
        doctor.setSpecialization(request.getSpecialization());
        doctor.setDepartmentId(request.getDepartmentId());

        doctor.setRole(Role.DOCTOR);

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        return userRepository.save(doctor);
    }

}