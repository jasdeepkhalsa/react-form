import { createContext } from 'react'

export const initialState: object = {}

// Redux-like actions
export const Actions = {
  ADD: 'add',
  RESET: 'reset',
}

// Redux-like reducer
export const reducer = (state: object, action: any) => {
  switch (action && action.type) {
    case Actions.ADD:
      return { ...state, ...action.payload }
    case Actions.RESET:
      return { ...action.payload }
    default:
      return state
  }
}

// Redux-like store
export const Store: any = createContext(null)
