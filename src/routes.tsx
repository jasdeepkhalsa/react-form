import React from 'react'
import { useRoutes, useRedirect } from 'hookrouter'
import User from './components/pages/user'
import Privacy from './components/pages/privacy'
import Done from './components/pages/done'
import NotFound from './components/pages/not-found'

const routes = {
  '/': () => <Redirect />,
  '/user': () => <User />,
  '/privacy': () => <Privacy />,
  '/done': () => <Done />,
  '*': () => <NotFound />,
}

const Redirect = () => {
  useRedirect('/', '/user')
  const routeResult = useRoutes(routes)
  return routeResult
}

export default routes
