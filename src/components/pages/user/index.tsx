import React, { useContext, useState } from 'react'
import Base from '../base'
import Field from '../../container/field'
import { Store } from '../../../data'
import { userSchema, SchemaKeys } from '../../../data/schema'
import OnChangeDispatch from '../../../utils/onChangeDispatch'
import Paths from '../../../utils/paths'
import OnSubmitValidate from '../../../utils/onSubmitValidate'

const Component = () => {
  const store: typeof Store = useContext(Store)
  const [errors, setError] = useState<Array<string>>([])

  return (
    <Base
      errorMessages={errors.length ? errors : null}
      errorVisible={errors.length ? true : false}
    >
      <Field label="First Name" required={true}>
        <input
          className="input"
          type="text"
          required
          autoComplete="given-name"
          onChange={(event) => {
            OnChangeDispatch(event, store, SchemaKeys.FIRST_NAME)
          }}
        />
      </Field>

      <Field label="Last Name" required={true}>
        <input
          className="input"
          type="text"
          autoComplete="family-name"
          required
          onChange={(event) => {
            OnChangeDispatch(event, store, SchemaKeys.LAST_NAME)
          }}
        />
      </Field>

      <Field label="Profession">
        <div className="select">
          <select
            defaultValue="default"
            onChange={(event) => {
              OnChangeDispatch(event, store, SchemaKeys.PROFESSION)
            }}
          >
            <option disabled value="default">
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
        <input
          className="input"
          type="email"
          autoComplete="email"
          required
          onChange={(event) => {
            OnChangeDispatch(event, store, SchemaKeys.EMAIL)
          }}
        />
      </Field>

      <Field label="Password" required={true}>
        <input
          className="input"
          type="password"
          name="password"
          autoComplete="current-password"
          required
          onChange={(event) => {
            OnChangeDispatch(event, store, SchemaKeys.PASSWORD)
          }}
        />
      </Field>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={(event) =>
              OnSubmitValidate(
                event,
                store,
                userSchema,
                setError,
                Paths.PRIVACY
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </Base>
  )
}

export default Component
