package com.krdkta.internship_for_you.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Role {

  @Id private Long id;

  @OneToOne(fetch = FetchType.LAZY)
  @MapsId
  private UserEntity user_entity;

  private UserType usertype;
}
