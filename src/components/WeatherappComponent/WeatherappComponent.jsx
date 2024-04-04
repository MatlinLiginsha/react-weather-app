import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './WeatherappComponent.css'
import { useQuery } from 'react-query'
import WeatherComponentDetails from '../WeatherComponentDetails/WeatherComponentDetails'
const WeatherappComponent = () => {
    const API_KEY = '3af9f3ffe456466090294337241103'
    const [cityName, setcityName] = useState('')
    // const [weatherData , setweatherData] = useState({})
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    // useEffect( () => {
    //     fetchWeatherComponent()
    //     console.log("useeffect called")
    // },[cityName , latitude , longitude])

    const fetchWeatherComponent = async () => {
       
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`)
        return (response.data)
    }
    const { data:initialData,isLoading:isInitialLoading, isError :isInitialError} = useQuery(['weather-detail', longitude, latitude], fetchWeatherComponent)
 
    // const fetchWeatherComponent = async() => {
    //     navigator.geolocation.getCurrentPosition(async (position) => {
    //         setLatitude(position.coords.latitude);
    //         setLongitude(position.coords.longitude);

    //         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`);
    //         setweatherData(response.data);
    //     });
    // }

    const handleCityName = (event) => {
        setcityName(event.target.value)
    }

    const city = async () => {
        if(cityName){
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`)
        console.log(response.data)
        return (response.data)
        }
    }

    const{data:cityData,isPreviousData,refetch:refetchgetCityWeather,isLoading:isCityLoading,isError:isCityError}=useQuery(['weather-details'],city)
    const getCityWeather =  () => {
        refetchgetCityWeather()
        } 
    if (isInitialLoading||isCityLoading) {
        return <div>Loading...</div>
    }
    if (isInitialError||isCityError) {
        return <div>Error...</div>
    }
  


    return (
        <section className='container'>
            <div className='inputs'>
                <input
                    type='text'
                    id='cityNameText'
                    placeholder='Enter your city name here'
                    value={cityName}
                    onChange={handleCityName}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            getCityWeather();
                        }
                    }}
                />
                <button onClick={getCityWeather}>Search</button>
            </div>
           {!cityData&&initialData&&<WeatherComponentDetails weatherData={initialData}/>}
           {cityData&&<WeatherComponentDetails weatherData={cityData}/>}

        </section>
        
    )
}

export default WeatherappComponent