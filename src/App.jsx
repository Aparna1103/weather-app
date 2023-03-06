import React, { useEffect, useState } from 'react';

import SearchComponent from './components/SearchComponent';
import WeatherComponent from './components/WeatherComponent';

import apiService from './webServices/apiService';

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const getData = async () => {
    const response = await apiService.getCurrentWeather(city);
    setWeather(response);
  }

  useEffect(() => {
    getData();
  }, [weather]);

  return (
    <div className="App">
      <SearchComponent city={city} setCity={setCity} getData={getData} />
      <WeatherComponent data={weather} />
    </div>
  );
}

export default App;
