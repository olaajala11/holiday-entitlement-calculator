Feature: Calculate Holiday Entitlement Based on Days Worked Per Week

    Background:
        Given I am on holiday entitlement homepage
        And I proceed to calculate my holiday entitlement
        And I choose to calculate holiday entitlment based on number of days worked per week

    Scenario Outline: Display error message for invalid days worked per week
        When I choose to work out my statutory holiday for a full leave year
        And I work '<work_days_per_week>' days a week
        Then Error for invalid number of days per week should be displayed

        Examples:
            | work_days_per_week |
            |          -1        |
            |          0         |
            |          8         |
    
    Scenario Outline: Calculate statutory holidays for a full leave year based on days worked per week
        When I choose to work out my statutory holiday for a full leave year
        And I work '<work_days_per_week>' days a week
        Then My statutory holiday entitlement should be '<statutory_days>' days holiday

        Examples:
            | work_days_per_week | statutory_days |
            |           2        |      11.2      |
            |           2.5      |      14        |
            |           3        |      16.8      |
            |           5        |      28        |
            |           6        |      28        |
    
    Scenario Outline: Calculate statutory holidays for starting part way through a leave year
        When I choose to work out my statutory holiday for starting part way through a leave year
        And My employment start date is '<start_date>' 
        And My leave year start date is '<leave_year_date>'
        And I work '<work_days_per_week>' days a week
        Then My statutory holiday entitlement should be '<statutory_days>' days holiday

        Examples:
            | start_date | leave_year_date  | work_days_per_week | statutory_days |
            | 18-08-2018 |    01-08-2018    |           2        |      11.5      |
            | 25-09-2019 |    01-09-2019    |           3.5      |      20        |
            | 14-11-2021 |    05-11-2021    |           5        |      28        |
            
    Scenario Outline: Calculate statutory holidays for leaving part way through a leave year
        When I choose to work out my statutory holiday for leaving part way through a leave year
        And My employment end date is '<end_date>' 
        And My leave year start date is '<leave_year_date>'
        And I work '<work_days_per_week>' days a week
        Then My statutory holiday entitlement should be '<statutory_days>' days holiday

        Examples:
            | end_date   | leave_year_date  | work_days_per_week | statutory_days |
            | 18-08-2018 |    01-01-2018    |           1        |      3.6       |
            | 25-09-2019 |    01-02-2019    |           2.5      |      9.1       |
            | 14-11-2021 |    05-03-2021    |           5        |      19.6      |
            
    Scenario Outline: Calculate statutory holidays for starting and leaving part way through a leave year
        When I choose to work out my statutory holiday for starting and leaving part way through a leave year
        And My employment start date is '<start_date>' 
        And My employment end date is '<end_date>' 
        And I work '<work_days_per_week>' days a week
        Then My statutory holiday entitlement should be '<statutory_days>' days holiday

        Examples:
            | start_date |     end_date     | work_days_per_week | statutory_days |
            | 10-08-2018 |    27-02-2019    |           1.5      |      4.7       |
            | 01-01-2020 |    30-06-2020    |           3        |      8.4       |
            | 15-04-2021 |    05-10-2021    |           6        |      13.4      |



          


