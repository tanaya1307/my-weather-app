import { useState } from "react";
import axios from 'axios';


const Weather =()=> {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=07e6852830baa19a7df8b2524cb222d7`
  
   const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  
    
   }
    return (
        <div>
        <div className="search-area">
        <input
        className="search-box"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
         
      </div>
      <div className="app-name">

        <h1>W</h1>
        <h1>E</h1>
        <h1>A</h1>
        <h1>T</h1>
        <h1>H</h1>
        <h1>E</h1>
        <h1>R</h1>
        
      </div>
         
        <div className="main-section">
         <div className="top">
        <div className="location">
          <p>{data.name} </p>
    
        </div>
        <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
        </div>

        <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        </div> 
        <div className="bottom">
          <div className="feels">
          {data.main ? <h1>feels like:{data.main.feels_like.toFixed()}°F</h1> : null}
            <div className="humidity">
            {data.main ? <h1>{data.main.humidity.toFixed()}</h1> : null}
            </div>
            <div className="wind">
            {data.wind ? <h1>wind speed:{data.wind.speed.toFixed()}mph</h1> : null}
            </div>
          </div>
        </div>
          
          
          
        </div>
        </div>     
      );
}

export default Weather;