package com.example.demo.Controller.Skills;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Skills.Sector;
import com.example.demo.Service.Skills.SectorService;

@RestController
@RequestMapping("/api/sectors")
public class SectorController {
    @Autowired
    private SectorService sectorService;

    @GetMapping
    public List<Sector> getAllSectors() {
        return sectorService.getAll();
    }

    @PostMapping
    public Sector postSector(@RequestBody Sector sector) {
        return sectorService.createSector(sector);
    }
}
