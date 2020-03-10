package com.krdkta.internship_for_you.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
// @Table(name = "employer")
public class Employer {
  private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
  private String name;
  private String location;
  private String description;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @Column(name = "offer_list")
  private List<Offer> offerList;

  public Employer(String name, String location, String description) {
    this.name = name;
    this.location = location;
    this.description = description;
  }
}
