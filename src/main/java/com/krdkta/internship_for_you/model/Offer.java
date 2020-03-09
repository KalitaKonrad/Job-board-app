package com.krdkta.internship_for_you.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Offer {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  private Employer employer;

  private String location;
  private String name;

  @OneToMany(fetch = FetchType.LAZY)
  private List<Technology> technologies;
}
