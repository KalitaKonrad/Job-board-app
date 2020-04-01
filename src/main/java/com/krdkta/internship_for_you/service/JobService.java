package com.krdkta.internship_for_you.service;

import com.krdkta.internship_for_you.model.job.Job;
import com.krdkta.internship_for_you.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JobService {

  private JobRepository jobRepostiory;

  @Autowired
  public JobService(JobRepository jobRepository) {
    this.jobRepostiory = jobRepository;
  }

  public List<Job> findAll() {
    return jobRepostiory.findAll();
  }

  public List<Job> findAll(String companyName) {
    List<Job> allJobs = jobRepostiory.findAll();
    return allJobs.stream()
        .filter(
            offer -> offer.getCompany().getName().toLowerCase().contains(companyName.toLowerCase()))
        .collect(Collectors.toList());
  }

  public void save(Job job) {
    jobRepostiory.save(job);
  }

  public Job getJobById(Long id) {
    return jobRepostiory.findById(id).orElse(null);
  }

  public void updateJobById(Job job, Long id) {
    jobRepostiory
        .findById(id)
        .ifPresent(
            o -> {
              this.save(job);
            });
  }

  public List<Job> findJobsWithConstraints(
      Optional<Integer> page,
      Optional<Integer> size,
      Optional<String> keywords,
      Optional<String> location) {

    return jobRepostiory
        .findByKeywordsOrLocation(
            keywords.orElse("_"),
            location.orElse("_"),
            PageRequest.of(page.orElse(0), size.orElse(20)))
        .toList();
  }
}
