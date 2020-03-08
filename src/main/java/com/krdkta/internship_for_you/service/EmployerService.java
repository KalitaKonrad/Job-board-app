package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class EmployerService {
  private EmployerRepository employerRepository;

  @Autowired
  public EmployerService(EmployerRepository employerRepository) {
    this.employerRepository = employerRepository;
  }

  public List<Employer> getAllEmployers() {
    return (List<Employer>) employerRepository.findAll();
  }

  public void saveEmployer(Employer employer) {
    employerRepository.save(employer);
  }

  public Employer getEmployerById(long id) {
    return employerRepository.findById(id).orElse(null);
  }

  public void updateEmployerById(Employer employer, long id) {
    employerRepository
        .findById(id)
        .ifPresent(
            e -> {
              this.saveEmployer(employer);
            });
  }

  @EventListener(ApplicationReadyEvent.class)
  public void fillDB() {
    saveEmployer(new Employer("Amazon", "UK", "Largest company"));
    saveEmployer(new Employer("Facebook", "US", "Large company"));
    saveEmployer(new Employer("Youtube", "US", "Large company"));
    saveEmployer(new Employer("Youtube_v2", "US", "Large company"));
  }

  public void deleteEmployerById(@PathVariable long id) {
    employerRepository.deleteById(id);
  }
}
