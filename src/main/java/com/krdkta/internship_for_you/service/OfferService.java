package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.model.Offer;
import com.krdkta.internship_for_you.model.Technology;
import com.krdkta.internship_for_you.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

  public List<Offer> findOffersByEmployerContains(Employer employer) {
    return offerRepository.findOffersByEmployerContains(employer);
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

  public List<Offer> findOffersWithConstraints(
      int offset, int limit, String keywords, String location) {

    String keywordsLowerCase = keywords.toLowerCase();
    String locationToLowerCase = location.toLowerCase().toLowerCase();
    List<Offer> offers = (List<Offer>) offerRepository.findAll();

    if (keywords.isEmpty() && location.isEmpty()) {
      return offers.stream().skip(offset).limit(limit).collect(Collectors.toList());
    }

    if (keywords.isEmpty()) {
      return offers.stream()
          .filter(offer -> offer.getLocation().toLowerCase().contains(locationToLowerCase))
          .skip(offset)
          .limit(limit)
          .collect(Collectors.toList());
    }

    if (location.isEmpty()) {
      return offers.stream()
          .filter(
              offer ->
                  (offer.getPosition().toLowerCase().contains(keywordsLowerCase))
                      || offer.getTechnologies().stream()
                          .map(Technology::getName)
                          .map(String::toLowerCase)
                          .anyMatch(technologyName -> technologyName.contains(keywordsLowerCase)))
          .skip(offset)
          .limit(limit)
          .collect(Collectors.toList());
    }

    return offers.stream()
        .filter(
            offer ->
                offer.getLocation().toLowerCase().contains(locationToLowerCase)
                    && (offer.getPosition().toLowerCase().contains(keywordsLowerCase)
                        || offer.getTechnologies().stream()
                            .map(Technology::getName)
                            .map(String::toLowerCase)
                            .anyMatch(
                                technologyName -> technologyName.contains(keywordsLowerCase))))
        .skip(offset)
        .limit(limit)
        .collect(Collectors.toList());
  }
}
