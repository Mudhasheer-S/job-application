package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByCompanyname(String companyname);
}
