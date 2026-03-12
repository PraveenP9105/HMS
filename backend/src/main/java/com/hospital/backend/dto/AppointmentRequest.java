package com.hospital.backend.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class AppointmentRequest {

    private String doctorId;

    private Long departmentId;

    private LocalDate appointmentDate;

    private LocalTime startTime;

    private LocalTime endTime;

}