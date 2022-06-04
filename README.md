# Automated UI Test Suite to Calculate Holiday Entitlement

# Project Description:
Automated UI e2e test using cypress test framework together with cucumber implementation to calculate holiday entitlement.

1. URL: https://www.gov.uk/calculate-your-holiday-entitlement
2. Framework : Cypress
3. BDD: Cypress-Cucumber-Preprocessor

The scenarios in the test suite include the statutory holidays entitlement calculation based on days worked per week

1.  For a full leave year,
2.  For starting part way through a leave year,
3.  For leaving part way through a leave year,
4.  For starting and leaving part way through a leave year, and
5.  Display of error message for invalid days worked per week (Negative testing)

While I acknowledge that there are still more scenarios to cover, aiming to cover other scenarios does not seem feasible due to time constraint
and as stated in the requirement for the tasks, clear demonstration and ability to write a very good subset of tests would suffice over
writing thousands of tests.

# Installation
HTTPS:
https://github.com/olaajala11/holiday-entitlement-calculator.git

OR

GitHub CLI:
gh repo clone olaajala11/holiday-entitlement-calculator

npm install

# Running the tests
 - npm run test:ui
 - npm run test:headless
