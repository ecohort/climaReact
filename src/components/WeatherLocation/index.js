import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';

import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';

import './styles.css';

const api_key = "907f26a9cd168af951a1c98ea6d6c3d6";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {
    constructor({city}) {
        super();
        this.state = {
            city,
            data: null
        };
    }
    
    handleUpdateClick = () => {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`
        fetch (api_weather)
        .then( data => {
            return data.json();
        })
        .then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data});
        });
    }

    componentWillMount() {
        this.handleUpdateClick(); 
    }

    render = () => {
        const {onWeatherLocationClick} = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data} /> : <CircularProgress /> }
            </div>
        );
    };
};

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;