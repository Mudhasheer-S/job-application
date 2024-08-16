package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Company;
import com.example.demo.Repository.CompanyRepo;



@Service
public class CompanyService {
    @Autowired
    private CompanyRepo companyRepo;

    public List<Company>lis()
    {
        return companyRepo.findAll();
    }
    public Company getid(int id)
    {
        return companyRepo.findById(id).orElse(null);
    }
    public Company postdata(Company company)
    {
        return companyRepo.save(company);
    }
    public Company putmethod( Company company,int id)
    {
        if(getid(id)!=null)
        {
            return companyRepo.save(company);
        }
        else{
            return null;
        }
        
    }
    public void del(int id)
    {
        companyRepo.deleteById(id);
    }

    
}
