import React from 'react'
import Base from '../base'
import { Icons } from '../../../utils/icons'

const Component = (props: any) => (
  <Base url={props.url}>
    <div className="columns is-multiline is-vcentered is-centered">
      <div className="column is-full">
        <p className="has-text-success has-text-centered">
          <i className={Icons.CHECK_BIG} aria-hidden="true"></i>
        </p>
      </div>
      <div className="column is-full">
        <h1 className="is-size-3 has-text-centered">
          Please verify your email address. You should have received an email
          from us already!
        </h1>
      </div>
    </div>
  </Base>
)

export default Component
