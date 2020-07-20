import React from 'react'

const Component = (props: any) => (
  <div className="field">
    <label className="label">
      {props.label}
      {props.required ? '*' : ''}
    </label>
    <div className="control">{props.children}</div>
  </div>
)

export default Component
