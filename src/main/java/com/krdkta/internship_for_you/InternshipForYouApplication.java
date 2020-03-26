package com.krdkta.internship_for_you;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.model.ExperienceLevel;
import com.krdkta.internship_for_you.model.Offer;
import com.krdkta.internship_for_you.model.Technology;
import com.krdkta.internship_for_you.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.jpa.repository.Modifying;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class InternshipForYouApplication {

  private EmployerRepository employerRepository;

  @Autowired
  InternshipForYouApplication(EmployerRepository employerRepository) {
    this.employerRepository = employerRepository;
  }

  public static void main(String[] args) {
    SpringApplication.run(InternshipForYouApplication.class, args);
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
    Offer offer4 =
        new Offer("Software Developer", "New York", "Lorem sripsum #1", ExperienceLevel.INTERN);
    Offer offer5 =
        new Offer("Software Engineer", "Toronto", "Lorem sripsum #2", ExperienceLevel.JUNIOR);
    Offer offer6 = new Offer("Ruby Developer", "Krakow", "Lorem sripsum #3", ExperienceLevel.MID);
    Offer offer7 =
        new Offer("Software Developer", "New York", "Lorem sripsum #1", ExperienceLevel.INTERN);
    Offer offer8 =
        new Offer("Software Engineer", "Toronto", "Lorem sripsum #2", ExperienceLevel.JUNIOR);
    Offer offer9 = new Offer("Ruby Developer", "Krakow", "Lorem sripsum #3", ExperienceLevel.MID);
    Offer offer10 =
        new Offer("Software Developer", "New York", "Lorem sripsum #1", ExperienceLevel.INTERN);
    Offer offer11 =
        new Offer("Software Engineer", "Toronto", "Lorem sripsum #2", ExperienceLevel.JUNIOR);
    Offer offer12 = new Offer("Ruby Developer", "Krakow", "Lorem sripsum #3", ExperienceLevel.MID);
    List<Offer> offers =
        Arrays.asList(
            offer1, offer2, offer3, offer4, offer5, offer6, offer7, offer8, offer9, offer10,
            offer11, offer12);

    employer1.setOfferList(offers);
    offers.forEach(offer -> offer.setEmployer(employer1));
    offers.forEach(offer -> offer.setTechnologies(technologies));
    technologies.forEach(technology -> technology.setOffer(offer1));
    // LINKING UP DATA
    employer1.setOfferList(offers);

    employerRepository.saveAll(employers);
  }
}
