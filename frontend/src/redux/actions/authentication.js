import axios from "axios";
import { returnErrors } from "../utils/messages";
import { tokenConfig } from "../utils/Configuration";
import {
  USER_REGISTRATION_START,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../utils/types";
import { baseURL } from "../utils/baseURL";

export const authSignup = (username, email, password) => (
  dispatch,
  getState
) => {
  const body = {
    username: username,
    email: email,
    password: password,
  };
  dispatch({
    type: USER_REGISTRATION_START,
  });
  axios
    .post(`${baseURL}/auth/signup/`, JSON.stringify(body), {
      headers: tokenConfig(),
    })

    .then((res) => {
      dispatch({
        type: USER_REGISTRATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: USER_REGISTRATION_FAIL,
      });
    });
};

export const authLogin = (username, password) => (dispatch, getState) => {
  const body = {
    username: username,
    password: password,
  };
  dispatch({
    type: USER_LOGIN_START,
  });
  axios
    .post(`${baseURL}/auth/signin/`, JSON.stringify(body), {
      headers: tokenConfig(),
    })
    .then((res) => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: USER_LOGIN_FAIL,
      });
    });
};
