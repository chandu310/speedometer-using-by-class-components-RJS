// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onSpeedIncrease = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onSpeedDecrease = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="second-container">
          <h1 className="main-head">SPEEDOMETER</h1>
          <img
            className="image"
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1 className="second-head">Speed is {count}mph</h1>
          <p className="">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              className="accel-btn"
              onClick={this.onSpeedIncrease}
              type="button"
            >
              Accelerate
            </button>
            <button
              className="break-btn"
              onClick={this.onSpeedDecrease}
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
