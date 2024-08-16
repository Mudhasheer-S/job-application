package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Data
@Entity
public class UserDetails {
    
    @Id
    private String username;
    private String name;
    private String email;
    private String phone;
    private String jobrole;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String about;
}
