http://api.openweathermap.org/data/2.5/weather?q=denver&APPID=66ac02b03ce1fdbb4ebcea5949ecc717&units=imperial

## Getting Started 
This project utilizes openweathermap.org's public API. In order to get this running locally in your environment, you'll need to create an API key. After creating the key, create a `.env` file at the root of the weather-wardrobe directory, and add the new API key to that file using the following syntax: `REACT_APP_API_KEY=************`. After that you should be good to go!

# Getting started
This project utilizes `node package manager` or `npm` to start a local node server and get the project running on `localhost:3000`.

1) Download the latest version of node from `https://nodejs.org/en/` (skip this step if you already use npm)
2) Navigate to where you'd like the project to be run on your computer `/Docments`
3) Clone the repo `git clone https://github.com/jbrennan414/weather-wardrobe.git`
4) Change directories into our new directory `cd weather-wardrobe`
5) Within this repo is a file called package.json, where npm will find all the packages it needs to run the site
6) Run `npm install` or `npm i` to start install all the dependanceies 
7) Finally run `npm run start` to start weather-wardrobe!!