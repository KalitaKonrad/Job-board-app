package com.krdkta.internship_for_you.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Offer {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private Employer employer;

  @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "offer")
  private List<Technology> technologies = new ArrayList<>();

  private String location;
  private String title;
  private String description;
  private ExperienceLevel experienceLevel;

  public Offer(String location, String title, String description, ExperienceLevel experienceLevel) {
    this.location = location;
    this.title = title;
    this.description = description;
    this.experienceLevel = experienceLevel;
  }
}
