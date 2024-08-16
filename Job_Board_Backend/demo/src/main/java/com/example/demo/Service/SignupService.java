package com.example.demo.Service;

import com.example.demo.Entity.Signup;
import com.example.demo.Entity.UserSignUp;
import com.example.demo.Repository.SignupRepo;
import com.example.demo.Repository.UserSignupRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class SignupService {
    @Autowired
    private SignupRepo signRepo;

    @Autowired
    private UserSignupRepo userSignupRepo;
    public boolean postmethod(Signup sign)
    {
        try
        {
            signRepo.save((sign));
            return true;
        }
        catch(Exception e)
        {
            return false;

        }
    }
    public List<Signup> list()
    {
        return signRepo.findAll();
    }
    public Optional<Signup> getId(String id)
    {
        return signRepo.findById(id);
    }
    public Signup putmethod(Signup sign,String id)
    {
//        if(getId(id)!=null)
//        {
//            return signRepo.save(sign);
//        }
//        else{
//            return null;
//        }
        Optional<Signup> existingSignup = signRepo.findById(id);
        if (existingSignup.isPresent()) {
            Signup updatedSignup = existingSignup.get();
            // Update fields
            updatedSignup.setFirstName(sign.getFirstName());
            updatedSignup.setLastName(sign.getLastName());
            updatedSignup.setCompanyname(sign.getCompanyname());
            updatedSignup.setPassword(sign.getPassword());
            updatedSignup.setEmail(sign.getEmail());
            return signRepo.save(updatedSignup);
        } else {
            return null;
        }
    }
    public void deldata(String id)
    {
        signRepo.deleteById(id);
    }

    public void UserPost(UserSignUp userSignUp){
        userSignupRepo.save(userSignUp);
    }

    public Optional<UserSignUp> getUser(String username){
        return userSignupRepo.findById(username);
    }
}
