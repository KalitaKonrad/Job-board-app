package com.krdkta.internship_for_you.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
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

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "employer")
  private List<Offer> offerList = new ArrayList<>();

  public Employer(String name, String location, String description) {
    this.name = name;
    this.location = location;
    this.description = description;
  }
}
