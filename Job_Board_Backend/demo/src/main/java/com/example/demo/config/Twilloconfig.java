package com.example.demo.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import lombok.Data;

@Configuration
@Component
@ConfigurationProperties(prefix = "twilio")
@Data
public class Twilloconfig {
    private String account_Sid;
    private String Auth_Token;
    private String Trail_Number;
}
// ntg