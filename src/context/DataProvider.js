import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataCountry, setDataCountry] = useState([]);
  const [dataGlobal,setDataGlobal] = useState([])

  const globalUrl = "https://covid19.mathdro.id/api";
  const confirmedUrl = "https://covid19.mathdro.id/api/countries/";
  const [notFound,setNotFound] = useState(false)

  useEffect(() => {
    const getGlobalData= async()=>{
      try{
        const resp = await axios.get(globalUrl);
        const data = resp.data;
        setDataGlobal(data);
      }catch(e){
        throw new Error(e)
      }
    }
    getGlobalData()
  }, [])

  const getDataByCountry = async (country) => {
    try {
        const resp = await axios.get(confirmedUrl);
        const data = resp.data.countries;
        const mapData = data.find(resp=>resp.name === country)
        if(mapData!== undefined){
            setNotFound(false)
            const fetchCountry = await axios.get(confirmedUrl+mapData.name);
            const data = fetchCountry.data
            setDataCountry(data)
        }else{
          setNotFound(true)
          setDataCountry([])
        }
    } catch (e) {
        throw new Error(e)
    }
  };
  return (
    <DataContext.Provider value={{ getDataByCountry,dataCountry,notFound,dataGlobal }}>
      {children}
    </DataContext.Provider>
  );
};
