import { Store, Actions } from '../data'

export const dispatch = (
  value: string | boolean,
  store: typeof Store,
  field: string,
  type = Actions.ADD
) => {
  store.dispatch({
    type,
    payload: { [field]: value },
  })
}

const onChangeDispatch = (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  store: typeof Store,
  field: string,
  type = Actions.ADD
) => {
  dispatch(event.target.value, store, field, type)
}

export default onChangeDispatch
