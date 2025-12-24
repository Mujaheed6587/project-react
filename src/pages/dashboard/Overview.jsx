import React from 'react'
import "../../css/Overview.css"
const Overview = () => {
  return (
    <div className="overview">
      <h2>Overview</h2>

      <div className="overview-cards">
        <div className="card">
          <h1>8</h1>
          <p>Completed events all time</p>
        </div>

        <div className="card">
          <h1>6</h1>
          <p>Completed events</p>
        </div>

        <div className="card">
          <h1>0</h1>
          <p>Future events</p>
        </div>

        <div className="card">
          <h1>6</h1>
          <p>Collaborated events all time</p>
        </div>

        <div className="card">
          <h1>5</h1>
          <p>Completed collaborated events</p>
        </div>

        <div className="card">
          <h1>0</h1>
          <p>Future collaborated events</p>
        </div>
      </div>
    </div>

  )
}

export default Overview