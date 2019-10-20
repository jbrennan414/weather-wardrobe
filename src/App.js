import React, { Component } from 'react';
import Wardrobe from './wardrobe';
import moment from 'moment';

class App extends Component {

  state = {
  }

  componentDidMount() {

    var today;
    var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th" }(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()];
    today = dayOfWeek + ", " + curMonth + " " + dayOfMonth;

    //fetch our weather data
    fetch('http://api.openweathermap.org/data/2.5/weather?q=denver&APPID='+ process.env.REACT_APP_API_KEY +'&units=imperial')
      .then(res => res.json())
      .then((data) => {
        var localTime = moment.unix(data.dt).format("LT");
        var sunrise = moment.unix(data.sys.sunrise).format("LT");
        var sunset = moment.unix(data.sys.sunset).format("LT");

        this.setState({ 
          conditions: data, 
          date: today,
          currentTime: localTime,
          sunrise: sunrise,
          sunset: sunset,
        })
      })
      .catch(console.log)

    }


  render() {

    let highTemp;
    let lowTemp;
    let weatherID

    if (this.state.conditions) {
      weatherID = this.state.conditions.weather[0].id;
      highTemp = this.state.conditions.main.temp_max;
      lowTemp = this.state.conditions.main.temp_min;
    } else {
      return <h1>Loading</h1>
    }

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Today's Date: {this.state.date}</h5>
          <h6 className="card-subtitle mb-2 text-muted">What should I wear today?</h6>
          <h5>Today's Conditions in Denver</h5>
          <h6>High: {highTemp}°F</h6>
          <h6>Low: {lowTemp}°F</h6>
          <Wardrobe 
            highTemp = {highTemp}
            lowTemp = {lowTemp}
            weatherID = {weatherID}
          />
        </div>
      </div>
    );
  }
}

export default App;