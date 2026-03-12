package com.hospital.backend.service;

import com.hospital.backend.model.Appointment;
import com.hospital.backend.repository.AppointmentRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final AppointmentRepository appointmentRepository;

    public Map<String, Long> appointmentsPerDoctor(){

        List<Appointment> list = appointmentRepository.findAll();

        return list.stream()
                .collect(Collectors.groupingBy(
                        Appointment::getDoctorId,
                        Collectors.counting()
                ));
    }

    public Map<Long, Double> revenuePerDepartment(){

        List<Appointment> list = appointmentRepository.findAll();

        return list.stream()
                .filter(a -> a.getStatus().name().equals("COMPLETED"))
                .collect(Collectors.groupingBy(
                        Appointment::getDepartmentId,
                        Collectors.summingDouble(Appointment::getConsultationFee)
                ));
    }

}