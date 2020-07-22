import React from 'react'
import Notification from '../../container/notification'
import Navigation from '../../container/navigation'
import { usePath } from 'hookrouter'

interface Props {
  errorVisible: boolean
  errorMessages: string[] | null
  children: JSX.Element | JSX.Element[]
}

const Component = (props: Props) => {
  const currentUrl = usePath()

  return (
    <>
      <section className="section pt-5 pb-5">
        <div className="container is-fluid">
          <h1 className="title is-1">Sign up</h1>
          <Notification
            visible={props.errorVisible}
            messages={props.errorMessages}
          />
          <Navigation url={currentUrl} />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container is-fluid">
          <form onSubmit={(event) => event.preventDefault()}>
            {props.children}
          </form>
        </div>
      </section>
    </>
  )
}

Component.defaultProps = {
  errorVisible: false,
  errorMessages: [],
  children: null,
}

export default Component
