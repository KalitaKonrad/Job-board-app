package com.krdkta.internship_for_you.model;

public enum ExperienceLevel {
  INTERN,
  JUNIOR,
  MID,
  SENIOR;

  public ExperienceLevel getEnumBasedOnString(String enumString) {
    switch (enumString) {
      case "INTERN":
        return ExperienceLevel.INTERN;
      case "MID":
        return ExperienceLevel.MID;
      case "SENIOR":
        return ExperienceLevel.SENIOR;
      default:
        return ExperienceLevel.JUNIOR;
    }
  }
}
