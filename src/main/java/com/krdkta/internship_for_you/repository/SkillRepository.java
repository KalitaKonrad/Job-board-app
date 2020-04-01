package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.user.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {}
