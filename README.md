# Czechibank API Test Automation

[![Czechibank Registration Test](https://github.com/LuGue-coder/new_user_registration/actions/workflows/czechibank.yml/badge.svg)](https://github.com/LuGue-coder/new_user_registration/actions/workflows/czechibank.yml)

## About
Automated API testing pipeline for Czechibank user registration, built with Postman and GitHub Actions.

## Tech Stack
- **Postman** – API test collection with pre-request scripts and assertions
- **Newman** – CLI runner for Postman collections
- **GitHub Actions** – CI/CD pipeline
- **PostgreSQL** – database verification

## What it does
1. Generates random user data (name, email, password)
2. Sends registration request to Czechibank API
3. Validates response (status code, email, role, banned status)
4. Verifies the registered user exists in the database

## Automation
- Runs automatically every day at 7:00 UTC
- Can be triggered manually via GitHub Actions

## Skills demonstrated
- API testing
- Test automation
- CI/CD pipelines
- Database verification
- Environment variables and secrets management
