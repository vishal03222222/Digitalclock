import React, { Component } from "react";
import "./DateTimeDisplay.css"; // Import external CSS

class DateTimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
      date: "",
    };
  }

  componentDidMount() {
    this.updateTime();
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTime = () => {
    const currentTime = new Date();
    const formattedDate = currentTime.toLocaleDateString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    this.setState({
      hours: String(currentTime.getHours()).padStart(2, "0"),
      minutes: String(currentTime.getMinutes()).padStart(2, "0"),
      seconds: String(currentTime.getSeconds()).padStart(2, "0"),
      date: formattedDate,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Digital Clock</h1>
        <div className="date-container">{this.state.date}</div>
        <div className="timer-container">
          <span className="time-box">{this.state.hours}</span>
          <span className="colon">:</span>
          <span className="time-box">{this.state.minutes}</span>
          <span className="colon">:</span>
          <span className="time-box">{this.state.seconds}</span>
        </div>
      </div>
    );
  }
}

export default DateTimeDisplay;
