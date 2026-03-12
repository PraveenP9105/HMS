package com.hospital.backend.repository;

import com.hospital.backend.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment,String> {

    List<Appointment> findByDoctorIdAndAppointmentDate(
            String doctorId,
            LocalDate appointmentDate
    );

    List<Appointment> findByPatientId(String patientId);

}