package com.example.demo.Controller;

import com.example.demo.Entity.UserDetails;
import com.example.demo.Service.UserDetailsService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class UserDetailsController {

    @Autowired
    private UserDetailsService userDetailsService;

    @GetMapping("/get/{username}")
    public Optional<UserDetails> getUserByUsername(@PathVariable String username) {
        return userDetailsService.getUserByUsername(username);
    }

    @PostMapping("/create")
    public UserDetails createUser(@RequestBody UserDetails userDetails) {
        return userDetailsService.createUser(userDetails);
    }

    @PutMapping("/update/{username}")
    public UserDetails updateUser(@PathVariable String username, @RequestBody UserDetails userDetails) {
        return userDetailsService.updateUser(username, userDetails);
    }
}
