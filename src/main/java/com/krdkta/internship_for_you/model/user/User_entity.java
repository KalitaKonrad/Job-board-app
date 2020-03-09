package com.krdkta.internship_for_you.model.user;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
public class User_entity {

  private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
  private String username;
  private String password;

  @Enumerated(EnumType.STRING)
  private Usertype usertype;

  public User_entity(String username, String password, Usertype usertype) {
    this.username = username;
    this.password = password;
    this.usertype = usertype;
  }

  public User_entity(Long id) {
    this.id = id;
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
        + ", usertype="
        + usertype
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
        && usertype == that.usertype;
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, username, password, usertype);
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setUsertype(Usertype usertype) {
    this.usertype = usertype;
  }

  public Long getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }

  public String getPassword() {
    return password;
  }

  public Usertype getUsertype() {
    return usertype;
  }
}
