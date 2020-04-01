package com.krdkta.internship_for_you.controller;

import com.krdkta.internship_for_you.model.job.Job;
import com.krdkta.internship_for_you.model.user.Skill;
import com.krdkta.internship_for_you.service.CompanyService;
import com.krdkta.internship_for_you.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {

  private JobService jobService;
  private CompanyService companyService;

  @Autowired
  public JobController(JobService jobService, CompanyService companyService) {
    this.jobService = jobService;
    this.companyService = companyService;
  }

  @GetMapping(value = "jobs/{id}")
  public Job getEmployer(@PathVariable long id) {
    return jobService.getJobById(id);
  }

  @GetMapping(value = "jobs")
  public List<Job> getNextJobsWithGivenOffset(
      @RequestParam("page") Optional<Integer> page,
      @RequestParam("size") Optional<Integer> size,
      @RequestParam("keywords") Optional<String> keywords,
      @RequestParam("location") Optional<String> location) {
    return jobService.findJobsWithConstraints(page, size, keywords, location);
  }

  @PostMapping(value = "jobs", consumes = "application/json")
  public Job addJob(@RequestBody Job job) {
    job.setSkills(
        job.getSkills().stream()
            .map(skill -> new Skill(skill.getName(), job))
            .collect(Collectors.toSet()));
    //    job.setCompany(employerService.getEmployerById(1L)); // TODO: implement dynamic
    jobService.save(job);
    return job;
  }

  @PutMapping(value = "jobs/{id}")
  public void updateJobById(Job job, @PathVariable Long id) {
    jobService.updateJobById(job, id);
  }
}
