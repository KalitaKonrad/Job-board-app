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
    System.out.println("BLABLABLLALBALBLABLABLLABL");
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

  public List<Offer> findOffersByTitleContaining(String position) {
    return offerRepository.findOffersByPositionContains(position);
  }

  public List<Offer> findOffersByEmployerContains(Employer employer) {
    return offerRepository.findOffersByEmployerContains(employer);
  }

  //  public List<Offer> findOffersByTechnologyName(@PathVariable String name) {
  //    Technology technology = new Technology(name);
  //    return offerRepository.findOffersByTechnologiesContaining(technology);
  //  }

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

  public List<Offer> findOffersAll(int offset, int limit) {
    List<Offer> offers = (List<Offer>) offerRepository.findAll();
    return offers.stream().skip(offset).limit(limit).collect(Collectors.toList());
  }

  public List<Offer> findOffersWithGivenConstraints(
      int offset, int limit, String keywords, String location) {

    List<Offer> offers = (List<Offer>) offerRepository.findAll();
    String keywordsLowerCase = keywords.toLowerCase();
    String locationToLowerCase = location.toLowerCase();
    return offers.stream()
        .filter(
            offer ->
                offer.getLocation().toLowerCase().contains(locationToLowerCase)
                    || offer.getPosition().toLowerCase().contains(keywordsLowerCase)
                    || offer.getTechnologies().stream()
                        .map(Technology::getName)
                        .map(String::toLowerCase)
                        .anyMatch(technologyName -> technologyName.contains(keywordsLowerCase)))
        .skip(offset)
        .limit(limit)
        .collect(Collectors.toList());
    //    String[] splitKeywords = titleOrKeywords.split(" ");

    //    List<Offer> offers = offerRepository.findOffersByPositionContains(titleOrKeywords);
    //    offers.addAll(offerRepository.findOffersByTechnologiesContaining(titleOrKeywords));
    //    offers.addAll(offerRepository.findOffersByLocationContaining(location));
    //    return offers.stream().distinct().collect(Collectors.toList());
  }
}
