package com.hospital.backend.controller;

import com.hospital.backend.dto.DoctorRequest;
import com.hospital.backend.model.*;
import com.hospital.backend.service.*;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;
    private final ReportService reportService;

    @PostMapping("/department")
    public Department createDepartment(@RequestBody Department department) {

        return adminService.createDepartment(department);
    }

    @GetMapping("/departments")
    public List<Department> getDepartments() {

        return adminService.getDepartments();
    }

    @PutMapping("/cancel/{id}")
    public Appointment cancelAppointment(@PathVariable String id) {

        return adminService.cancelAppointment(id);
    }

    @GetMapping("/reports/doctor")
    public Map<String, Long> appointmentsPerDoctor() {

        return reportService.appointmentsPerDoctor();
    }

    @GetMapping("/reports/revenue")
    public Map<Long, Double> revenuePerDepartment() {

        return reportService.revenuePerDepartment();
    }

    @PostMapping("/create-doctor")
    public User createDoctor(@RequestBody DoctorRequest request) {

        return adminService.createDoctor(request);

    }
}