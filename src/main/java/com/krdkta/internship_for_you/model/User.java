package com.krdkta.internship_for_you.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class User {

  private enum USERTYPE {
    ADMIN,
    USER
  }

  private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
  private String username;
  private String password;
  private USERTYPE type;

  public User(String username, String password, USERTYPE type) {
    this.username = username;
    this.password = password;
    this.type = type;
  }
}
