package com.example.demo.Entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String mobilenumber;
    private String gender;
    private String age;
    private String companyname;

    private String collegeName;
    private String collegeLocation;
    private String courseName;
    private String cgpa;
    private LocalDate startYear;
    private LocalDate endYear;

    private String company;
    private String role;
    private String experience;
    private String description;
}
