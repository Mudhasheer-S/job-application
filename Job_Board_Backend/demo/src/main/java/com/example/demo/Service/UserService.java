package com.example.demo.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public  String deleteUser(Long id) {
        userRepository.deleteById(id);
        return "user deleted successfully";
    }

    public User postdetail(User user) {
        return userRepository.save(user);
    }

    public List<User> getdetail() {
        return userRepository.findAll();
    }

    public List<User> findByCompany(String companyname) {
        return userRepository.findByCompanyname(companyname);
    }
}
