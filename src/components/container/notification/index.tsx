import React, { useState, useEffect } from 'react'

const Component = (props: any) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!visible && props.visible) {
      setVisible(true)
    }
  }, [props.visible])

  return visible ? (
    <article className="message is-danger">
      <div className="message-header">
        <p>{props.title}</p>
        <button
          className="delete"
          aria-label="delete"
          onClick={() => setVisible(false)}
        ></button>
      </div>
      <div className="message-body">{props.message}</div>
    </article>
  ) : null
}

export default Component
