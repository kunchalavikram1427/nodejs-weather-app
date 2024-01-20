// server.js
const express = require('express');
const axios = require('axios');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;  // get one from https://home.openweathermap.org/
const hostname = os.hostname(); 

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to serve static files from the 'public' folder
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { weather: null, error: null, hostname });
});

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data;
    const weather = {
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
    };
    res.render('index', { weather, error: null, hostname });
  } catch (error) {
    res.render('index', { weather: null, error: 'Error fetching weather data', hostname });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
