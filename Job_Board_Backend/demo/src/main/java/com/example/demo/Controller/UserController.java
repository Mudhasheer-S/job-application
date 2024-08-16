package com.example.demo.Controller;

import com.example.demo.Entity.Job;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/details")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/post/user")
    public ResponseEntity<User> postDetail(@RequestBody User user) {
        return new ResponseEntity<>(userService.postdetail(user), HttpStatus.OK);
    }

    @GetMapping("/get/user")
    public ResponseEntity<List<User>> getDetail() {
        List<User> users = userService.getdetail();
        if(users.isEmpty())
        {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/get/user/{companyname}")
    public List<User> getUsersByCompany(@PathVariable String companyname) {
        return userService.findByCompany(companyname);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }
}
