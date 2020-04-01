package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.user.User;
import com.krdkta.internship_for_you.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
  private UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public User findUserById(Long id) {
    return userRepository.findById(id).orElse(null);
  }

  public User findUserByEmailOrUsername(String email, String username) {
    return userRepository.findUserByEmailOrUsername(email, username);
  }

  public User findUserByEmail(String email) {
    return userRepository.findUserByEmail(email);
  }

  public void addUser(User user) {
    userRepository.save(user);
  }

  public void deleteUserById(Long id) {
    userRepository.deleteById(id);
  }

  public void deleteUser(User user) {
    userRepository.delete(user);
  }

  public List<User> findAll() {
    return (List<User>) userRepository.findAll();
  }
}
