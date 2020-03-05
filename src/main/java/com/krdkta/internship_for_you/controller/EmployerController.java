package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployerController {
  private EmployerService employerService;

  @Autowired
  public EmployerController(EmployerService employerService) {
    this.employerService = employerService;
  }

  @GetMapping(value = "/employers", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public List<Employer> getAllEmployers() {
    return employerService.getAllEmployers();
  }
}
