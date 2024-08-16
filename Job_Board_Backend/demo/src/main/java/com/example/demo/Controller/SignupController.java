package com.example.demo.Controller;

import com.example.demo.Entity.Signup;
import com.example.demo.Entity.UserSignUp;
import com.example.demo.Service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SignupController {
    @Autowired
    private SignupService signService;

    @GetMapping("/admin/get/{id}")
    public Optional<Signup> getById(@PathVariable String id) {
        return signService.getId((id));
    }

    @PostMapping("/admin/post")
    public void postSign(@RequestBody Signup sign) {
        signService.postmethod(sign);
    }

    @PutMapping("/admin/put/{id}")
    public Signup putSign(@RequestBody Signup sign, @PathVariable String id) {
        return signService.putmethod(sign, id);
    }

    @DeleteMapping("/admin/del/{id}")
    public void deleteIdSign(@PathVariable String id) {
        signService.deldata(id);
    }

    @GetMapping("/user/get/{username}")
    public Optional<UserSignUp> getMethodName(@PathVariable String username) {
        return signService.getUser(username);
    }

    @PostMapping("/user/post")
    public void postMethodName(@RequestBody UserSignUp userSignUp) {
        signService.UserPost(userSignUp);
    }

}
