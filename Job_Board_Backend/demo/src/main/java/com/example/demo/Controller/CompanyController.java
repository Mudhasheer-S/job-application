package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Company;
import com.example.demo.Service.CompanyService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController

@RequestMapping("company")
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    @GetMapping("/get/{id}")
    public Company getmetCompany(@PathVariable int id)
    {
        return companyService.getid(id);
    }
    
    @GetMapping("/get")
    public List<Company> getlist()
    {
        return companyService.lis();
    }

    @PostMapping("/post")
    public Company postmethod(@RequestBody Company company)
    {
         return companyService.postdata(company);
    }

    @PutMapping("/up/{id}")
    public Company pCompany(@RequestBody Company company,@PathVariable int id)
    {
        return companyService.putmethod(company, id);
    }
    @DeleteMapping("/del/{id}")
    public void delmethod(@PathVariable int id)
    {
        companyService.del(id);
    }
    

}
