package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.company.Company;
import com.krdkta.internship_for_you.model.job.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

  List<Job> findJobsByPositionContains(String position);

  @Query(
      "select j from Job j where lower(j.position) like lower(concat('%', ?1, '%')) and "
          + "lower(j.location) like lower(concat('%', ?2, '%'))")
  Page<Job> findByKeywordsOrLocation(String keywords, String location, Pageable pageable);

  List<Job> findJobsByCompanyContains(Company company);

  // TODO: write query to find jobs by required skills(a.k.a technologies)
  //  List<Job> findJobsBySkillsContaining(String name);

  List<Job> findJobsByMinimumSalaryGreaterThanEqual(int minimum_salary);
}
