import React, { useState,useEffect } from 'react'


const WeatherC = ({wvalue}) => {
    const{
        temp, 
        pressure,
         humidity,
         weathermode,
         speed,
         Name,
         sun,
         country,
         set2
       }=wvalue;
       let[wIcon,setWicon]=useState("");

       useEffect(()=>{
        if(weathermode){
            switch(weathermode){
            case "Clouds":
            setWicon('wi-day-cloudy');
            break;
            case "Clear":
                setWicon('wi-day-sunny');
                break;
                case "Haze":
                setWicon('wi-fog');
                break;
                case "Shower":
                    setWicon('wi-day-showers');
                    break;
                    case "Thunderstrom":
                    setWicon('wi-day-snow-thunderstorm');
                    break;
                    case "Smoke":
                    setWicon('wi-dust');
                    break;
                    case "Rain":
                    setWicon('wi-rain-wind');
                    break;

            default:
                setWicon('wi-day-sunny');
                break;
            }
            
        }
       },[weathermode])
  return (
    <>
    
   <div className='info-Main'><div className='Weather-Tt' >
    <section className='W-logo'><i className={`wi ${wIcon}`}></i></section>
    <div className='MDeg-time'>
      <div className='temp'><span>{temp}&deg;</span></div>
      <div className='description'>
        <div className="Wdes">{weathermode}</div>
        <div className="place">{Name},{country}</div>
      </div>
      <div className='time'>
        {new Date().toLocaleString()}
      </div>
    </div>
    <div className="otherinfo">
      <div className='conl'>
        <i className={'wi wi-day-cloudy'}></i>
      </div>
      <div className='time-con'>
       <h3>sunrise</h3>
        <p>{sun}
        </p>
        <h3>sunset</h3>
        <p>
            {set2}
        </p>
      </div>
      <div className='huml'>
        <i className='wi wi-humidity'></i>
      </div>
      <div className='humval'>
        <p>{humidity} humidity</p>
      </div>
      <div className='pressl'>
        <i className={'wi wi-rain'}></i>
      </div>
      <div className='pressval'>
        <p>pressure
            <br />
          {pressure}mm
        </p>
      </div>
      <div className='windl'>
        <i className={'wi wi-strong-wind'}></i>
      </div>
      <div className='windval'>
        <p>wind {speed}</p>
      </div>
      </div>
    </div>
    </div>
  
   
    
    </>
  )
}

export default WeatherC