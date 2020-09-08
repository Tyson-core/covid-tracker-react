import React, { useEffect, useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { DataContext } from "../../context/DataProvider";

export const ChartScreen = () => {
  const [chartData, setChartData] = useState({});
  const { dataCountry } = useContext(DataContext);

  let confirmedValue 
  let deathsValue
  let recoveredValue

  if(dataCountry.length !==0){
        confirmedValue = dataCountry.confirmed.value
        deathsValue = dataCountry.deaths.value
        recoveredValue = dataCountry.recovered.value
  }

  const chartByCountry = () => {
    setChartData({
      labels: ['Confirmed','Recovered','Deaths'],
      datasets: [
        {
          label: 'Information',
          data:[confirmedValue,recoveredValue,deathsValue] ,
          backgroundColor: [
            "rgba(0, 128, 255,0.336)",
            "rgba(46, 236, 93,0.336)",
            "rgba(236, 46, 46,0.336)"
          ],
          hoverBackgroundColor: [
            "rgba(0, 128, 255,0.536)",
            "rgba(46, 236, 93,0.536)",
            "rgba(236, 46, 46,0.536)"
          ],
        }],
    });
  };
  useEffect(() => {
    chartByCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataCountry]);

  const chartOptions ={
    responsive:true,
    title: {
      display: false,
    },
    legend:{
        display:false
    }
  }

  const styleChart ={
      display:'flex',
      justifyContent:'center'
  }

  return dataCountry.length !== 0&&(
    <div style={styleChart}>
      <div className="chart_container mb-5">
        <Bar data={chartData} options={chartOptions}/>
      </div>
    </div>
  );
};
