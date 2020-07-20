import { createContext } from 'react'

export const initialState: any = []

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'reset':
      return action.payload
  }
}

export const Store: any = createContext(null)
