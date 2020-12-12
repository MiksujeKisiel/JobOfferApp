import * as actions from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
};
// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_JOB_START:
      return { ...state, loading: true };

    case actions.ADD_JOB_SUCCESS:
      return { ...state, loading: true, error: false };

    case actions.ADD_JOB_FAIL:
      return { ...state, loading: true, error: payload };

    default:
      return state;
  }
};
