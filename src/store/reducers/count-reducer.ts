const defaultState = {
  count: 0,
};

const SET_COUNT = "SET_COUNT";

// 同步action
export function setCount(data: any) {
  return { type: SET_COUNT, data };
}

// 异步action
export function setCountAsync(data: any): Function {
  return (dispatch: Function) => {
    setTimeout(() => {
      dispatch(setCount(data));
    }, 1000);
  };
}

export function countReducer(state = defaultState, action: any) {
  const { type, data } = action;

  switch (type) {
    case SET_COUNT:
      return data;
    default:
      return state;
  }
}
