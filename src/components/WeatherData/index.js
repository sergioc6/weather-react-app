import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    SUN,
    WINDY,
} from '../../../constants/weathers'

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={CLOUDY}>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;