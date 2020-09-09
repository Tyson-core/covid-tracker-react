import React, { useState, useContext, useEffect, useRef } from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import world from "./world.json";
import { DataContext } from "../../context/DataProvider";

export const MapScreen = () => {
  const [hovered, setHovered] = useState("None");
  // const [clicked, setClicked] = useState("None");
  const [focused, setFocused] = useState("None");
  const { getDataByCountry } = useContext(DataContext);


  const textCountry = useRef()
  const countryName = useRef()


  useEffect(() => {

  }, []);

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: () => setHovered("None"),
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onClick: () =>{
      // setClicked(target.attributes.name.value)
      if (focused === "None") {
        return;
      }
      if (focused === "United States") {
        getDataByCountry("US");
      } else {
        getDataByCountry(focused);
      }
      window.scrollTo(0, countryName.current.offsetTop) 

    },
  };

  const styleMap = {
    display: "flex",
    justifyContent: "center",
  };

  const mouseMove =(e)=>{
    if(hovered==="None"){
      return
    }
    let x = e.pageX;
    let y = e.pageY;
    textCountry.current.style.left=x+"px"
    textCountry.current.style.top=y+25+"px"
  }

  
  return (
    <div>
      {
        hovered!=="None"&&<p className="hover_country"  ref={textCountry}>{hovered}</p>
      }
      <div style={styleMap}>
        <div className="map mt-5" onMouseOverCapture={mouseMove}>
          <VectorMap
            {...world}
            className="vector_map"
            layerProps={layerProps}
          />
        </div>
      </div>
      <div className="mt-5 text-center mb-4" >
        {focused !== "None" && (
          <h3 ref={countryName}>
            Country: <small>{focused}</small>
          </h3>
        )}
      </div>
    </div>
  );
};
