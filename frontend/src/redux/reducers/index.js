import { combineReducers } from "redux";
import userAuth from "../reducers/userAuth";
import LoadIInitialltems from "../reducers/LoadIInitialltems";
import messages from "../reducers/messages/messages";
import errors from "../reducers/errors/errors";

export default combineReducers({
  userAuth,
  LoadIInitialltems,
  messages,
  errors,
});
