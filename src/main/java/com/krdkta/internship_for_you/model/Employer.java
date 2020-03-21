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
@Table(name = "employer")
public class Employer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "emp_id")
  private Long id;

  @OneToMany(
      fetch = FetchType.LAZY,
      mappedBy = "employer",
      cascade = {CascadeType.ALL},
      orphanRemoval = true)
  private List<Offer> offerList;

  @Column(name = "name", unique = true, nullable = false, length = 100)
  private String name;

  @Column(name = "location", nullable = false, length = 100)
  private String location;

  @Column(name = "description")
  private String description;

  @Column(name = "company_size")
  private int companySize;

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
