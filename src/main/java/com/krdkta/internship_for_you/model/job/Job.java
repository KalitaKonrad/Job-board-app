package com.krdkta.internship_for_you.model.job;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.krdkta.internship_for_you.model.company.Company;
import com.krdkta.internship_for_you.model.user.Skill;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "job")
public class Job {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "job_id")
  private Long id;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "company_id", nullable = false)
  @EqualsAndHashCode.Exclude
  private Company company;

  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinTable(
      name = "jobs_skills",
      joinColumns = {@JoinColumn(name = "job_id", nullable = false, updatable = false)},
      inverseJoinColumns = {@JoinColumn(name = "skill_id", nullable = false, updatable = false)})
  @EqualsAndHashCode.Exclude
  private Set<Skill> skills = new HashSet<>();

  @OneToOne(
      fetch = FetchType.LAZY,
      mappedBy = "job",
      cascade = CascadeType.ALL,
      orphanRemoval = true)
  private JobLocation jobLocation;

  @Column(name = "position")
  private String position;

  @Column(name = "location")
  private String location;

  @Column(name = "description")
  private String description;

  @Enumerated(EnumType.STRING)
  @Column(name = "experience_level")
  private ExperienceLevel experienceLevel;

  @Column(name = "minimum_salary")
  private int minimumSalary;

  @Column(name = "maximum_salary")
  private int maximumSalary;

  @Column(name = "created_date")
  private Date createdDate;

  public Job(
      String position, String location, String description, ExperienceLevel experienceLevel) {
    this.position = position;
    this.location = location;
    this.description = description;
    this.experienceLevel = experienceLevel;
  }
}
