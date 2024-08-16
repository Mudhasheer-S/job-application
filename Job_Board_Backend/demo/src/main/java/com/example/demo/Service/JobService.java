package com.example.demo.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Entity.Job;
import com.example.demo.Repository.JobRepository;

@Service
public class JobService {
    private JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public Job addJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    public Job getId(int id) {
        return jobRepository.findById(id).orElse(null);
    }

    public String updateUser(int id, Job job) {
        if (getId(id) == null) {
            return "There is no job founded";
        }
        jobRepository.save(job);
        return "job updated successfully";
    }

    public String deleteUser(int id) {
        if (getId(id) == null) {
            return "there is no job founded";
        }
        jobRepository.deleteById(id);
        return "job deleted successfully";
    }

    public List<Job> findByCompany(String companyname) {
        return jobRepository.findByCompanyName(companyname);
    }
}