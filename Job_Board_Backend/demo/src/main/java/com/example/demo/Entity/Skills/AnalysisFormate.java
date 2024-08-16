package com.example.demo.Entity.Skills;

import jakarta.persistence.Lob;
import lombok.Data;

@Data
public class AnalysisFormate {
    
    private String skill;
    private String level;
    @Lob
    private String subtopics;
    @Lob
    private String descriptions;
    @Lob
    private String links;

}
