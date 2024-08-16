package com.example.demo.Entity.Skills;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Sector {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
}
