import React from 'react'
import './support.css';

function Support() {
  return (
    <div className='page'>

      <div className="support-main">

        <div className="support-main-top">
          <div className="support-main-heading"><h1>Contact Support</h1></div>
        </div>

        <div className="support-main-bottom">
        <div className="bottom-left">
          <h3>Meet Our Developer</h3>
          <p>
            <strong>Name:</strong> John Doe<br />
            <strong>Email:</strong> john.doe@example.com<br />
            <strong>LinkedIn:</strong> linkedin.com/in/johndoe<br />
            <strong>GitHub:</strong> github.com/johndoe
          </p>
        </div>
        <div className="bottom-right">
          <h3>Contact Details</h3>
          <p>
            <strong>Email:</strong> support@example.com<br />
            <strong>Phone:</strong> +1 123-456-7890<br />
            <strong>Address:</strong> 123 Main Street, Cityville, State, 12345
          </p>
        </div>
        </div>

      </div>


    </div>
  )
}

export default Support