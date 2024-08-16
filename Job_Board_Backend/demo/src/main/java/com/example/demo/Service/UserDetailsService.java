package com.example.demo.Service;

import com.example.demo.Entity.UserDetails;
import com.example.demo.Repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    public Optional<UserDetails> getUserByUsername(String username) {
        return userDetailsRepository.findById(username);
    }

    public UserDetails createUser(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }

    public UserDetails updateUser(String username, UserDetails userDetails) {
         Optional<UserDetails> existingUserDetails =
         userDetailsRepository.findById(username);

         if (existingUserDetails.isPresent()) {
         UserDetails updateUserDetails = existingUserDetails.get();
         updateUserDetails.setName(userDetails.getName());
         updateUserDetails.setEmail(userDetails.getEmail());
         updateUserDetails.setPhone(userDetails.getPhone());
         updateUserDetails.setJobrole(userDetails.getJobrole());
         updateUserDetails.setAbout(userDetails.getAbout());

        return userDetailsRepository.save(userDetails);
         }

         return null;
    }
}
