import React from 'react'
import { useRoutes, useRedirect } from 'hookrouter'
import User from '../components/pages/user'
import Privacy from '../components/pages/privacy'
import Done from '../components/pages/done'
import NotFound from '../components/pages/not-found'
import { Paths } from './paths'

const routes = {
  [Paths.ROOT]: () => <Redirect />,
  [Paths.USER]: () => <User />,
  [Paths.PRIVACY]: () => <Privacy />,
  [Paths.DONE]: () => <Done />,
  [Paths.ANY]: () => <NotFound />,
}

const Redirect = () => {
  useRedirect('/', '/user')
  const routeResult = useRoutes(routes)
  return routeResult
}

export const interceptFunction = (currentPath: string, nextPath: string) => {
  if (
    window.confirm(
      'You have unsaved data. Are you sure you want to leave before signing up?'
    )
  ) {
    return nextPath
  }
  return currentPath
}

export default routes
