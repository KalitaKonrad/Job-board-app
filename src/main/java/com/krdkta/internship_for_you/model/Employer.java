package com.krdkta.internship_for_you.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
// @Table(name = "employer")
public class Employer {

  private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "employer")
  private List<Offer> offerList;

  private String name;
  private String location;
  private String description;
  private int companySize;

  //  public void setOfferList(List<Offer> offerList) {
  //    this.offerList = offerList;
  //  }

  public Employer(String name, String location, String description) {
    this.name = name;
    this.location = location;
    this.description = description;
  }

  public Employer(String name, String location, String description, int companySize) {
    this.name = name;
    this.location = location;
    this.description = description;
    this.companySize = companySize;
  }
}
