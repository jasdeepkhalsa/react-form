import React from 'react'
import { useRoutes, usePath, useInterceptor } from 'hookrouter'
import Notification from './components/container/notification'
import Navigation from './components/container/navigation'
import routes from './routes'

const interceptFunction = (currentPath: string, nextPath: string) => {
  if (
    window.confirm(
      'You have unsaved data. Are you sure you want to leave before signing up?'
    )
  ) {
    return nextPath
  }
  return currentPath
}

const App = () => {
  const routeResult = useRoutes(routes)
  const stopInterceptor = useInterceptor(interceptFunction)
  const path = usePath()

  return (
    <>
      <section className="section pt-5 pb-5">
        <div className="container is-fluid">
          <Notification />
          <Navigation url={path} />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container is-fluid">{routeResult}</div>
      </section>
    </>
  )
}

export default App
