package com.krdkta.internship_for_you.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {

  @CrossOrigin(value = "http://localhost:3000")
  @PostMapping(path = "/login/", consumes = "application/json")
  public boolean isAuthenticated() {
    return false;
  }
}
