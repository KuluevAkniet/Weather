import React from 'react';
import '../weather/weather.css'

const weather = ({state}) => {

    const getTime = (times) =>{
        let time = new Date(times);
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if(hours < 10){
           hours = `0${hours}`
        }
        if(minutes < 10){
            minutes = `0${minutes}`
        }

          return `${hours}:${minutes}`
       

    } 
   
 
    return (
        <div className="info_block">
          <div className="info_title">
             <p className="info_subtitle">Time:{getTime(state.dt * 1000)}</p>
             <p className="info_subtitle">City:{state.name}</p>
             <p className="info_subtitle">Temperature:{Math.round(state.main.temp - 273.15)}°C</p>
             <p className="info_subtitle">Тype weather:{state.weather.map((el) =>{
                return el.description
          })}</p> <img  src={`http://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`} alt="weather"/>
            <p>Sunrise:{getTime(state.sys.sunrise * 1000)}</p> 
            <p>Sunset:{getTime(state.sys.sunset * 1000)}</p>  
            </div>  
        </div>
    );
};

export default weather;