import {
  USER_REGISTRATION_START,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGED_OUT,
  REMOVE_STATUS,
} from "../utils/types";

const initialState = {
  isLoading: false,
  data: null,
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION_START:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    case USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        isLoading: false,
      };

    case USER_REGISTRATION_FAIL:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    case USER_LOGIN_START:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case USER_LOGED_OUT:
      return {
        ...state,
        data: null,
        status: null,
        isLoading: false,
      };
    case REMOVE_STATUS:
      return {
        ...state,
        status: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
