import { createContext } from 'react'

export const initialState: object = {}

export const Actions = {
  ADD: 'add',
  RESET: 'reset',
}

export const reducer = (state: object, action: any) => {
  switch (action.type) {
    case Actions.ADD:
      return { ...state, ...action.payload }
    case Actions.RESET:
      return action.payload
  }
}

export const Store: any = createContext(null)
