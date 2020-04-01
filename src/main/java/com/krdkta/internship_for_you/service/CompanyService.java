package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.company.Company;
import com.krdkta.internship_for_you.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class CompanyService {
  private CompanyRepository companyRepository;

  @Autowired
  public CompanyService(CompanyRepository companyRepository) {
    this.companyRepository = companyRepository;
  }

  public List<Company> getAllCompanies() {
    return (List<Company>) companyRepository.findAll();
  }

  public void save(Company company) {
    companyRepository.save(company);
  }

  public Company getCompanyById(long id) {
    return companyRepository.findById(id).orElse(null);
  }

  public void updateCompanyById(Company company, long id) {
    companyRepository
        .findById(id)
        .ifPresent(
            e -> {
              this.save(company);
            });
  }

  public void deleteEmployerById(@PathVariable long id) {
    companyRepository.deleteById(id);
  }
}
