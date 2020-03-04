package com.krdkta.internship_for_you.model;

import com.krdkta.internship_for_you.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

  private final EmployerRepository repository;

  @Autowired
  public DatabaseLoader(EmployerRepository repository) {
    this.repository = repository;
  }

  @Override
  public void run(String... args) throws Exception {
    // this.repository.save(new Employer("Google", "London", "Very large company"));
  }
}
