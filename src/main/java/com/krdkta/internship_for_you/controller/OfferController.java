package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.model.Offer;
import com.krdkta.internship_for_you.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OfferController {

  private OfferService offerService;

  @Autowired
  public OfferController(OfferService offerService) {
    this.offerService = offerService;
  }

  @GetMapping(value = "offers")
  public List<Offer> getAllEmployers() {
    return offerService.getAllOffers();
  }

  //  @GetMapping(value = "/offers")
  //  public List<Offer> getAllEmployers(@RequestParam(name = "name") String companyName) {
  //    return offerService.getAllOffers(companyName);
  //  }

  @GetMapping(value = "offers/{id}")
  public Offer getEmployer(@PathVariable long id) {
    return offerService.getOfferById(id);
  }

  @PostMapping(value = "offers")
  public void addOffer(Offer offer) {
    offerService.saveOffer(offer);
  }

  @PutMapping(value = "offers/{id}")
  public void updateOfferById(Offer offer, @PathVariable Long id) {
    offerService.updateOfferById(offer, id);
  }
}
