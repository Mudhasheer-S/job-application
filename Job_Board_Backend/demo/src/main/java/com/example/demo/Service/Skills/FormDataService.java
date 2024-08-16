/*package com.example.demo.Service.Skills;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Skills.FormData;
import com.example.demo.Repository.Skills.FormDataRepository;

@Service
public class FormDataService {
    @Autowired
    private FormDataRepository formDataRepository;

    public FormData postData(FormData formData) {
        return formDataRepository.save(formData);
    }

    public List<FormData> getData() {
        return formDataRepository.findAll();
    }
}
*/
package com.example.demo.Service.Skills;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Skills.AnalysisFormate;
import com.example.demo.Entity.Skills.FormData;
import com.example.demo.Entity.Skills.Skill;
import com.example.demo.Repository.Skills.FormDataRepository;
import com.example.demo.Repository.Skills.SkillRecommendationRepo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class FormDataService {

    @Autowired
    private FormDataRepository formDataRepository;

    @Autowired
    private SkillRecommendationRepo skillRecommendationRepo;

    @Autowired
    private SkillService skillService;

    public List<AnalysisFormate> postData(FormData formData) throws JsonMappingException, JsonProcessingException {
        // formDataRepository.save(formData);
        return suggesion(formData);
    }

    public List<FormData> getData() {
        return formDataRepository.findAll();
    }

    public List<AnalysisFormate> suggesion(FormData formData) throws JsonMappingException, JsonProcessingException{

        List<AnalysisFormate> suggesionData = new ArrayList<>();
        
        List<String> skillSelected = Arrays.asList(formData.getSelectedSkills().split(","));
        List<Skill> skillAvailable = skillService.getBySector(formData.getPreferredSector());

        for(int i=0 ; i<skillAvailable.size() ; i++){
            if(!skillSelected.contains(skillAvailable.get(i).getName())){
                AnalysisFormate newSugg = new AnalysisFormate();
                newSugg.setSkill(skillAvailable.get(i).getName());
                newSugg.setLevel("Beginner");
                AddTopic(newSugg, skillAvailable.get(i).getName(), "Beginner");

                suggesionData.add(newSugg);
            }
        }

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(formData.getKnowledgePercentages());

        for(int i=0 ; i<skillSelected.size() ; i++){
            if(jsonNode.get(skillSelected.get(i).toString()).asText().equals("Beginner")){
                AnalysisFormate newSugg = new AnalysisFormate();
                newSugg.setSkill(skillSelected.get(i));
                newSugg.setLevel("Intermediate");
                AddTopic(newSugg, skillSelected.get(i), "Intermediate");

                suggesionData.add(newSugg);
            }
            else if(jsonNode.get(skillSelected.get(i).toString()).asText().equals("Intermediate")){
                AnalysisFormate newSugg = new AnalysisFormate();
                newSugg.setSkill(skillSelected.get(i));
                newSugg.setLevel("Advanced");
                AddTopic(newSugg, skillSelected.get(i), "Advanced");

                suggesionData.add(newSugg);
            }
        }

        return suggesionData;
        
    }

    public void AddTopic(AnalysisFormate newSugg,String language,String level){
        List<Object[]> topics = skillRecommendationRepo.findTopicsByLanguageAndLevel(language,level);

        StringBuilder subtopicsBuilder = new StringBuilder();
        StringBuilder linksBuilder = new StringBuilder();
        StringBuilder descriptionsBuilder = new StringBuilder();

        for (Object[] topic : topics) {
            if (subtopicsBuilder.length() > 0) {
                subtopicsBuilder.append(",");
                linksBuilder.append(",");
                descriptionsBuilder.append(",");
            }

            subtopicsBuilder.append(topic[0].toString());
            linksBuilder.append(topic[1].toString());
            descriptionsBuilder.append(topic[2].toString());
        }

        newSugg.setSubtopics(subtopicsBuilder.toString());
        newSugg.setLinks(linksBuilder.toString());
        newSugg.setDescriptions(descriptionsBuilder.toString());
    }
}
