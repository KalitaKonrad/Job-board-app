package com.krdkta.internship_for_you.model.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "education")
public class Education {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "education_id")
  private Long id;

  @Column(name = "degree_name")
  private String degreeName;

  @Column(name = "major")
  private String major;

  @Column(name = "university_name")
  private String universityName;

  @Column(name = "start_date")
  private Date startDate;

  @Column(name = "graduation_date")
  private Date graduationDate;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User user;
}
