package com.example.demo.Controller.Skills;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Skills.Skill;
import com.example.demo.Service.Skills.SkillService;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping
    public List<Skill> getAllSkills() {
        return skillService.getSkills();
    }

    @GetMapping("/sector/{sector}")
    public List<Skill> getSkillsBySector(@PathVariable String sector) {
        return skillService.getBySector(sector);
    }

    @PostMapping
    public Skill createSkill(@RequestBody Skill skill) {
        return skillService.addSkill(skill);
    }
}