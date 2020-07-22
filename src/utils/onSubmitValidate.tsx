import { Store } from '../data'
import { navigate } from 'hookrouter'
import Joi from '@hapi/joi'

const onSubmitValidate = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  store: typeof Store,
  schema: Joi.ObjectSchema<any>,
  setError: React.Dispatch<React.SetStateAction<string[]>>,
  navigateTo: string
) => {
  event.preventDefault()
  const { error } = schema.validate(store.state, {
    abortEarly: false,
  })
  if (error) {
    const errors = error.details.map((error) => error.message)
    setError(errors)
  } else {
    navigate(navigateTo)
  }
}

export default onSubmitValidate
