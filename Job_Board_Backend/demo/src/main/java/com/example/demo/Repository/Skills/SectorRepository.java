package com.example.demo.Repository.Skills;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Skills.Sector;

@Repository
public interface SectorRepository extends JpaRepository<Sector, Long> {
}
