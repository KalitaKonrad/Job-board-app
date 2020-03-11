package com.krdkta.internship_for_you.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User_entity {

  private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
  private String email;
  private String password;

  @OneToOne(fetch = FetchType.LAZY)
  private Role role_id;
}
