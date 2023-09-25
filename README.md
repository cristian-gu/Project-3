# Project-3
Project 3 - 

Thesis: Home prices over the past three years have increased astronomically than in the last decade.

What is the reason for the recent surge in prices?

Have home prices have risen astronomically over the recent years due to increased buying opportunities from the banking industry/investment firms?

    Root causes (datasets to observe):
    - banking collateral specialized in home loans
    - REITs
    - homeowner default/turnover rate (foreclosure = potential bank ownership)
        - could also analyze rate of bank ownership/buy-up of foreclosed houses
    - property tax (what is the rate of change is it also drastic?)

Introduction:
We will be looking at real estate prices
metrics that can be analyzed for every house:
- sqft
- acres/lot size
- total rooms
- total bathrooms
- pool
- garages

compare houses aggregating data between:
- counties
- states (population contained in the U.S. only)
If subjegating group to one county/state/district can closely monitor trends. every data set should have a field for area

Visualizations to include:
1. can plot the rise in banking collateral between different banks over the years
    - can be achieved with either a bar chart or line plot
    - bar chart (x-ticks: bank, y-values:percentage, dropdown menu: range of years)
    - line plot: (x-values: year, y-values: percentage, select menu that highlights each line plot which can be color coded per bank)
    Data required: bank info, year, percentage of bank ownership/collateral (Need to search for)

2. Rise in REITs and the make up of the entire stock market
    - can be achieved with a pie chart
    - select menu displaying the years
    Data required: year, REIT stock ownership, composition of REITs compared to count of other ETFs, composiition of REIT in spy holdings, list of REITs founded per year (Need to search for)
    (complete:
    Founded - https://einvestingforbeginners.com/historical-sp-500-industry-weights-20-years/ )

    

3. Homeowner default rate
    - can also be displayed in conjunction with the display of banking collateral
        - using a lineplot can look at the increase in foreclosure rates
        - line plot: (x-values: year, y-values: percentage)
        - select menu can be used for 1 and 3
        Data required: (using Privy, easier probably to search for) count of foreclosures in a given year, foreclosure per area (complete: "CountyMortgagesPercent-30-89DaysLate-thru-2022-12.csv",
        Founded - https://www.consumerfinance.gov/data-research/mortgage-performance-trends/mortgages-30-89-days-delinquent/ )

4. use leaflet to show size of sqft per house per neighborhood (for sale) through  the radius of the circle, color to distinguish between price of homes for sale
    - Houses through privy show both historical data and current home prices
    - not every house will be sold in the same year, but can group results between specific time frames (the group results will be categorized from [2010 - 2019] and [2020 - 2023])
    Data required: can obtain metrics through Privy    
