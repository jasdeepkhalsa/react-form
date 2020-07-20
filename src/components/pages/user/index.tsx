import React from 'react'
import { navigate } from 'hookrouter'

const Component = () => {
  return (
    <>
      <div className="field">
        <label className="label">First Name*</label>
        <div className="control">
          <input className="input" type="text" required />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name*</label>
        <div className="control">
          <input className="input" type="text" required />
        </div>
      </div>

      <div className="field">
        <label className="label">Profession</label>
        <div className="control">
          <div className="select">
            <select required>
              <option disabled selected>
                Select role
              </option>
              <option>Accountancy, banking and finance</option>
              <option>Healthcare and medicine</option>
              <option>Arts and entertainment</option>
              <option>Business, consulting and management</option>
              <option>Energy and utilities</option>
              <option>Industrial and manufacturing</option>
              <option>Law enforcement and armed forces</option>
              <option>Science</option>
              <option>IT</option>
              <option>Computer programming</option>
              <option>Charity and voluntary work</option>
              <option>Hospitality and events management</option>
              <option>Law</option>
              <option>Leisure, sport and tourism</option>
              <option>Property and construction</option>
              <option>Public services and administration</option>
              <option>Recruitment and HR</option>
              <option>Retail</option>
              <option>Sales</option>
              <option>Social care</option>
              <option>Teacher training and education</option>
              <option>Transport and logistics</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Email*</label>
        <div className="control">
          <input className="input" type="email" required />
        </div>
      </div>

      <div className="field">
        <label className="label">Password*</label>
        <div className="control">
          <input className="input" type="password" required />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={() => navigate('/privacy')}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Component
