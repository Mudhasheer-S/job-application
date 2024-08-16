package com.example.demo.Repository.Skills;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Skills.SkillRecommendation;

@Repository
public interface SkillRecommendationRepo extends JpaRepository<SkillRecommendation,Integer>{
    
    @Query("SELECT sr.topic, sr.link, sr.description FROM SkillRecommendation sr WHERE UPPER(sr.language) = UPPER(:language) AND sr.level = :level")
    List<Object[]> findTopicsByLanguageAndLevel(@Param("language") String language, @Param("level") String level);
}
