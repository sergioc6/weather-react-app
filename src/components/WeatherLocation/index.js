import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN, WINDY } from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 14,
    weatherState: WINDY,
    humidity: 35,
    wind: '500 m/s',
}

class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,
        };
    }
    
    handleUpdateClick = () => {
        console.log("actualizado");
        
        this.setState({
            city: "Mexico DC",
            data: data2,
        });
    }

    render () {
    const { city, data} = this.state;
     return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
     );
    }

}

export default WeatherLocation;