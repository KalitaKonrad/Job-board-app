package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.model.Offer;
import com.krdkta.internship_for_you.model.Technology;
import com.krdkta.internship_for_you.service.EmployerService;
import com.krdkta.internship_for_you.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OfferController {

  private OfferService offerService;
  private EmployerService employerService;

  @Autowired
  public OfferController(OfferService offerService, EmployerService employerService) {
    this.offerService = offerService;
    this.employerService = employerService;
  }

  @GetMapping(value = "offers")
  public List<Offer> getAllEmployers() {
    return offerService.getAllOffers();
  }

  @GetMapping(value = "offers/{id}")
  public Offer getEmployer(@PathVariable long id) {
    return offerService.getOfferById(id);
  }

  @PostMapping(value = "offers", consumes = "application/json")
  public void addOffer(@RequestBody Offer offer) {
    offer.setTechnologies(
        offer.getTechnologies().stream()
            .map(technology -> new Technology(technology.getName(), offer))
            .collect(Collectors.toList()));
    offer.setEmployer(employerService.getEmployerById(1L)); // TODO: implement dynamic employer_id
    offerService.saveOffer(offer);
  }

  @PutMapping(value = "offers/{id}")
  public void updateOfferById(Offer offer, @PathVariable Long id) {
    offerService.updateOfferById(offer, id);
  }
}
