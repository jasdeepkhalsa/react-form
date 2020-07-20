import React from 'react'
import Base from '../base'
import { navigate } from 'hookrouter'

const Component = () => {
  return (
    <Base>
      <div className="field">
        <label className="checkbox">
          <input type="checkbox" required checked />
          <span className="ml-2 is-size-5">
            Receive updates about Tray.io product by email
          </span>
        </label>
      </div>
      <div className="field">
        <label className="checkbox">
          <input type="checkbox" required />
          <span className="ml-2 is-size-5">
            Receive communication by email for other products created by the
            Tray.io team
          </span>
        </label>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link is-light"
            onClick={() => navigate('/user', true)}
          >
            Back
          </button>
        </div>
        <div className="control">
          <button className="button is-link" onClick={() => navigate('/done')}>
            Next
          </button>
        </div>
      </div>
    </Base>
  )
}

export default Component
