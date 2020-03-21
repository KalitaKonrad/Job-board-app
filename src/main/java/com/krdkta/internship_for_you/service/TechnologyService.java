package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.Technology;
import com.krdkta.internship_for_you.repository.TechnologyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnologyService {
  private TechnologyRepository technologyRepository;

  @Autowired
  public TechnologyService(TechnologyRepository technologyRepository) {
    this.technologyRepository = technologyRepository;
  }

  public void save(Technology technology) {
    technologyRepository.save(technology);
  }

  public Technology findById(Long id) {
    return technologyRepository.findById(id).orElse(null);
  }

  public List<Technology> getAllTechnologies() {
    return (List<Technology>) technologyRepository.findAll();
  }

  public void updateTechnologyById(Technology technology, Long id) {
    technologyRepository
        .findById(id)
        .ifPresent(
            t -> {
              this.save(technology);
            });
  }
}
