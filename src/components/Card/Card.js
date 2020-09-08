import React, { useContext } from "react";
import moment from "moment";
import CountUp from 'react-countup'
import { DataContext } from "../../context/DataProvider";

export const Card = () => {
  const { dataCountry, notFound } = useContext(DataContext);

  const lastUpdate = moment(dataCountry.lastUpdate).format("LL");

  const alertMsg ={
    display:'flex',
    justifyContent:'center'
  }
  return (
    <>
      {dataCountry.length !== 0 && (
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card border-info  mb-3">
                <div className="card-header">
                  Infected
                  <i className="fas fa-bacteria float-right text-info fa-2x"></i>
                </div>
                <div className="card-body  ">
                  <h5 className="card-title">
                  <CountUp start={0} end={dataCountry.confirmed.value} separator="," duration={2}/>
                  </h5>
                  <p className="card-text text-info">
                    Number of active cases from COVID-19.
                  </p>
                  <small className="card-text color_update">
                    Last update: {lastUpdate}
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card border-success  mb-3">
                <div className="card-header">
                  Recovered
                  <i className="fas fa-medkit float-right text-success fa-2x"></i>
                </div>
                <div className="card-body ">
                  <h5 className="card-title">
                    <CountUp start={0} end={dataCountry.recovered.value} separator="," duration={2}/>
                    </h5>
                  <p className="card-text text-success">
                    Number of recoveries from COVID-19.
                  </p>
                  <small className="card-text color_update">
                    Last update: {lastUpdate}
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card border-danger mb-3">
                <div className="card-header">
                  Deaths
                  <i className="fas fa-skull-crossbones text-danger fa-2x float-right"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                  <CountUp start={0} end={dataCountry.deaths.value} separator="," duration={2}/>
                    
                    </h5>
                  <p className="card-text text-danger">
                    Number of deaths caused by COVID-19.
                  </p>
                  <small className="card-text color_update">
                    Last update: {lastUpdate}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {notFound && (
        <div style={alertMsg}>
          <div className="alert alert-danger alrt_custom mb-5 mt-3" role="alert">
            Ups! We did not find data for this country. &nbsp;
            <i className="far fa-frown"></i>
          </div>
        </div>
      )}
    </>
  );
};
