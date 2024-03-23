const defaultState = {
  username: null,
};

const SET_USER = "SET_USER";

export function setUser(data: any) {
  return { type: SET_USER, data };
}

export function userReducer(state = defaultState, action: any) {
  const { type, data } = action;

  switch (type) {
    case SET_USER:
      return { ...state, ...data };
    default:
      return state;
  }
}
