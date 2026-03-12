package com.hospital.backend.repository;

import com.hospital.backend.model.Role;
import com.hospital.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {

    Optional<User> findByEmail(String email);

    List<User> findByRole(Role role);

    List<User> findByRoleAndSpecialization(Role role,String specialization);

}