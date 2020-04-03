package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.user.ApplicationUser;
import com.krdkta.internship_for_you.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
  private UserRepository userRepository;
  private BCryptPasswordEncoder bCryptPasswordEncoder;

  @Autowired
  public UserDetailsServiceImpl(
      UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
    this.userRepository = userRepository;
    this.bCryptPasswordEncoder = bCryptPasswordEncoder;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    ApplicationUser applicationUser = userRepository.findApplicationUserByUsername(username);
    if (applicationUser == null) {
      throw new UsernameNotFoundException(username);
    }
    return new User(
        applicationUser.getUsername(), applicationUser.getPassword(), Collections.emptyList());
  }

  public ApplicationUser findUserById(Long id) {
    return userRepository.findById(id).orElse(null);
  }

  public ApplicationUser findUserByEmailOrUsername(String email, String username) {
    return userRepository.findApplicationUserByEmailOrUsername(email, username);
  }

  public ApplicationUser findUserByUsername(String username) {
    return userRepository.findApplicationUserByUsername(username);
  }

  public ApplicationUser findUserByEmail(String email) {
    return userRepository.findApplicationUserByEmail(email);
  }

  public void save(ApplicationUser applicationUser) {
    if (userRepository.findApplicationUserByUsername(applicationUser.getUsername()) == null) {
      applicationUser.setPassword(bCryptPasswordEncoder.encode(applicationUser.getPassword()));
      userRepository.save(applicationUser);
    }
  }

  public void deleteUserById(Long id) {
    userRepository.deleteById(id);
  }

  public void deleteUser(ApplicationUser applicationUser) {
    userRepository.delete(applicationUser);
  }

  public List<ApplicationUser> findAll() {
    return (List<ApplicationUser>) userRepository.findAll();
  }
}
