package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployerService {
  private EmployerRepository employerRepository;

  public EmployerService(EmployerRepository employerRepository) {
    this.employerRepository = employerRepository;
  }

  public List<Employer> getAllEmployers() {
    return (List<Employer>) employerRepository.findAll();
  }
}
