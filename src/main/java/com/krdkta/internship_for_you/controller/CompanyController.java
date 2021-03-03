package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.model.company.Company;
import com.krdkta.internship_for_you.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CompanyController {
  private CompanyService companyService;

  @Autowired
  public CompanyController(CompanyService companyService) {
    this.companyService = companyService;
  }

  @GetMapping(value = "/companies")
  public List<Company> getAllCompanies() {
    return companyService.getAllCompanies();
  }

  @GetMapping(value = "/companies/{id}")
  public Company getCompany(@PathVariable long id) {
    return companyService.getCompanyById(id);
  }

  @PostMapping(value = "/companies")
  public void addCompany(@RequestBody Company company) {
    companyService.save(company);
  }

  @PutMapping(value = "/companies/{id}")
  public void updateEmployer(@RequestBody Company company, @PathVariable long id) {
    companyService.updateCompanyById(company, id);
  }
}
