package com.hospital.backend.service;

import com.hospital.backend.dto.AppointmentRequest;
import com.hospital.backend.model.*;
import com.hospital.backend.repository.*;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final AvailabilityRepository availabilityRepository;

    public Appointment bookAppointment(String patientId,
                                       AppointmentRequest request){

        List<Appointment> doctorAppointments =
                appointmentRepository.findByDoctorIdAndAppointmentDate(
                        request.getDoctorId(),
                        request.getAppointmentDate()
                );

        for(Appointment a : doctorAppointments){

            boolean overlap =
                    request.getStartTime().isBefore(a.getEndTime()) &&
                    request.getEndTime().isAfter(a.getStartTime());

            if(overlap){
                throw new RuntimeException("Doctor already booked in this slot");
            }
        }

        Appointment appointment = new Appointment();

        appointment.setDoctorId(request.getDoctorId());
        appointment.setPatientId(patientId);
        appointment.setDepartmentId(request.getDepartmentId());
        appointment.setAppointmentDate(request.getAppointmentDate());
        appointment.setStartTime(request.getStartTime());
        appointment.setEndTime(request.getEndTime());
        appointment.setStatus(AppointmentStatus.BOOKED);
        appointment.setConsultationFee(500.0);

        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getPatientAppointments(String patientId){

        return appointmentRepository.findByPatientId(patientId);

    }

}