# NodeJS Weather Application
Below is a simple Node.js project using Express for the backend, EJS for the view engine, and Bootstrap for styling. The weather data is fetched from the OpenWeatherMap API `https://home.openweathermap.org/`

## Install packages
Create package.json & Install necessary packages
```
npm init -y
npm install express axios ejs
```

## Run the app
```
API_KEY=123456789 node server.js 
```

##  Build and run the Docker container
```
docker build -t weather-app .
docker run -d -p 3000:3000 -e API_KEY=123456789 weather-app
```