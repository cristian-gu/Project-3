_Overview_

The Purpose of this project is to examine some of the contributing factors to inflating home prices by using data sources contining
information related to Mortgage days late payments and ETF sector weight composition of the S&P 500. Data will be provided by building
a dataase structure to hold the necessary data tables to be able to be processed through an ETL data pipeline and then transformed
into a flask powered API that can be extracted into our Javascript application to develop our interactive statistic plot charts through
a user website.

_ETL_

The two main data sources we will analyze are:

- "CountyMortgagesPercent-30-89DaysLate-thru-2022-12.csv", Reference: https://www.consumerfinance.gov/data-research/mortgage-performance-trends/mortgages-30-89-days-delinquent/

    - RegionType: Distinction between county or national type
    - State: All 50 states
    - Name: All counties from all states
    - Percentage_late: Avg percentage rate of mortgages 30 to 89 days late over the course of the year
    - Year: Year of percentage rate calculation
 
- "etf_weighted.csv", Reference: https://einvestingforbeginners.com/historical-sp-500-industry-weights-20-years/

    - year: year of ETF sector weight
    - sector: specified sector of focus
    - weight: percentage markup of sector from entire S&P 500

Firstly for the Mortgage-days-late data source, methods of array transposing and concating will be necessary to create a proper dataset to be extracted (This procedure will be found in the "CountyMortgagePercent_30-89DaysLate_DatatableCleaning.ipynb" file). Our data will be manually imported in a SQL Database using the PostgreSQL environment. 

Next, using python tools such as SQLAlchemy and Flask, will enable us to create a high powered api that will create a frictionless connection to the Javascript application. Flask will help export the data through a client machine localhost server to run in conjunction with the html file. In order for data to be processed through the application file (app.py) however, fields in all our datasets will need the correct datatype nomenclature to be casted. Once all fields are able to be read through, then flask will need user defined endpoints to create links to our jsonified array objects to be translated into Javascript. 

Finally, using the flask user-defined endpoints, we can declare the array objects in the javascript application to be loaded into our custom data visulaization charts. This will conlude the extract, transform, and loading process of our datasources.

_Data Visualizations_




