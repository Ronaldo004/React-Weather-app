import React, { useState,useEffect } from 'react'
import WeatherC from './WeatherC';
import "./index.css"
import "./media.css"

const Weather = () => {
  let[searchValue,setSearchvalue]=useState('karachi');
  let[wvalue,setWval]=useState("");
let getweatherinfo=async ()=>{
try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2471abf79289469ee064bf2b8834d6c2`
let res=await fetch(url);
let data=await res.json();
console.log(data);

let {temp, pressure, humidity}=data.main;
let {main:weathermode}=data.weather[0];
const {speed}=data.wind;
const {name:Name}=data;
console.log(Name);
const {sunrise,sunset}=data.sys;
const {country}=data.sys;

console.log(sunset);
let date_w=new Date(sunset* 1000).toString();
let set2=date_w.slice(16,24);
console.log(set2);
let date = new Date(sunrise* 1000).toString();
console.log(date)
let sun = date.slice(16, 24);
 const mynewinfo={
  temp, 
  pressure,
   humidity,
   weathermode,
   speed,
   Name,
   sun,
   country,set2
 }
 setWval(mynewinfo);
}
catch{
  alert("sorry we cant get data server failed 404*")
} 

}


  useEffect(()=>{
    getweatherinfo();
  },[])
  return (
  
   <>
   <div className='Main'>
    <div className='Search'>
        <input type="search" placeholder='Search...' id='search'
         className='search' value={searchValue} 
         onChange={(e)=>setSearchvalue(e.target.value)}/>
        <button className='search-btn' onClick={getweatherinfo}>🔍</button>
    </div>

   </div>
   <WeatherC wvalue={wvalue}/>
  
   
   </>
  )
}

export default Weather
