package com.krdkta.internship_for_you.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "CITIES")
@Data
public class Offer {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String location;
  private String name;

  @OneToMany private List<Technology> technologies;
}
