import React, { useEffect, useState } from 'react'
const Tempapp = () => {

    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("London");

    useEffect(()=>{
        const fetchApi= async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=886705b4c1182eb1c69f28eb8c520e20`
            const response = await fetch(url);
            const resJson = await response.json();
            setcity(resJson);
        };
        fetchApi();
    },[search])
  return (
    <>
    <div className="box">
        <div className='inputData' >
            <input 
            type="search" 
            placeholder="Location" 
            className="inputFeild" 
            value={search}
            onChange={(event)=>{
                setsearch(event.target.value);
            }}
            />
        </div>
        {!city ?(
            <p className="errorMsg">No Data Found</p>
        ) : (
        <>
        <div className="info">
        <h2 className="location">
        <i class="fa-solid fa-street-view"></i>
        {city.name}
        </h2>
        <h1 className="tempok">     
        {city.main.temp}°F
        </h1> 
        <h3 className="tempmin_max">
            Min:{city.main.temp_min}°F | Max: {city.main.temp_max}°F
        </h3>
        
    </div>
    <div className='wave -one'></div>
    <div className='wave-two'></div>
    <div className='wave-three'></div>
        </>
    )
    }
    </div>
    </>
  );
}

export default Tempapp;