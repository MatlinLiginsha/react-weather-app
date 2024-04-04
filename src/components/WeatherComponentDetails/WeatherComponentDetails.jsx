import React from 'react'

const WeatherComponentDetails = ({weatherData}) => {
  return (
  
   <React.Fragment>
    <div className='basicweather'>
        <p>{weatherData.current && weatherData.current.temp_c} <sup>o</sup>C</p>
        <p>{weatherData.location && weatherData.location.name},{weatherData.location && weatherData.location.region},{weatherData.location && weatherData.location.country}</p>
        <p><img src={weatherData.current && weatherData.current.condition.icon} />{weatherData.current && weatherData.current.condition.text}</p>
    </div>
    <div className="weather-details">
        <div className='datas'> FAHRENHEIT <p >{weatherData.current && weatherData.current.temp_f}</p></div>
        <div className='datas'>HUMIDITY<p>{weatherData.current && weatherData.current.humidity}%</p></div>
        <div className='datas'>PRESSURE<p>{weatherData.current && weatherData.current.pressure_mb} mb</p></div>
        <div className='datas'>CLOUD<p>{weatherData.current && weatherData.current.cloud}</p></div>
        <div className='datas'>FEELSLIKE_C<p>{weatherData.current && weatherData.current.feelslike_c}<sup>o</sup>C</p></div>
        <div className='datas'>FEELSLIKE_F<p>{weatherData.current && weatherData.current.feelslike_f}</p></div>
        <div className='datas'>WIND MPH<p>{weatherData.current && weatherData.current.wind_mph} mp/h</p></div>
        <div className='datas'>WIND KPH<p>{weatherData.current && weatherData.current.wind_kph} km/h</p></div>
    </div>
    </React.Fragment> 
    
  )
}

export default WeatherComponentDetails