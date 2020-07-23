import { Actions, reducer } from './'

const initialState = {}
const payload = {
  test: 'test',
}
const payloadTwo = {
  test2: 'test2',
}

describe('reducer', () => {
  describe('no action - default', () => {
    test('empty object with no action returns empty object', () => {
      expect(reducer(initialState)).toEqual(initialState)
    })

    test('single payload object with no action returns the single payload', () => {
      expect(reducer(payload)).toEqual(payload)
    })
  })

  describe(`${Actions.ADD} action`, () => {
    test('empty object with add action but no payload returns empty object', () => {
      expect(reducer(initialState, { type: Actions.ADD })).toEqual(initialState)
    })

    test('empty object with add action and a payload returns the payload', () => {
      expect(reducer(initialState, { type: Actions.ADD, payload })).toEqual(
        payload
      )
    })

    test('empty object with add action and two payloads returns the two payloads', () => {
      expect(
        reducer(initialState, {
          type: Actions.ADD,
          payload: { ...payload, ...payloadTwo },
        })
      ).toEqual({ ...payload, ...payloadTwo })
    })

    test('single payload object with add action but no payload returns the single payload', () => {
      expect(reducer(payload, { type: Actions.ADD })).toEqual(payload)
    })

    test('single payload object with add action and the single payload returns the single payload', () => {
      expect(reducer(payload, { type: Actions.ADD, payload })).toEqual(payload)
    })

    test('single payload object with add action and two payloads returns the two payloads', () => {
      expect(
        reducer(payload, {
          type: Actions.ADD,
          payload: { ...payload, ...payloadTwo },
        })
      ).toEqual({ ...payload, ...payloadTwo })
    })
  })

  describe(`${Actions.RESET} action`, () => {
    test('empty object with reset action but no payload returns empty object', () => {
      expect(reducer(initialState, { type: Actions.RESET })).toEqual(
        initialState
      )
    })

    test('empty object with reset action and a payload returns the payload', () => {
      expect(reducer(initialState, { type: Actions.RESET, payload })).toEqual(
        payload
      )
    })

    test('empty object with reset action and two payloads returns the two payloads', () => {
      expect(
        reducer(initialState, {
          type: Actions.RESET,
          payload: { ...payload, ...payloadTwo },
        })
      ).toEqual({ ...payload, ...payloadTwo })
    })

    test('single payload object with reset action but no payload returns empty object', () => {
      expect(reducer(payload, { type: Actions.RESET })).toEqual(initialState)
    })

    test('single payload object with reset action and the single payload returns the single payload', () => {
      expect(reducer(payload, { type: Actions.RESET, payload })).toEqual(
        payload
      )
    })

    test('single payload object with reset action and the second payload returns the second payload', () => {
      expect(
        reducer(payload, { type: Actions.RESET, payload: payloadTwo })
      ).toEqual(payloadTwo)
    })

    test('single payload object with reset action and two payloads returns the two payloads', () => {
      expect(
        reducer(payload, {
          type: Actions.RESET,
          payload: { ...payload, ...payloadTwo },
        })
      ).toEqual({ ...payload, ...payloadTwo })
    })
  })
})
