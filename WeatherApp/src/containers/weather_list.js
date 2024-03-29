import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => (weather.main.temp * 9/5) - 459.67);
        const press = cityData.list.map(weather => weather.main.pressure);
        const humid = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
   
        return (
           <tr key={name}>
               <td><GoogleMap lat={lat} lon={lon}/></td>
               <td> <Chart data={temps} color="blue" units="°F"/> </td>
               <td> <Chart data={press} color="red" units="hPa"/> </td>
               <td> <Chart data={humid} color="green" units="%"/> </td>
           </tr>
        );
    }
    
    
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                   
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }

                </tbody>
            </table>
        );
    }
}


function mapStateToProps({weather}){ //{weather} === state.weather
    return { weather } // === { weather: weather }
}


export default connect(mapStateToProps)(WeatherList);