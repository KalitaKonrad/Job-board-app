package com.krdkta.internship_for_you.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "technology")
public class Technology {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "offer_id")
  private Offer offer;

  @Column(name = "name")
  private String name;

  public Technology(String name) {
    this.name = name;
  }

  public Technology(String name, Offer offer) {
    this.name = name;
    this.offer = offer;
  }
}
