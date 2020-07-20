import React from 'react'
import Notification from '../../container/notification'
import Navigation from '../../container/navigation'
import { usePath } from 'hookrouter'

const Component = (props: any) => {
  const currentUrl = usePath()

  return (
    <>
      <section className="section pt-5 pb-5">
        <div className="container is-fluid">
          <Notification
            visible={props.visible}
            message={props.message}
            title={props.title}
          />
          <Navigation url={currentUrl} />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container is-fluid">{props.children}</div>
      </section>
    </>
  )
}

export default Component
