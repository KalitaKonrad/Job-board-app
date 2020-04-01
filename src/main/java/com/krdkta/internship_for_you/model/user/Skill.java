package com.krdkta.internship_for_you.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.krdkta.internship_for_you.model.job.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "skills")
public class Skill {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "skill_id")
  private Long id;

  @JsonIgnore
  @ManyToMany(fetch = FetchType.LAZY, mappedBy = "skills")
  private Set<User> users = new HashSet<>();

  @JsonIgnore
  @ManyToMany(fetch = FetchType.LAZY, mappedBy = "skills")
  private Set<Job> jobs = new HashSet<>();

  @Column(name = "name")
  private String name;

  public Skill(String name) {
    this.name = name;
  }

  public Skill(String name, Job job) {
    this.name = name;
    this.jobs.add(job);
  }
}
