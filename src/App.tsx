import React, { useReducer } from 'react'
import { useRoutes } from 'hookrouter'
import routes from './utils/routes'
import { initialState, reducer, Store } from './reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const routeResult = useRoutes(routes)
  return (
    <Store.Provider value={{ state, dispatch }}>{routeResult}</Store.Provider>
  )
}

export default App
