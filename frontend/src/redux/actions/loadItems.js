import axios from "axios";
import { returnErrors } from "../utils/messages";
import { tokenConfig } from "../utils/Configuration";
import {
  LOAD_ITEMS_START,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_FAIL,
} from "../utils/types";

export const baseURL2 = "http://jsonplaceholder.typicode.com/photos";

export const loadItems = (page) => (dispatch) => {
  dispatch({ type: LOAD_ITEMS_START });
  axios
    .get(`${baseURL2}?_start=${0}&_limit=20`)
    .then((res) => {
      dispatch({
        type: LOAD_ITEMS_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_ITEMS_FAIL,
      });
    });
};
