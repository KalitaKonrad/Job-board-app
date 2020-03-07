package com.krdkta.internship_for_you.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
public class User_entity {

  //  private enum USERTYPE {
  //    ADMIN,
  //    USER
  //  }

  private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
  private String username;
  private String password;
  private String type;

  public User_entity(String username, String password, String type) {
    this.username = username;
    this.password = password;
    this.type = type;
  }

  @Override
  public String toString() {
    return "User_entity{"
        + "id="
        + id
        + ", username='"
        + username
        + '\''
        + ", password='"
        + password
        + '\''
        + ", type='"
        + type
        + '\''
        + '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    User_entity that = (User_entity) o;
    return Objects.equals(id, that.id)
        && Objects.equals(username, that.username)
        && Objects.equals(password, that.password)
        && Objects.equals(type, that.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, username, password, type);
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }
}
