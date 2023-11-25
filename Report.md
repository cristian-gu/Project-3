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

Finally, using the flask user-defined endpoints, we can declare the array objects in the javascript application to be loaded into our custom data visulaization charts. Some major things learned, when loading in data mainly only concerned our flask api development and javascript application architecture. At the API stage, when developing classes for each data source, each table needs a unique identifier to help with aggregating and selecting with SQLAlchemy. At the website development stage, structuring d3 datapromises worked more fluently by intializing each dataset seperately as opposed to concurrently. Having each stage work independent of each other removed the issue of the second chart not populating in the website. This will conlude the extract, transform, and loading process of our datasources. 

_Application_

Creating the Javascript application would require the use of d3.js language. Following, using property selection, we can push a set of chart layouts for each selection therefore displaying all the graphs for the distinct datasets.

To start the website application, sequence is as follows:

- Run "app.py"
    - The "url" variable will need to be replaced with the Client's own local host database key
- Open "index.html"

_Analysis_

Looking at avergage home price data, since 2010 that price was $275,000 compared to 2022 where that home price has reached 
$553,000. In order to assess the observation as to why the average home price has doubled over the past decade, a couple factors that will be analyzed will be the composition of the real estate sector in the S&P 500 and mortgage 30-90 days late. Although not a complete answer or reason as to why the event is occurring, it is more direct lens as to how it may enable our economy to follow this direction. Real estate sector composition was chosen to show the market's influence on valuing real estate opportunities. 30-90 days late for mortgage payments would be used as a metric to visualize conusmer confidence and optimisim in the economic conditions. 

When looking at the growth of REIT composition in the S&P 500, we see that it grows during the last decade. More specifically, from 2010-2013, the composition stays stagnant at around 2% then increasing a percentage point in 2014. The scale of this magnitude we see that the S&P 500 also grows substantially in 2013 with an annual peak change of 29% and continuously grows until slowing down in 2020 presenting a rate of 16.26%. Based on an article by Holden Walter-Warner, in the past decade showed that regional banks invested in real estate opportunities favorably. These investors include partly mortgage REITs which are also backed by the banks. So as a result, by investing in Real Estate opportunities, this showed to have some impact on the growth of the stock market as well.

![image](https://github.com/cristian-gu/Project-3/assets/134232784/7ca08435-7272-45a3-8736-31da61b2bd0e)
Figure 1. Shows the Real Estate sector to reach composition levels of 2% in 2011

![image](https://github.com/cristian-gu/Project-3/assets/134232784/28638136-46ca-4a2b-b6b1-b1495cb2ac36)
Figure 2. Shows the Real Estate sector to increase percentage rate of 3% in 2014

When analyzing rates of 30-90 days late mortgage payments, we see that in all counties show a downward trend of late payments. Firstly, what mortage late payments imply includes credit risk, loan default risk, accumulation of interest and late fees, and foreclosure risk. A downward trend in mortage days late could provide evidence of a recovering and prospering economy as consumer confidence increasing. Some byproducts of this however could lead to borrowers seeking further opportunity as confidence grows.

![image](https://github.com/cristian-gu/Project-3/assets/134232784/6f9a55f8-f808-48b9-a5e9-7d547ac90242)
Figure 3. Shows the rates of mortgage days late in CA yoy













