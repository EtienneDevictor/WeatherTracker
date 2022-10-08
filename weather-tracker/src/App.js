import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const [zip, setZip] = useState('');
  const [zipcode, setZipcode] = useState('')
  const [temp, setTemp] = useState('');
  const [city, setCity] = useState('');

  const handleChange = event => {
    setZip(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleClick = event => {
    if (zip.length == 5 && Number.isInteger(Number(zip))) {
      setZipcode(zip);
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=384530a26df84465ffe7e9419c8ef8db&units=metric')
        .then(res => res.json())
        .then(data => {
          setTemp(data.main["temp"]);
          setCity(data.name);
          console.log(data);
        })
  }

  return (
    <div class="Body">
      <h2>Enter your Zipcode</h2>
      <div>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={zip}
        />
        <button class="Button" onClick={handleClick}>find temperature</button>
      </div>
      <div>
        <p>ZipCode: {zipcode}</p>
      </div>
      <div>
        <p>City: {city}</p>
      </div>
      <div>
        <p>Temp: {temp} &#x00B0;C </p>
      </div>
    </div>

  );
}

export default App;