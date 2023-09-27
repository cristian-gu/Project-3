### Dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, Column, Integer, String, Float 
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import pandas as pd
import numpy as np
from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2
from db_url import url

engine = create_engine(url)
Base = declarative_base()

### Database Classes
class ETF(Base):
    __tablename__ = "etf_weighted"

    id = Column(Integer, primary_key=True)
    year = Column(Integer, nullable=False)
    sector = Column(String, nullable=False)
    weight = Column(Float)


class Mort(Base):
    __tablename__ = "mortgage_days_late"

    id = Column(Integer, primary_key=True)
    regiontype = Column(String, nullable=False)
    state = Column(String)
    name = Column(String)
    percentage_late = Column(Float, nullable=False)
    year = Column(Integer) 

Base.metadata.create_all(engine)
session = Session(engine)

### Flask Routes
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/")
def welcome():
    return (
        f"Real Estate/ETF API<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/weighted_SP<br/>"
        f"/api/v1.0/mortgage<br/>"
    )

@app.route("/api/v1.0/weighted_SP")
def weighted_SP():
    weight_query = session.query(ETF).order_by(ETF.year, ETF.sector)

    session.close()
    ################

    etf = {}
    for i in weight_query:
        etf.setdefault(str(i.year), {})
        etf[str(i.year)].setdefault(i.sector, i.weight) 

    etf_weighted = {"etf_weighted": etf}

    return jsonify(etf_weighted)

@app.route("/api/v1.0/mortgage")
def mortgage():
    national_query = session.query(Mort)\
        .filter(Mort.regiontype == "National").order_by(Mort.year)

    state_query = session.query(Mort)\
        .filter(Mort.regiontype == "County").order_by(Mort.state, Mort.name, Mort.year)
    
    session.close()
    ###############

    national_dict = {}
    years = [i.year for i in national_query]
    percent_late = [i.percentage_late for i in national_query]
    national_dict[national_query[0].name] = {"year": years, "percent": percent_late}

    state_dict = {}
    for i in state_query:
        state_dict.setdefault(i.state, {})
        state_dict[i.state].setdefault(i.name, [])
        state_dict[i.state][i.name].append(i.percentage_late)
    
    mortgage = {"years": years, "national": national_dict, "state": state_dict}

    return mortgage

if __name__ == "__main__":
    (app.run(debug=True))