import React, { Component } from "react";

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
      <div style={styles.container}>
        <h1 style={styles.title}>Digital Clock</h1>
        <div style={styles.dateContainer}>{this.state.date}</div>
        <div style={styles.timerContainer}>
          <span style={styles.timeBox}>{this.state.hours}</span>
          <span style={styles.colon}>:</span>
          <span style={styles.timeBox}>{this.state.minutes}</span>
          <span style={styles.colon}>:</span>
          <span style={styles.timeBox}>{this.state.seconds}</span>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(-45deg, #ff416c, #007bff, #1a1a2e, #ff9a00)",
    backgroundSize: "400% 400%",
    animation: "backgroundAnimation 10s ease infinite",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "20px",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
  },
  dateContainer: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: "20px",
    background: "rgba(255, 255, 255, 0.2)",
    padding: "10px 20px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
  },
  timerContainer: {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(90deg, #ff416c, #007bff)",
    padding: "20px 40px",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(255, 65, 108, 0.6)",
    animation: "floatAnimation 3s ease-in-out infinite",
  },
  timeBox: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#ffffff",
    background: "rgba(255, 255, 255, 0.2)",
    padding: "10px 20px",
    borderRadius: "10px",
    margin: "0 10px",
  },
  colon: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#ffffff",
  },
};

/* Adding Keyframes */
const styleSheet = document.styleSheets[0];

const keyframes = `
@keyframes backgroundAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes floatAnimation {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default DateTimeDisplay;
