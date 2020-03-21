package com.krdkta.internship_for_you.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "offer")
public class Offer {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "offer_id")
  private Long id;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "emp_id", nullable = false)
  private Employer employer;

  @OneToMany(mappedBy = "offer", cascade = CascadeType.ALL)
  private List<Technology> technologies;

  private String title;
  private String location;
  private String description;
  private ExperienceLevel experienceLevel;

  public Offer(String title, String location, String description, ExperienceLevel experienceLevel) {
    this.title = title;
    this.location = location;
    this.description = description;
    this.experienceLevel = experienceLevel;
  }
}
