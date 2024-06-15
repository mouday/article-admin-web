const defaultState = {
  loading: false,
}

const typeEnum = {
  SET_LOADING: 'SET_LOADING',
}

export function setLoading(data: any) {
  return { type: typeEnum.SET_LOADING, data }
}

export function loadingReducer(state = defaultState, action: any) {
  const { type, data } = action

  switch (type) {
    case typeEnum.SET_LOADING:
      return { ...state, ...data }
    default:
      return state
  }
}
