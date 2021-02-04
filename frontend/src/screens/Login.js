import React from "react";
import { connect } from "react-redux";
import { authLogin, removeItemOnLoad } from "../redux/actions/authentication";
import { useHistory } from "react-router-dom";
import { Button } from "../components/CommonComponents";
import { Link } from "react-router-dom";

function Login(props) {
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    props.removeItemOnLoad();
  }, []);

  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (
      data.get("username").trim() === "" ||
      data.get("password").trim() === ""
    ) {
      setError("Please fill the fields");
    } else {
      setError(null);
      props.authLogin(data.get("username"), data.get("password"));
    }
  };

  if (props.isLoggedInUser) {
    history.push("/Dashboard/");
  }

  return (
    <React.Fragment>
      <div className="signUp">
        <form onSubmit={handleLogin}>
          <p className="pageTitle">Login</p>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            autoComplete="off"
          />
          <Button label="Submit" />

          {error ? <p className="errorMsg">{error}</p> : null}

          {props.isErrorPresent ? (
            <p className="errorMsg">{props.isErrorPresent}</p>
          ) : null}

          {props.isRegisteredUser === 200 ? (
            <p className="successAccount">
              Account Created Succesfully, Please login now
            </p>
          ) : (
            <Link to="/registration/" className="message">
              Don't have account? Create now!!!
            </Link>
          )}

          <p className="request">
            Please login or create new account to view page content
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedInUser: state.userAuth.data && state.userAuth.data.accessToken,
    isErrorPresent: state.errors.msg && state.errors.msg.message,
    isRegisteredUser: state.userAuth.status,
  };
}

const mapDispatchToProps = {
  authLogin,
  removeItemOnLoad,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
