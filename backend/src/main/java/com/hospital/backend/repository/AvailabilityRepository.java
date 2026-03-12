package com.hospital.backend.repository;

import com.hospital.backend.model.DoctorAvailability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AvailabilityRepository extends JpaRepository<DoctorAvailability,Long> {

    List<DoctorAvailability> findByDoctorIdAndAvailableDate(
            String doctorId,
            LocalDate availableDate
    );

}