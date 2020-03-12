package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.Employer;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface EmployerRepository extends CrudRepository<Employer, Long> {
  Optional<Employer> getEmployerByName(String name);
}
