package com.krdkta.internship_for_you.model;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
// @Table(name = "employer")
public class Employer {
  private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
  private String name;
  private String location;
  private String description;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List<Offer> offerList;

  public Employer() {}

  public Employer(String name, String location, String description) {
    this.name = name;
    this.location = location;
    this.description = description;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Override
  public String toString() {
    return "Employer{"
        + "id="
        + id
        + ", name='"
        + name
        + '\''
        + ", location='"
        + location
        + '\''
        + ", description='"
        + description
        + '\''
        + '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Employer employer = (Employer) o;
    return Objects.equals(id, employer.id)
        && Objects.equals(name, employer.name)
        && Objects.equals(location, employer.location)
        && Objects.equals(description, employer.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, location, description);
  }
}
