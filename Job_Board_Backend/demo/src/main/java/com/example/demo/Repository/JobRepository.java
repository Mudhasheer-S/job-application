package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Job;

import java.util.List;


public interface JobRepository extends JpaRepository<Job, Integer> {

    List<Job> findByCompanyName(String companyname);
}

