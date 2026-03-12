package com.hospital.backend.service;

import com.hospital.backend.model.*;
import com.hospital.backend.repository.*;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorService {

    private final AvailabilityRepository availabilityRepository;
    private final AppointmentRepository appointmentRepository;

    public DoctorAvailability addAvailability(DoctorAvailability availability){

        return availabilityRepository.save(availability);

    }

    public List<Appointment> getDoctorAppointments(String doctorId){

        return appointmentRepository.findAll()
                .stream()
                .filter(a -> a.getDoctorId().equals(doctorId))
                .toList();

    }

    public Appointment confirmAppointment(String appointmentId){

        Appointment appointment =
                appointmentRepository.findById(appointmentId)
                        .orElseThrow();

        appointment.setStatus(AppointmentStatus.CONFIRMED);

        return appointmentRepository.save(appointment);
    }

    public Appointment completeAppointment(String appointmentId){

        Appointment appointment =
                appointmentRepository.findById(appointmentId)
                        .orElseThrow();

        appointment.setStatus(AppointmentStatus.COMPLETED);

        return appointmentRepository.save(appointment);
    }

}