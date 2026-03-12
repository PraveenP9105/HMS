package com.hospital.backend.config;

import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.Info;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI hospitalAPI(){

        return new OpenAPI()
                .info(new Info()
                        .title("Hospital Appointment API")
                        .version("1.0")
                        .description("Hospital Appointment System Backend APIs")
                );
    }
}