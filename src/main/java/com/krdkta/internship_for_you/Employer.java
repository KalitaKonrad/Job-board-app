package com.krdkta.internship_for_you;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Employer {
  private @Id @GeneratedValue Long id;
  private String companyName;
  private String companyLocation;
  private String companyDescription;
}
