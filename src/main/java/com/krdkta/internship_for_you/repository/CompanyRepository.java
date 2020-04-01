package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.company.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
  List<Company> getCompaniesByName(String name);
}
