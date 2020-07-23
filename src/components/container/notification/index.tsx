import React from 'react'

interface Props {
  visible: boolean
  messages: string[] | null
}

const Component = (props: Props) => {
  return props?.visible ? (
    <article className="error message is-danger">
      <div className="message-header">
        <p>Please correct the following errors:</p>
      </div>
      <div className="message-body">
        {props?.messages?.map((message: string, index: number) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </article>
  ) : null
}

export default Component
