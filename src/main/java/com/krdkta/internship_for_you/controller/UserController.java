package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.model.user.User;
import com.krdkta.internship_for_you.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping(value = "signup", consumes = "application/json", produces = "application/json")
  public ResponseEntity<HttpStatus> findUserByEmailOrUsername(@RequestBody User user) {
    if (userService.findUserByEmailOrUsername(user.getEmail(), user.getUsername()) == null) {
      userService.addUser(user);
      return new ResponseEntity<>(HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
  }

  @PostMapping(value = "login", consumes = "application/json", produces = "application/json")
  public ResponseEntity<User> verifyIfUserCanLogin(@RequestBody User user) {
    User userFetched = userService.findUserByEmail(user.getEmail());

    if (userFetched == null) {
      return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>(userFetched, HttpStatus.OK);
  }

  @GetMapping(value = "users")
  public List<User> findAll() {
    return userService.findAll();
  }
}
