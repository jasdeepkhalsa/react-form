import React, { useReducer } from 'react'
import { useRoutes, useRedirect } from 'hookrouter'
import Routes from './utils/routes'
import Paths from './utils/paths'
import { initialState, reducer, Store } from './data'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // If user goes to root, redirect to the form
  useRedirect(Paths.ROOT, Paths.USER)
  const routeResult = useRoutes(Routes)

  return (
    // Lets pass down the store context to the whole application
    // To mimic a global redux store
    <Store.Provider value={{ state, dispatch }}>{routeResult}</Store.Provider>
  )
}

export default App
