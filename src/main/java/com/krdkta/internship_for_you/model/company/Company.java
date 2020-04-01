package com.krdkta.internship_for_you.model.company;

import com.krdkta.internship_for_you.model.job.Job;
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
@Table(name = "company")
public class Company {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "company_id")
  private Long id;

  @Column(name = "name", length = 100)
  private String name;

  @Column(name = "location")
  private String location;

  @Column(name = "size")
  private int size;

  @Column(name = "description", length = 1000)
  private String description;

  @Column(name = "website_url", length = 50)
  private String website_url;

  @OneToMany(
      fetch = FetchType.LAZY,
      mappedBy = "company",
      cascade = CascadeType.ALL,
      orphanRemoval = true)
  private List<Job> jobList = new ArrayList<>();

  public Company(String name, String location, String description, int size) {
    this.name = name;
    this.location = location;
    this.description = description;
    this.size = size;
  }
}
