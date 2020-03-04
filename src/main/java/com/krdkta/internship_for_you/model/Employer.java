package com.krdkta.internship_for_you.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Employer {
  private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
  private String name;
  private String location;
  private String description;

  public Employer(String name, String location, String description) {
    this.name = name;
    this.location = location;
    this.description = description;
  }
}
