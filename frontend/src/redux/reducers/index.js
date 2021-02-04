import { combineReducers } from "redux";
import messages from "../reducers/messages/messages";
import errors from "../reducers/errors/errors";

export default combineReducers({
  messages,
  errors,
});
