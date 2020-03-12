package com.krdkta.internship_for_you.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class HomeController {

  @PostMapping(path = "/login/", consumes = "application/json")
  public boolean isAuthenticated() {
    return false;
  }
}
