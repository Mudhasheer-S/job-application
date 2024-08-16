package com.example.demo.Repository;

import com.example.demo.Entity.UserSignUp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  UserSignupRepo extends JpaRepository<UserSignUp,String> {

}
