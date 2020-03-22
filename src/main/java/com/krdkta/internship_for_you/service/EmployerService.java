package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.model.ExperienceLevel;
import com.krdkta.internship_for_you.model.Offer;
import com.krdkta.internship_for_you.model.Technology;
import com.krdkta.internship_for_you.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Arrays;
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

  public void deleteEmployerById(@PathVariable long id) {
    employerRepository.deleteById(id);
  }

  @Modifying
  @EventListener(ApplicationReadyEvent.class)
  public void fillDB() {
    // EXAMPLE TECHNOLOGIES

    List<Technology> technologies =
        Arrays.asList(
            new Technology("Java"), new Technology("JavaScript"), new Technology("Spring"));

    // EXAMPLE EMPLOYER
    Employer employer1 = new Employer("Google", "US", "IT Company", 2000000);
    Employer employer2 = new Employer("Amazon", "US", "IT Company", 300000);
    Employer employer3 = new Employer("Facebook", "US", "IT Company", 500000);
    List<Employer> employers = Arrays.asList(employer1, employer2, employer3);

    // EXAMPLE OFFERS
    Offer offer1 =
        new Offer("Software Developer", "New York", "Lorem sripsum #1", ExperienceLevel.INTERN);
    Offer offer2 =
        new Offer("Software Engineer", "Toronto", "Lorem sripsum #2", ExperienceLevel.JUNIOR);
    Offer offer3 = new Offer("Ruby Developer", "Krakow", "Lorem sripsum #3", ExperienceLevel.MID);
    List<Offer> offers = Arrays.asList(offer1, offer2, offer3);

    employer1.setOfferList(offers);
    offers.forEach(offer -> offer.setEmployer(employer1));
    offers.forEach(offer -> offer.setTechnologies(technologies));
    technologies.forEach(technology -> technology.setOffer(offer1));
    // LINKING UP DATA
    employer1.setOfferList(offers);

    employerRepository.saveAll(employers);
  }
}
