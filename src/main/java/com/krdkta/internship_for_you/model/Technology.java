package com.krdkta.internship_for_you.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Technology {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  private Offer offer;

  private String name;
}
