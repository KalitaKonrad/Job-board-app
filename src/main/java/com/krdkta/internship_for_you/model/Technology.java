package com.krdkta.internship_for_you.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Technology {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private Offer offer;

  private String name;
  private ExperienceLevel techExpLevel = ExperienceLevel.INTERN;

  public Technology(String name) {
    this.name = name;
  }

  public Technology(String name, ExperienceLevel techExpLevel) {
    this.name = name;
    this.techExpLevel = techExpLevel;
  }
}
