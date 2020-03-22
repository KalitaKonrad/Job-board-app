package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
  User findUserByEmailOrUsername(String email, String username);

  User findUserByEmail(String email);
}
