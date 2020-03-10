package com.krdkta.internship_for_you.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Role {

  @Id private Long id;

  @OneToOne(fetch = FetchType.LAZY)
  @MapsId
  private User_entity user_entity;

  private Usertype usertype;
}
