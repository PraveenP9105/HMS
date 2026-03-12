package com.hospital.backend.dto;

import lombok.Data;

@Data
public class DoctorRequest {

    private String name;

    private String email;

    private String password;

    private String phone;

    private String specialization;

    private Long departmentId;

}