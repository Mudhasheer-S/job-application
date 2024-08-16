package com.example.demo.Service.Skills;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Skills.Sector;
import com.example.demo.Repository.Skills.SectorRepository;

@Service
public class SectorService {
    @Autowired
    private SectorRepository sectorRepository;

    public List<Sector> getAll() {
        return sectorRepository.findAll();
    }

    public Sector createSector(Sector sector) {
        return sectorRepository.save(sector);
    }

}
