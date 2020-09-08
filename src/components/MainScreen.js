import React from 'react'
import { MapScreen } from './Map/MapScreen'
import { ChartScreen } from './Chart/ChartScreen'
import image from '../images/covid_logo.png'
import { Card } from './Card/Card'
import { DataProvider } from '../context/DataProvider'
import { GlobalData } from './GlobalData'

export const MainScreen = () => {
    return (
        <DataProvider>
            <div className="header_container">
                <img src={image} alt="covid_img"  className="mt-5 mb-3 logo_img"/>
            </div>
            <GlobalData/>
            <MapScreen />
            <Card/>
            <ChartScreen/>
        </DataProvider>
    )
}
