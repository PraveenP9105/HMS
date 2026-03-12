package com.hospital.backend.controller;

import com.hospital.backend.model.*;
import com.hospital.backend.service.DoctorService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
@RequiredArgsConstructor
public class DoctorController {

    private final DoctorService doctorService;

    @PostMapping("/availability")
    public DoctorAvailability addAvailability(
            @RequestBody DoctorAvailability availability){

        return doctorService.addAvailability(availability);
    }

    @GetMapping("/appointments/{doctorId}")
    public List<Appointment> getAppointments(
            @PathVariable String doctorId){

        return doctorService.getDoctorAppointments(doctorId);
    }

    @PutMapping("/confirm/{id}")
    public Appointment confirmAppointment(@PathVariable String id){

        return doctorService.confirmAppointment(id);
    }

    @PutMapping("/complete/{id}")
    public Appointment completeAppointment(@PathVariable String id){

        return doctorService.completeAppointment(id);
    }

}