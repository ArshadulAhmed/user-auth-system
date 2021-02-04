import {
  LOAD_ITEMS_START,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_FAIL,
} from "../utils/types";

const initialState = {
  isLoading: false,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_ITEMS_START:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };

    case LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        // ...action.payload,
        data: action.payload,
        isLoading: false,
      };

    case LOAD_ITEMS_FAIL:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
