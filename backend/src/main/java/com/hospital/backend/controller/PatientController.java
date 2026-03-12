package com.hospital.backend.controller;

import com.hospital.backend.dto.AppointmentRequest;
import com.hospital.backend.model.Appointment;
import com.hospital.backend.model.User;
import com.hospital.backend.service.AppointmentService;
import com.hospital.backend.service.PatientService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
@RequiredArgsConstructor
public class PatientController {

    private final AppointmentService appointmentService;
    private final PatientService patientService;

    @PostMapping("/book/{patientId}")
    public Appointment bookAppointment(
            @PathVariable String patientId,
            @RequestBody AppointmentRequest request){

        return appointmentService.bookAppointment(patientId,request);
    }

    @GetMapping("/appointments/{patientId}")
    public List<Appointment> getAppointments(
            @PathVariable String patientId){

        return appointmentService.getPatientAppointments(patientId);
    }

    // NEW API
    @GetMapping("/doctors")
    public List<User> getDoctors(
            @RequestParam(required = false) String specialization){

        return patientService.getDoctors(specialization);
    }

}