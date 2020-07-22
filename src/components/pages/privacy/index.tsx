import React, { useContext, useState, useCallback } from 'react'
import Base from '../base'
import FieldCheck from '../../container/field-check'
import { Store } from '../../../data'
import { privacySchema, SchemaKeys } from '../../../data/schema'
import { dispatch } from '../../../utils/onChangeDispatch'
import Paths from '../../../utils/paths'
import OnSubmitValidate from '../../../utils/onSubmitValidate'

const Component = () => {
  const store: typeof Store = useContext(Store)
  const [errors, setError] = useState<Array<string>>([])

  const productRef = useCallback(
    (node) => {
      if (node !== null) {
        dispatch(node.checked, store, SchemaKeys.UPDATE_PRODUCT)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const companyRef = useCallback(
    (node) => {
      if (node !== null) {
        dispatch(node.checked, store, SchemaKeys.UPDATE_COMPANY)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <Base
      errorMessages={errors.length ? errors : null}
      errorVisible={errors.length ? true : false}
    >
      <FieldCheck>
        <input
          type="checkbox"
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
          <button className="button is-link is-light" disabled>
            Back
          </button>
        </div>
        <div className="control">
          <button
            className="button is-link"
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
