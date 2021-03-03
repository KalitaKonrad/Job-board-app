package com.krdkta.internship_for_you.model.job;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "job_location")
public class JobLocation {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "job_location_id")
  private Long id;

  @Column(name = "street", length = 100)
  private String street;

  @Column(name = "city", length = 50)
  private String city;

  @Column(name = "state", length = 50)
  private String state;

  @Column(name = "country", length = 50)
  private String country;

  @Column(name = "zip", length = 50)
  private String zip;

  public JobLocation(String city) {
    this.city = city;
  }
}
