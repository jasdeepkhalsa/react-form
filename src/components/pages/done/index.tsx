import React, { useContext, useEffect } from 'react'
import Base from '../../container/base'
import Icons from '../../../utils/icons'
import Paths from '../../../utils/paths'
import { Store } from '../../../data'
import { privacySchema } from '../../../data/schema'
import { navigate } from 'hookrouter'

const Component = () => {
  const store: typeof Store = useContext(Store)

  // If user is directly trying to navigate here
  // Redirect them back to the beginning
  // Check the store.state has the correct data at this stage too
  const { error } = privacySchema.validate(store.state)
  if (!Object.keys(store.state).length && error && Object.keys(error).length) {
    navigate(Paths.USER)
  }

  useEffect(() => {
    // Lets print to console only if there's something actually in the store
    // And there's no error
    if (!error && Object.keys(store.state).length) {
      window.console.log(store.state)
    }
  }, [error, store.state])

  return (
    <Base>
      <div className="columns is-multiline is-vcentered is-centered">
        <div className="column is-full">
          <p className="has-text-success has-text-centered">
            <i className={Icons.CHECK_BIG} aria-hidden="true"></i>
          </p>
        </div>
        <div className="column is-full">
          <h1 className="is-size-3 has-text-centered">
            Please verify your email address. You should have received an email
            from us already!
          </h1>
        </div>
      </div>
    </Base>
  )
}

export default Component
