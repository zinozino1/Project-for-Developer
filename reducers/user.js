import { handleActions, createAction } from "redux-actions";
import { dummyMeCreator } from "../lib/util/dummyCreator";

// initial state

const initialState = {
  me: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  registerLoading: false,
  registerSuccess: false,
  registerFailure: null,
};

// export me

export const getMe = () => {
  if (!initialState.me) {
    return null;
  } else {
    console.log({ ...initialState.me });
    return { ...initialState.me };
  }
};

// action type

export const SET_USER = "user/SET_USER";

export const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "user/LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "user/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "user/LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "user/LOG_OUT_FAILURE";

export const REGISTER_REQUEST = "user/REGISTER_REQUEST"; // 제거예정
export const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
export const REGISTER_FAILURE = "user/REGISTER_FAILURE";

// action creator

export const setUser = createAction(SET_USER, (data) => data);

export const loginRequestAction = createAction(LOG_IN_REQUEST, (data) => data);
export const logoutRequestAction = createAction(LOG_OUT_REQUEST);

export const registerRequestAction = createAction(
  REGISTER_REQUEST,
  (data) => data,
);

// reducer

const userReducer = handleActions(
  {
    [SET_USER]: (state, action) => ({
      ...state,
      me: action.payload,
    }),
    [LOG_IN_REQUEST]: (state, action) => ({
      ...state,
      loginLoading: true,
      loginDone: false,
      loginError: null,
    }),
    [LOG_IN_SUCCESS]: (state, action) => ({
      ...state,
      loginLoading: false,
      loginDone: true,
      loginError: null,
      me: dummyMeCreator(),
    }),
    [LOG_IN_FAILURE]: (state, action) => ({
      ...state,
      loginLoading: false,
      loginDone: false,
      loginError: action.error,
    }),
    [LOG_OUT_REQUEST]: (state, action) => ({
      ...state,
      logoutLoading: true,
      logoutDone: false,
      logoutError: null,
    }),
    [LOG_OUT_SUCCESS]: (state, action) => ({
      ...state,
      logoutLoading: false,
      logoutDone: true,
      logoutError: null,
      me: null,
    }),
    [LOG_OUT_FAILURE]: (state, action) => ({
      ...state,
      logoutLoading: false,
      logoutDone: false,
      logoutError: action.error,
    }),
    [REGISTER_REQUEST]: (state, action) => ({
      // 제거예정
      ...state,
      registerLoading: true,
      registerSuccess: false,
      registerFailure: null,
    }),
    [REGISTER_SUCCESS]: (state, action) => ({
      ...state,
      registerLoading: false,
      registerSuccess: true,
      registerFailure: null,
    }),
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
      registerLoading: false,
      registerSuccess: false,
      registerFailure: null,
    }),
  },
  initialState,
);

export default userReducer;
