package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.user.ApplicationUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<ApplicationUser, Long> {
  ApplicationUser findApplicationUserByEmailOrUsername(String email, String username);

  ApplicationUser findApplicationUserByUsername(String username);

  ApplicationUser findApplicationUserByEmail(String email);
}
