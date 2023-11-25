_Overview_

The Purpose of this project is to examine some of the contributing factors to inflating home prices by using data sources contining
information related to Mortgage days late payments and ETF sector weight composition of the S&P 500. Data will be provided by building
a dataase structure to hold the necessary data tables to be able to be processed through an ETL data pipeline and then transformed
into a flask powered API that can be extracted into our Javascript application to develop our interactive statistic plot charts through
a user website.

_Data Engineering_

ETL:

The two main data sources we will analyze are:

- "CountyMortgagesPercent-30-89DaysLate-thru-2022-12.csv", Reference: https://www.consumerfinance.gov/data-research/mortgage-performance-trends/mortgages-30-89-days-delinquent/

    - RegionType: Distinction between county or national type
    - State: All 50 states
    - Name: All counties from all states
    - Percentage_late: Avg percentage rate of mortgages 30 to 89 days late
- "etf_weighted.csv", Reference: https://einvestingforbeginners.com/historical-sp-500-industry-weights-20-years/

Using methods of Extract, Transform, and Loading principles, our data will be manually imported in a SQL Database connected through 
the client machine in PostgreSQL. Using the correct variable nomenclature for all fields


