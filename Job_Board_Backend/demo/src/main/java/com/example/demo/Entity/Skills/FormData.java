package com.example.demo.Entity.Skills;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class FormData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String preferredSector;
    private String selectedSkills;
    private String knowledgePercentages;
    private String projectExperience;
    private String projectDetails;
    private String interestedCompanies;
    private String expectedSalary;
}
