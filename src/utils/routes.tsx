import React from 'react'
import User from '../components/pages/user'
import Privacy from '../components/pages/privacy'
import Done from '../components/pages/done'
import NotFound from '../components/pages/not-found'
import Paths from './paths'

const routes = {
  [Paths.USER]: () => <User />,
  [Paths.PRIVACY]: () => <Privacy />,
  [Paths.DONE]: () => <Done />,
  // Always fallback to a 404 page
  [Paths.ANY]: () => <NotFound />,
}

export default routes
