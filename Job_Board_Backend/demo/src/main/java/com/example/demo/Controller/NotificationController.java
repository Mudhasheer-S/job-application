package com.example.demo.Controller;

import com.example.demo.Entity.EmailRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.EmailService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

public class NotificationController {

    private final EmailService emailService;

    public NotificationController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/send-email")
    public String sendEmail() {
        String to = "727722euit116@skcet.ac.in";
        String subject = "Welcome Sir,Intern at Jobizz";
        String message = "Hi Naveen,\\n" + //
                "\\n" + //
                "Please check out this link: https://www.example.com\\n" + //
                "\\n" + //
                "Best regards,\\n" + //
                "Jobizz community";
        emailService.sendEmail(to, subject, message);
        return "Email sent successfully!";
    }

    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequest emailRequest) {
        emailService.sendEmail(emailRequest.getTo(), emailRequest.getSubject(), emailRequest.getMessage());
        return new ResponseEntity<>("Email sent successfully!", HttpStatus.OK);
    }
}
