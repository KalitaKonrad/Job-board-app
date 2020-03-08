package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }
}
