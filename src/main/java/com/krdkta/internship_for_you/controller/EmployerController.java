package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployerController {
  private EmployerService employerService;

  @Autowired
  public EmployerController(EmployerService employerService) {
    this.employerService = employerService;
  }

  @GetMapping(value = "/employers")
  public List<Employer> getAllEmployers() {
    return employerService.getAllEmployers();
  }

  @GetMapping(value = "employers/{id}")
  public Employer getEmployer(@PathVariable long id) {
    return employerService.getEmployerById(id);
  }

  @PostMapping(value = "/employers")
  public void addEmployer(@RequestBody Employer employer) {
    employerService.saveEmployer(employer);
  }

  @PutMapping(value = "employers/{id}")
  public void updateEmployer(@RequestBody Employer employer, @PathVariable long id) {
    employerService.updateEmployerById(employer, id);
  }
}
