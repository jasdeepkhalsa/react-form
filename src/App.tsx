import React, { useReducer } from 'react'
import { useRoutes, useRedirect } from 'hookrouter'
import Routes from './utils/routes'
import Paths from './utils/paths'
import { initialState, reducer, Store } from './data'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useRedirect(Paths.ROOT, Paths.USER)
  const routeResult = useRoutes(Routes)

  return (
    <Store.Provider value={{ state, dispatch }}>{routeResult}</Store.Provider>
  )
}

export default App
