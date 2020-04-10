package com.krdkta.internship_for_you.security;

public class SecurityConstants {
  public static final String SECRET = "SecretKeyToGenJWTs";
  public static final String ROLE_PREFIX = "ROLE_";
  public static final String JOBS_URL = "/jobs";
  public static final String COMPANIES_URL = "/companies";
  public static final long EXPIRATION_TIME = 900_000; // 15 minutes
  public static final String TOKEN_PREFIX = "Bearer ";
  public static final String HEADER_STRING = "Authorization";
  public static final String SIGN_UP_URL = "/signup";
  public static final String USERS_URL = "/users";
}
