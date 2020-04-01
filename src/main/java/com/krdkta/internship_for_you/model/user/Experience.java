package com.krdkta.internship_for_you.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "experience")
public class Experience {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "experience_id")
  private Long id;

  @Column(name = "is_current_job")
  private boolean isCurrentJob;

  @Column(name = "start_date")
  private Date startDate;

  @Column(name = "end_date")
  private Date endDate;

  @Column(name = "job_title")
  private String jobTitle;

  @Column(name = "company_name", length = 100)
  private String companyName;

  @Column(name = "job_location_city", length = 50)
  private String jobLocationCity;

  @Column(name = "job_location_state", length = 50)
  private String jobLocationState;

  @Column(name = "job_location_country", length = 50)
  private String jobLocationCountry;

  @Column(name = "description", length = 1000)
  private String description;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User user;
}
