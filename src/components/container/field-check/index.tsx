import React from 'react'

interface Props {
  children: JSX.Element[]
}

const Component = (props: Props) => (
  <div className="field">
    <label className="checkbox">{props.children}</label>
  </div>
)

export default Component
