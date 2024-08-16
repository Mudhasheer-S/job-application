package com.example.demo.Repository.Skills;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Skills.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    List<Skill> findBySector(String sector);
}
