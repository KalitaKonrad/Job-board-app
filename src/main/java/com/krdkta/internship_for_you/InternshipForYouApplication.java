package com.krdkta.internship_for_you;

import com.krdkta.internship_for_you.model.company.Company;
import com.krdkta.internship_for_you.model.job.ExperienceLevel;
import com.krdkta.internship_for_you.model.job.Job;
import com.krdkta.internship_for_you.model.job.JobLocation;
import com.krdkta.internship_for_you.model.user.Skill;
import com.krdkta.internship_for_you.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class InternshipForYouApplication {

  private CompanyRepository companyRepository;

  @Bean
  public BCryptPasswordEncoder bCryptPasswordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Autowired
  InternshipForYouApplication(CompanyRepository companyRepository) {
    this.companyRepository = companyRepository;
  }

  public static void main(String[] args) {
    SpringApplication.run(InternshipForYouApplication.class, args);
  }

  @Modifying
  @EventListener(ApplicationReadyEvent.class)
  public void fillDB() {
    // EXAMPLE TECHNOLOGIES

    Set<Skill> skills =
        new HashSet<>(
            Arrays.asList(new Skill("Java"), new Skill("JavaScript"), new Skill("Spring")));

    // EXAMPLE EMPLOYER
    Company company1 = new Company("Google", "US", "IT Company", 2000000);
    Company company2 = new Company("Amazon", "US", "IT Company", 300000);
    Company company3 = new Company("Facebook", "US", "IT Company", 500000);
    List<Company> companies = Arrays.asList(company1, company2, company3);

    // EXAMPLE OFFERS
    Job job1 = new Job("Software Developer", "Lorem sripsum #1", ExperienceLevel.INTERN);
    Job job2 = new Job("Software Engineer", "Lorem sripsum #2", ExperienceLevel.JUNIOR);
    Job job3 = new Job("Ruby Developer", "Lorem sripsum #3", ExperienceLevel.MID);
    Job job4 = new Job("Software Developer", "Lorem sripsum #1", ExperienceLevel.INTERN);
    Job job5 = new Job("Software Engineer", "Lorem sripsum #2", ExperienceLevel.JUNIOR);
    Job job6 = new Job("Ruby Developer", "Lorem sripsum #3", ExperienceLevel.MID);
    Job job7 = new Job("Software Engineer", "Lorem sripsum #2", ExperienceLevel.JUNIOR);
    Job job8 = new Job("Ruby Developer", "Lorem sripsum #3", ExperienceLevel.MID);
    Job job9 = new Job("Software Engineer", "Lorem sripsum #2", ExperienceLevel.JUNIOR);
    Job job10 = new Job("Ruby Developer", "Lorem sripsum #3", ExperienceLevel.MID);
    Job job11 = new Job("Software Developer", "Lorem sripsum #1", ExperienceLevel.INTERN);
    Job job12 = new Job("Software Engineer", "Lorem sripsum #2", ExperienceLevel.JUNIOR);

    List<Job> jobs =
        Arrays.asList(job1, job2, job3, job4, job5, job6, job7, job8, job9, job10, job11, job12);
    jobs.forEach(job -> job.setJobLocation(new JobLocation("Tokyo"))); // TODO: add job location
    //     to each job

    company1.setJobList(jobs);
    jobs.forEach(job -> job.setCompany(company1));
    jobs.forEach(job -> job.setSkills(skills));
    skills.forEach(skill -> skill.getJobs().add(job1));
    // LINKING UP DATA
    company1.setJobList(jobs);

    companyRepository.saveAll(companies);
  }
}
