package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.model.user.ApplicationUser;
import com.krdkta.internship_for_you.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

  private UserDetailsServiceImpl userDetailsServiceImpl;

  @Autowired
  public UserController(UserDetailsServiceImpl userDetailsServiceImpl) {
    this.userDetailsServiceImpl = userDetailsServiceImpl;
  }

  @PostMapping(value = "/signup", consumes = "application/json", produces = "application/json")
  public void saveUserToDatabase(@RequestBody ApplicationUser applicationUser) {
    userDetailsServiceImpl.save(applicationUser);
  }

  @GetMapping(value = "users")
  public List<ApplicationUser> findAll() {
    return userDetailsServiceImpl.findAll();
  }
}
