package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.model.Offer;
import com.krdkta.internship_for_you.model.Technology;
import com.krdkta.internship_for_you.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OfferService {

  private OfferRepository offerRepository;

  @Autowired
  public OfferService(OfferRepository offerRepository) {
    this.offerRepository = offerRepository;
  }

  public List<Offer> findAll() {
    return (List<Offer>) offerRepository.findAll();
  }

  public List<Offer> findAll(String companyName) {
    List<Offer> allOffers = (List<Offer>) offerRepository.findAll();
    return allOffers.stream()
        .filter(
            offer ->
                offer.getEmployer().getName().toLowerCase().contains(companyName.toLowerCase()))
        .collect(Collectors.toList());
  }

  public void saveOffer(Offer offer) {
    offerRepository.save(offer);
  }

  public List<Offer> getOffersByTitleContaining(String position) {
    return offerRepository.getOffersByPositionContains(position);
  }

  public List<Offer> getOffersByEmployerContains(Employer employer) {
    return offerRepository.getOffersByEmployerContains(employer);
  }

  public List<Offer> getOffersByTechnologyName(@PathVariable String name) {
    Technology technology = new Technology(name);
    return offerRepository.getOffersByTechnologiesContaining(technology);
  }

  public Offer getOfferById(Long id) {
    return offerRepository.findById(id).orElse(null);
  }

  public void updateOfferById(Offer offer, Long id) {
    offerRepository
        .findById(id)
        .ifPresent(
            o -> {
              this.saveOffer(offer);
            });
  }
}
