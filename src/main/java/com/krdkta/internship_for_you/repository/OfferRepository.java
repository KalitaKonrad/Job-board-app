package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.Employer;
import com.krdkta.internship_for_you.model.Offer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfferRepository extends CrudRepository<Offer, Long> {
  List<Offer> findOffersByPositionContains(String position);

  List<Offer> findOffersByEmployerContains(Employer employer);

  List<Offer> findOffersByTechnologiesContaining(String name);

  List<Offer> findOffersByMinimumSalaryGreaterThanEqual(int minimum_salary);
}
