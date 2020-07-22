import React from 'react'

interface Props {
  label: string
  required?: boolean
  children: JSX.Element | JSX.Element[]
}

const Component = (props: Props) => (
  <div className="field">
    <label className="label">
      {props.label}
      {props.required ? '*' : ''}
    </label>
    <div className="control">{props.children}</div>
  </div>
)

export default Component
