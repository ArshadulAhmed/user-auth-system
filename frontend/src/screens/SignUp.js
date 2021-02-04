import React, { useState } from "react";
import { connect } from "react-redux";
import { authSignup, removeItemOnLoad } from "../redux/actions/authentication";
import { Button } from "../components/CommonComponents";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const [error, setError] = useState(null);
  let history = useHistory();

  React.useEffect(() => {
    props.removeItemOnLoad();
  }, []);

  const handleRegistration = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (
      data.get("username").trim() === "" ||
      data.get("email").trim() === "" ||
      data.get("password").trim() === ""
    ) {
      setError("Please fill all the fields");
    } else {
      setError(null);
      props.authSignup(
        data.get("username"),
        data.get("email"),
        data.get("password")
      );
    }
  };

  if (props.isRegisteredUser === 200) {
    history.push("/login/");
  }

  return (
    <React.Fragment>
      <div className="signUp">
        <form onSubmit={handleRegistration}>
          <p className="pageTitle">SignUp</p>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
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

          <Link to="/login/" className="message">
            Already have account? Login here
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    isRegisteredUser: state.userAuth.status,

    isErrorPresent: state.errors.msg && state.errors.msg.message,
  };
}

const mapDispatchToProps = {
  authSignup,
  removeItemOnLoad,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
