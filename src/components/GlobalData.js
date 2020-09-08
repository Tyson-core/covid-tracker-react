import React, { useContext } from "react";
import CountUp from 'react-countup'
import moment from 'moment';
import { DataContext } from "../context/DataProvider";

export const GlobalData = () => {
  const { dataGlobal } = useContext(DataContext);
  
  const lastUpdate = moment(dataGlobal.lastUpdate).format("LL");
  return (
    dataGlobal.length !== 0 && (
      <div className="global_data mt-3">
          <h5>Global Information</h5>
        <div className="global_badges">
            <span className="badge badge-pill badge-info">Infected: 
            <CountUp start={0} end={dataGlobal.confirmed.value} separator="," duration={2}/>
            </span>
            <span className="badge badge-pill badge-success">Recovered:
            <CountUp start={0} end={dataGlobal.recovered.value} separator="," duration={2}/>
             </span>
            <span className="badge badge-pill badge-danger">Deaths: 
            <CountUp start={0} end={dataGlobal.deaths.value} separator="," duration={2}/>
            </span>
        </div>
        <small>Last Update: {lastUpdate}</small>
      </div>
    )
  );
};
