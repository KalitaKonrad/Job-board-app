package com.krdkta.internship_for_you.model.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class ApplicationUser {

  @Column(name = "user_id")
  private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

  @Column(name = "email", nullable = false)
  private String email;

  @Column(name = "username", nullable = false)
  private String username;

  @Column(name = "password", nullable = false)
  private String password;

  @Enumerated(EnumType.STRING)
  @Column(name = "gender")
  private Gender gender = Gender.NONE;

  @Column(name = "firstname", nullable = false)
  private String firstname;

  @Column(name = "lastname", nullable = false)
  private String lastname;

  @Column(name = "phone")
  private String phone;

  @Enumerated(EnumType.STRING)
  @Column(name = "usertype")
  private UserType usertype = UserType.EMPLOYEE;

  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
  @JoinTable(
      name = "users_skills",
      joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
      inverseJoinColumns = {@JoinColumn(name = "skill_id", nullable = false, updatable = false)})
  private Set<Skill> skills = new HashSet<>();

  @OneToOne(
      fetch = FetchType.LAZY,
      cascade = CascadeType.ALL,
      mappedBy = "applicationUser",
      orphanRemoval = true)
  private Education education;

  @OneToMany(
      fetch = FetchType.LAZY,
      cascade = CascadeType.ALL,
      orphanRemoval = true,
      mappedBy = "applicationUser")
  private List<Experience> experience = new ArrayList<>();
}
