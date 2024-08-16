package com.example.demo.Repository.Skills;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Skills.FormData;

@Repository
public interface FormDataRepository extends JpaRepository<FormData, Long> {
}
