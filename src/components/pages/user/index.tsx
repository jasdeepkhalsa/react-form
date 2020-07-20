import React, { useContext } from 'react'
import Base from '../base'
import Field from '../../container/field'
import { navigate } from 'hookrouter'
import { Store } from '../../../reducers'
import Joi from '@hapi/joi'

const Component = () => {
  const store: any = useContext(Store)

  return (
    <Base>
      <Field label="First Name" required={true}>
        <input
          className="input"
          type="text"
          required
          onChange={(event) => {
            console.log('event', event.target.value)
            console.log('store state', store.state)
            store.dispatch({ firstName: event.target.value })
          }}
        />
      </Field>

      {store.state}

      <Field label="Last Name" required={true}>
        <input className="input" type="text" required />
      </Field>

      <Field label="Profession">
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
      </Field>

      <Field label="Email" required={true}>
        <input className="input" type="email" required />
      </Field>

      <Field label="Password" required={true}>
        <input className="input" type="password" required />
      </Field>

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
    </Base>
  )
}

export default Component
