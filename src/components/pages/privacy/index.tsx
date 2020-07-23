import React, { useContext, useState, useCallback } from 'react'
import Base from '../../container/base'
import FieldCheck from '../../container/field-check'
import { Store } from '../../../data'
import { userSchema, privacySchema, SchemaKeys } from '../../../data/schema'
import { dispatch } from '../../../utils/onChangeDispatch'
import Paths from '../../../utils/paths'
import OnSubmitValidate from '../../../utils/onSubmitValidate'
import { navigate } from 'hookrouter'

const Component = () => {
  const store: typeof Store = useContext(Store)
  const [errors, setError] = useState<Array<string>>([])

  // If user is directly trying to navigate here
  // Redirect them back to the beginning
  // Check the store.state has the correct data at this stage too
  const { error } = userSchema.validate(store.state)
  if (!Object.keys(store.state).length && error && Object.keys(error).length) {
    navigate(Paths.USER, true)
  }

  const productRef = useCallback(
    (node) => {
      // Do not set this if there's an error
      // Otherwise go ahead and save the initial checkbox value to the store
      if (!error && node !== null) {
        dispatch(node.checked, store, SchemaKeys.UPDATE_PRODUCT)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [error]
  )

  const companyRef = useCallback(
    (node) => {
      // Do not set this if there's an error
      // Otherwise go ahead and save the initial checkbox value to the store
      if (!error && node !== null) {
        dispatch(node.checked, store, SchemaKeys.UPDATE_COMPANY)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [error]
  )

  return (
    <Base
      // Set a bunch of defaults for error messages
      errorMessages={errors.length ? errors : null}
      errorVisible={errors.length ? true : false}
    >
      <FieldCheck>
        <input
          type="checkbox"
          name={SchemaKeys.UPDATE_PRODUCT}
          ref={productRef}
          required
          defaultChecked
          onChange={(event) => {
            dispatch(event.target.checked, store, SchemaKeys.UPDATE_PRODUCT)
          }}
        />
        <span className="ml-2 is-size-5">
          Receive updates about this Tray.io product by email
        </span>
      </FieldCheck>

      <FieldCheck>
        <input
          type="checkbox"
          name={SchemaKeys.UPDATE_COMPANY}
          ref={companyRef}
          onChange={(event) => {
            dispatch(event.target.checked, store, SchemaKeys.UPDATE_COMPANY)
          }}
        />
        <span className="ml-2 is-size-5">
          Receive updates about other products created by the Tray.io team by
          email
        </span>
      </FieldCheck>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link is-light" name="back" disabled>
            Back
          </button>
        </div>
        <div className="control">
          <button
            className="button is-link"
            name="next"
            onClick={(event) =>
              OnSubmitValidate(
                event,
                store,
                privacySchema,
                setError,
                Paths.DONE
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </Base>
  )
}

export default Component
