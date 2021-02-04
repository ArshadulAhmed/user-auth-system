import axios from "axios";
import {
  LOAD_ITEMS_START,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_FAIL,
} from "../utils/types";

export const baseURL2 = "https://jsonplaceholder.typicode.com/users";

export const loadItems = () => (dispatch) => {
  dispatch({ type: LOAD_ITEMS_START });
  axios
    .get(`${baseURL2}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOAD_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_ITEMS_FAIL,
      });
    });
};
