package com.example.demo.Service.Skills;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Skills.Skill;
import com.example.demo.Repository.Skills.SkillRepository;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public List<Skill> getSkills() {
        return skillRepository.findAll();
    }

    public List<Skill> getBySector(String sector) {
        return skillRepository.findBySector(sector);
    }

    public Skill addSkill(Skill skill) {
        return skillRepository.save(skill);
    }

}
