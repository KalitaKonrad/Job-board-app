package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.model.Offer;
import com.krdkta.internship_for_you.model.Technology;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfferRepository extends CrudRepository<Offer, Long> {
  List<Offer> getOffersByTitleContains(String title);

  List<Offer> getOffersByEmployerContains(Employer employer);

  List<Offer> getOffersByTechnologiesContaining(Technology technology);
}
